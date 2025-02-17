import { app, BrowserWindow, ipcMain ,Menu} from 'electron';
import url from 'url';
import path from 'path';
import  createTray  from './tray';
import mainMenu from './mainMenu';
import contextMenu from './contextMenu';
import WinState from 'electron-win-state';
import modalMsgBox from './dialogs';

let __filename = url.fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);

//窗口管理
const winState = new WinState({
    defaultWidth: 800,
    defaultHeight: 600,
})

//主窗口
const createWindow = () => {
    const mainWindow = new BrowserWindow({
        ...winState.winOptions,
        // width: 1000,
        // height: 600,
        show: false,
        webPreferences: {
            sandbox: false,
            nodeIntegration: true,
            contextIsolation: true,
            preload: path.resolve(__dirname, 'preload.mjs')
        }
    })

    if (process.env['VITE_DEV_SERVER_URL']) {
        mainWindow.loadURL(process.env['VITE_DEV_SERVER_URL'])
    } else {
        mainWindow.loadFile('dist/index.html')
    }



    mainWindow.on('ready-to-show', () => {
        mainWindow.show();
    })


    const wc = mainWindow.webContents;

    wc.on('did-finish-load', () => {
        console.log('finfsh');
    })


    wc.on('context-menu', (e, params) => {
        console.log('context-menu', params);
        contextMenu.popup();
    })

    
    //带回调的右键
    Menu.setApplicationMenu(mainMenu('我的消息窗口', (args) => {
        console.log(args);
    }))

    
    createTray(app,mainWindow);

    winState.manage(mainWindow)

    ipcMain.handle('send-event', (event, msg) => {
        console.log('ipcMain', 'send-event', msg);
        modalMsgBox(mainWindow,msg);
        return msg;
    })
}




app.disableHardwareAcceleration();
app.whenReady().then(() => {
    createWindow()
})