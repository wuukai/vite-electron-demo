import { dialog } from "electron";


const modalMsgBox = (win,msg) => {
    const answers = ['yes', 'no']
    dialog.showMessageBox(win,{
        title: 'msgBox',
        message: msg,
        detail: 'detail ',
        buttons: answers,
        modal: true,
    }).then((r) => {
        console.log(answers[r.response]);
    })

}


// dialog.showOpenDialog({
//     buttonLabel:'选择',
//     defaultPath: app.getAppPath(),
//     properties:['multiSelections','createDirectory','openFile']
// }).then((result)=>{
//     console.log(result.filePaths);
// })

// dialog.showSaveDialog({}).then((r)=>{
//     console.log(r.filePaths)
// })

// const answers = ['yes', 'no', 'maybe']
// dialog.showMessageBox({
//     title: 'msbox',
//     message: 'selset a',
//     detail: 'detail ',
//     buttons: answers,
// }).then((r) => {
//     console.log(answers[r.response]);
// })


export default modalMsgBox;