import "dotenv/config";
import level from "level";
import { app, BrowserWindow } from "electron";
// This allows TypeScript to pick up the magic constant that's auto-generated by Forge's Webpack
// plugin that tells the Electron app where to look for the Webpack-bundled app code (depending on
// whether you're running in development or production).
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

const db = level("oss-db");

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  // eslint-disable-line global-require
  app.quit();
}

const createWindow = (): void => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    height: 720,
    width: 1080,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Limit what external pages can be loaded inside of the app.
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith("https://id.twitch.tv/oauth2/authorize")) {
      return { action: "allow" };
    }

    return { action: "deny" };
  });

  // Handle redirects to capture auth tokens.
  mainWindow.webContents.on("did-create-window", (childWindow) => {
    childWindow.webContents.on("will-navigate", async (event, url) => {
      if (url.startsWith("http://localhost/login")) {
        event.preventDefault();
        const newUrl = new URL(url);
        const params = new URLSearchParams(newUrl.hash.substring(1));
        const token = params.get("access_token");
        await db.put("TWITCH_TOKEN", token);
        const value = await db.get("TWITCH_TOKEN");
        childWindow.close();
      }
    });
  });

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
