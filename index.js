const { win, BrowserWindow, app } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: "white",
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      javascript: true,
    },
  });
  win.loadFile("index.html");
};

app.whenReady().then(createWindow);
