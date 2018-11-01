`use strict`

const { app, BrowserWindow } = require(`electron`)
const httpServer = require(`http-server`)
const path = require(`path`)

const server = httpServer.createServer({
  root: path.join(__dirname, 'embed'),
  robots: false
})

// Assign random open port for http server
server.listen(0)

// This may get garbage-collected without a global reference
let mainWindow

function createWindow () {
  
  mainWindow = new BrowserWindow({
    width: 1024, 
    height: 768
  })

  mainWindow.loadURL(`http://localhost:${server.server.address().port}`)

  mainWindow.on(`closed`, () => {

    mainWindow = null
  })
}

app.on(`ready`, createWindow)

app.on(`window-all-closed`, () => {

  // Mirror default Mac behavior
  if (process.platform !== `darwin`) {

    app.quit()
  }
})

app.on(`activate`, () => {

  // Mirror default Mac behavior
  if (mainWindow === null) {

    createWindow()
  }
})