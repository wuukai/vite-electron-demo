console.log('perload');
import {contextBridge, ipcRenderer} from 'electron'


const handleSend = async (msg) => {
    let fallback = await ipcRenderer.invoke('send-event', msg)
    console.log(fallback);
}

const copy = () => {
    clipboard.writeText("hello clipboard")
}

const show= () => {
    const text=clipboard.readText();
    return(text);
}

contextBridge.exposeInMainWorld('myApi', {
    plarform: process.platform,
    handleSend,
    copy,
    show,
})
