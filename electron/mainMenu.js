import { Menu, dialog} from 'electron'

const mainMenu = (args,callback) => {
    return Menu.buildFromTemplate([
        {
            label: 'Electron', // 主菜单项
            submenu: [
                {
                    label: '1',  // 子菜单项 1
                    click: () => { 
                        console.log('Item 1 clicked'); 
                        msgBox(args+"子菜单项 1");
                        callback(args+"子菜单项 1")
                    }
                },
                {
                    label: '2',  // 子菜单项 2
                    click: () => { 
                        console.log('Item 2 clicked');
                        msgBox(args+"子菜单项 2");
                        callback(args+"子菜单项 2")
                     }
                },
                // {
                //   type: 'separator' // 分隔符
                // },
                {
                    label: 'Quit', // 退出菜单项
                    accelerator: 'CmdOrCtrl+Q', // 快捷键
                    click: () => { app.quit(); }
                }
            ]
        },
        {
            label: 'Electron-tools', // 主菜单项
            submenu: [
                {
                    label: 'DevTools',  // 子菜单项 1
                    role: 'toggleDevTools',
                    accelerator: 'F12'
                },
                {
                    label: 'Quit', // 退出菜单项
                    accelerator: 'CmdOrCtrl+Q', // 快捷键
                    click: () => { app.quit(); }
                }
            ]
        }
    ]);
}

const msgBox = (msg) => {
    const answers = ['yes', 'no']
    dialog.showMessageBox({
        title: 'msgBox',
        message: msg,
        detail: 'detail ',
        buttons: answers,
    }).then((r) => {
        console.log(answers[r.response]);
    })

}


export default mainMenu;