const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const mainWindow = new BrowserWindow({
        fullscreen: true,
        webPreferences: {
            contextIsolation: true,  // Isolasi konteks untuk keamanan
            nodeIntegration: false,  // Nonaktifkan integrasi Node.js untuk menghindari konflik
            preload: path.join(__dirname, 'preload.js') // Optional, jika Anda perlu melakukan pra-pemrosesan
        }
    });

    mainWindow.loadURL('https://garamqu.id/');
    // mainWindow.webContents.openDevTools(); // Membuka DevTools untuk debugging
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
