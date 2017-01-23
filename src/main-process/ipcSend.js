/* 
* Send content to the render process
*/

function sendICP(win, action, data) {
	win.webContents.send(action, data || {});
}

exports.sendICP = sendICP;