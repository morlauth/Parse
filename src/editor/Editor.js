/*
* Main wrapper for the editor, creates templates, handles key shortcuts emitted by Mousetrap
* Also holds and creates all the instances.
* The Editor has a main instance, the one which has focus
* This main instance automatically recieves save commands
* Editor handles switching the active instance
*/
const Moustrap = require('mousetrap');
const {dialog} = require('electron').remote;
const {instance} = require('./Instance');
var icp = require('electron').ipcRenderer;

class Editor {

	constructor() {
		var self = this;
		this.renderDOM();

		this.bindShortCuts();
		this._instances = [];
		this.hiddenInstance = null;
		this.activeEditor = null;
		var length = this._instances.length

		if (length < 1) {
			this.createInstance(null);
		}
		window.editor = this;

		icp.on('newFile', () => {
			self.createInstance(null);
		});
		icp.on('openFile', () => {
			this.openFile(this);
		});
		icp.on('saveFile', () => {
			this.saveFile(this);
		});
		icp.on('saveFileAs', () => {
			this.saveFileAs(this);
		});
	}

	renderDOM() {
		this.$editorContainer = $("<div class='contentMain'></div>");
		this.$tabContainer = $("<div class='tabContainer'></div>");
		this.$paneContainer = $("<div class='paneContainer'></div>");
		this.$editorContainer.append(this.$tabContainer);
		this.$editorContainer.append(this.$paneContainer);

		$('body').prepend(this.$editorContainer);
	}

	bindShortCuts() {
		/*
		* We need the `self` variable in order to call upon functions of the Editor class, inside moustrap, `this`
		* refers to the moustrap object and we can't call upon the functions we want
		*/
		var self = this;

		if (process.platform !== 'darwin') { // Mac using command for most things, windows and linux uses control
			Moustrap.bind('ctrl+n', function() {
				self.createNewFile(self);
			});
			Moustrap.bind('ctrl+o', function() {
				self.openFile(self);
			});
			Moustrap.bind('ctrl+s', function() {
				self.saveFile(self)
			});
			Moustrap.bind('shift+ctrl+s', function() {
				self.saveFileAs(self);
			});
			Moustrap.bind('ctrl+tab', function() {
				self.switchTabByKey(self);
			});
		} else {
			Moustrap.bind('command+n', function() {
				self.createNewFile(self);
			});
			Moustrap.bind('command+o', function() {
				self.openFile(self);
			});
			Moustrap.bind('command+s', function() {
				self.saveFile(self)
			});
			Moustrap.bind('shift+command+s', function() {
				self.saveFileAs(self);
			});
			Moustrap.bind('ctrl+tab', function() {
				self.switchTabByKey(self);
			});
		}
	}

	createInstance(path) {
		var index = this._instances.length;

		var i = new instance(path, index, false, null, null);
		this._instances.push(i);
		this.activeEditor = i;
		this.hideNonActiveEditors();
	}
	openFile(self) {
		dialog.showOpenDialog({properties: ['openFile', 'multiSelections']}, function(files) {
			for (var x = 0; files[x]; x++) {
				self.createInstance(files[x]);
			}

			self.hideNonActiveEditors();
		});
	}
	createNewFile(self) {
		if (self.hiddenInstance) {
			self.transferHiddenInstanceToFull(self);
		} else {
			self.createInstance(null);
		}
	}

	hideNonActiveEditors() {
		var activeEditorIndex = this._instances.indexOf(this.activeEditor);

		for(var x = 0; this._instances[x]; x++) {
			this._instances[x].removeActive();
		}

		this._instances[activeEditorIndex].makeActive();
	}

	saveFile(self) {
		var activeEditorIndex = self._instances.indexOf(self.activeEditor);

		self._instances[activeEditorIndex].saveFile();
	}
	saveFileAs(self) {
		var activeEditorIndex = self._instances.indexOf(self.activeEditor);

		self._instances[activeEditorIndex].saveFileAs();
	}

	switchTabByKey(self) { // Handle control+tab
		var newEditorIndex = self._instances.indexOf(self.activeEditor) + 1;
		if (self._instances[newEditorIndex]) {
			self.activeEditor = self._instances[newEditorIndex];
		} else {
			self.activeEditor = self._instances[0];
		}

		self.hideNonActiveEditors();
	}
	setNewActive(index) {
		this.activeEditor = this._instances[index];
		this.hideNonActiveEditors();
	}

}

exports.editor = Editor;