import { contextBridge } from "electron";

console.log("bananas");
console.log(process.env.TWITCH_CLIENT_ID);

contextBridge.exposeInMainWorld("envVars", {
  TWITCH_CLIENT_ID: process.env.TWITCH_CLIENT_ID,
});
