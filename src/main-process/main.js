const {app, BrowserWindow, Menu} = require('electron');

const browserPage = `file://${__dirname}/../index.html`;

let mainWindow = null;
let appIsReady = false;

function sendICP(action, data) {
	mainWindow.webContents.send(action, data || {});
}

const template = [
	{

		label: 'File',
		submenu: [
			{
				label: 'New File',
				accelerator: 'CmdOrCtrl+N',
				click: function() {sendICP('newFile')}
			},
			{
				label: 'Open',
				accelerator: 'CmdOrCtrl+O',
				click: function() {sendICP('openFile')}
			},
			{
				label: 'Save',
				accelerator: 'CmdOrCtrl+S',
				click: function() {sendICP('saveFile')}
			},
			{
				label: 'Save As',
				accelerator: 'Shift+CmdOrCtrl+S',
				click: function() {sendICP('saveFileAs')}
			}
		]
	},
	{
		label: 'Edit',
		submenu: [
			{
				role: 'undo'
			},
			{
				role: 'redo'
			},
			{
				type: 'separator'
			},
			{
				role: 'cut'
			},
			{
				role: 'copy'
			},
			{
				role: 'paste'
			},
			{
				role: 'delete'
			},
			{
				role: 'selectall'
			}
		]
	},
	{
		label: 'View',
			submenu: [
			{
				role: 'resetzoom'
			},
			{
				role: 'zoomin'
			},
			{
				role: 'zoomout'
			},
			{
				type: 'separator'
			},
			{
				role: 'togglefullscreen'
			}
		]
	},
	{
		role: 'window',
			submenu: [
			{
				role: 'minimize'
			},
			{
				role: 'close'
			}
		]
	},
	{
		role: 'help',
		submenu: [
			{
				label: 'Learn More',
				click () { require('electron').shell.openExternal('https://github.com/morlauth/parse') }
			}
		]
	}
]

if (process.platform === 'darwin') {
  template.unshift({
    label: app.getName(),
    submenu: [
      {
        role: 'about'
      },
      {
        type: 'separator'
      },
      {
        role: 'services',
        submenu: []
      },
      {
        type: 'separator'
      },
      {
        role: 'hide'
      },
      {
        role: 'hideothers'
      },
      {
        role: 'unhide'
      },
      {
        type: 'separator'
      },
      {
        role: 'quit'
      }
    ]
  })
  // Edit menu.
  template[1].submenu.push(
    {
      type: 'separator'
    },
    {
      label: 'Speech',
      submenu: [
        {
          role: 'startspeaking'
        },
        {
          role: 'stopspeaking'
        }
      ]
    }
  )
  // Window menu.
  template[3].submenu = [
    {
      label: 'Close',
      accelerator: 'CmdOrCtrl+W',
      role: 'close'
    },
    {
      label: 'Minimize',
      accelerator: 'CmdOrCtrl+M',
      role: 'minimize'
    },
    {
      label: 'Zoom',
      role: 'zoom'
    },
    {
      type: 'separator'
    },
    {
      label: 'Bring All to Front',
      role: 'front'
    }
  ]
}


function createWindow() {
	const boundFuncs = require('../util/Bounds'); // Since the screen is only available after app is ready, import module here

	let bounds = boundFuncs.getBounds();

	mainWindow = new BrowserWindow(bounds);

	var menu = Menu.buildFromTemplate(template);
	Menu.setApplicationMenu(menu);

	mainWindow.loadURL(browserPage);

	mainWindow.on('close', function() {
		boundFuncs.saveBounds();
	});

	mainWindow.on('closed', function() {
		mainWindow = null;
	});

	//var {shortCut} = require('./Shortcut');
	//shortCut = new shortCut(mainWindow);

	return mainWindow;
}

app.on('ready', function() {
	appIsReady = true;
	createWindow();
});

app.on('window-all-closed', function() {
	if (process.platform !== 'darwin') { // Mac has the unique ability to keep an app open if there are no open windows
		app.quit();
	}
});

app.on('activate', function() { // When there are no open windows and the app icon is clicked (mac)
	if (!mainWindow && appIsReady) {
		createWindow();
	}
});