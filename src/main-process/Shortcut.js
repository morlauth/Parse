/*
* Register shortcuts in the main then send it with ipcMain to the renderer
* Currently not used since globalShortcuts are activated even if our app is not focused
* This means if someone presses command+s in Microsoft Word, taht command will trigger here...
* As a workaround, we use mousetrap in the renderer process
*/
const {globalShortcut} = require('electron');
const {sendICP} = require('./ipcSend');

class shortCut {

	constructor(mainWindow) {
		this.mainWindow = mainWindow;

		const createNewFile = globalShortcut.register('CommandOrControl+N', function() {
			sendICP(mainWindow, 'create_new_file');
		});
		const openFile = globalShortcut.register('CommandOrControl+O', function() {
			sendICP(mainWindow, 'open_file');
		});
		const saveFile = globalShortcut.register('CommandOrControl+S', function() {
			sendICP(mainWindow, 'save_file');
		});
		const saveFileAs = globalShortcut.register('Shift+CommandOrControl+S', function() {
			sendICP(mainWindow, 'save_file_as');
		});
		const switchTab = globalShortcut.register('Control+Tab', function() {
			sendICP(mainWindow, 'switch_tab');
		});
	}

}

exports.shortCut = shortCut;