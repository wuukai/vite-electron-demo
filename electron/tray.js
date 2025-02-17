import { Tray, Menu } from 'electron';


const createTray = (app, window) => {

    const iconPath = "./resources/images/icon.ico";
    const tray = new Tray(iconPath);
    tray.setToolTip('我的应用');

    tray.on('click', (e) => {
        if (window.isVisible()){
            return;
        }else{
            window.show();
        }
    })

    tray.setContextMenu(Menu.buildFromTemplate([
        {
            label: '隐藏',
            click: () => {
                window.isVisible() ? window.hide() : window.show();
            }
        },
        {
            label: '退出',
            click: () => {
                app.quit();
            }
        },
    ]));
}


export default createTray;

