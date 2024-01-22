const { app, BrowserWindow } = require('electron');

function createWindow () {
  // Tworzenie okna przeglądarki.
  const win = new BrowserWindow({
    width: 200,
    height: 100,
    resizable: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // Ładowanie pliku HTML do okna przeglądarki.
  win.loadFile('index.html')
}

// Wywołanie funkcji createWindow() po uruchomieniu aplikacji
app.whenReady().then(createWindow)

// Zamykanie aplikacji po zamknięciu wszystkich okien
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

