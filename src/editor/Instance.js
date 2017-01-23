/*
* The actual instance which holds the ace editor, manages saving files, setting active view
*/

const {dialog} = require('electron').remote;
const fs = require('fs');
const pathUtil = require('path');

var modeList = ace.require('ace/ext/modelist');

class Instance {

	constructor(path, index, transfer, pane, editor) {
		this.path = path;
		this.index = index;

		if (path) {
			this.language = modeList.getModeForPath(path).mode;
			this.name = pathUtil.basename(path);
			this.content = fs.readFileSync(path, 'utf8');
		} else {
			this.name = 'untitled';
		}

		if (transfer) {
			this.$pane = pane;
			this.createTabElement();
			this.setupCodemirror(); // I use ace now
		} else {
			this.createDOMElements();
			this.setupCodemirror();
		}

		this.$tab.click(this.makeSelfActive.bind(this));
		this.$tab.text(this.name);
	}

	createTabElement() { 
		this.$tab = $(`<div class='tab'></div>`);
		$('.tabContainer').append(this.$tab);
	}
	createDOMElements() {
		this.$tab = $(`<div class='tab'></div>`);
		this.$pane = $(`<div class='pane'></div>`);

		$('.tabContainer').append(this.$tab);
		$('.paneContainer').append(this.$pane);
	}
	setupCodemirror() {
		var self = this;

		self.ace = ace.edit(self.$pane.get(0));
		self.ace.container.getElementsByClassName('ace_text-input')[0].className += ' mousetrap';
		self.ace.setTheme('ace/theme/facebook');
		self.ace.session.setMode(this.language);
		self.ace.setOptions({
			fontFamily: 'Fira Code',
			fontSize: '14px',
			scrollPastEnd: true
		});

		if (this.content) {
			self.ace.setValue(this.content, 1);
		}

		setTimeout(function() {
			self.ace.focus();
		}, 0);
	}

	makeActive() {
		this.$tab.addClass('active');
		this.$pane.addClass('active');
		this.ace.focus();
	}
	removeActive() {
		this.$tab.removeClass('active');
		this.$pane.removeClass('active');
	}
	makeSelfActive() {
		window.editor.setNewActive(this.index);
	}

	saveFile() {
		if (this.path) {
			fs.writeFileSync(this.path, this.getText());
		} else {
			this.saveFileAs();
		}
	}
	saveFileAs() {
		var self = this;

		setTimeout(function() { // Dialog glitches out unless we add slight delay
			dialog.showSaveDialog(function(path) {
				self.path = path;
				self.name = pathUtil.basename(path);
				self.$tab.text(self.name);
				self.language = modeList.getModeForPath(self.path).mode;
				self.ace.session.setMode(self.language);

				self.saveFile();
			});
		}, 0);
	}

	getText() {
		return this.ace.getValue();
	}

}

exports.instance = Instance;