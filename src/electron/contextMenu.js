import { Menu } from "electron";

let contextMenu = Menu.buildFromTemplate([
    {
        label: 'item1',
        click: () => {
            console.log(1);
        }
    },
    {
        label: 'item2',
        click: () => {
            console.log(2);
        }
    }
])

export default contextMenu;