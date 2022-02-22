import { contextBridge } from "electron";

contextBridge.exposeInMainWorld("envVars", {
  TWITCH_CLIENT_ID: process.env.TWITCH_CLIENT_ID,
});
