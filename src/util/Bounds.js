/* 
* Get the windowBounds of the main window
*/

const {app, screen} = require('electron')
const fs = require('fs');
const path = require('path');

/*
* @return {Array} windowBounds returns various variables about the screen
*/
function getBounds() {
	let appDataPath = app.getPath('userData');

	let boundsDataPath = path.join(appDataPath, 'windowBounds.json');
	let windowBounds = null;

	try {
		windowBounds = JSON.parse(fs.readFileSync(boundsDataPath, 'utf-8'));
	} catch(e) { // If there is no windowBounds file, we will maximize the app
		var screenSize = screen.getPrimaryDisplay().workAreaSize;

		windowBounds = {
			width: screenSize.width,
			height: screenSize.height,
			x: 0,
			y: 0
		}
	}

	return windowBounds;
}

/* 
* @param {Array} the new windowBounds data
*/
function saveBounds(bounds) {
	let appDataPath = app.getPath('userData');

	let boundsDataPath = path.join(appDataPath, 'windowBounds.json');

	fs.writeFileSync(boundsDataPath, JSON.stringify(bounds));
}

exports.getBounds = getBounds;
exports.saveBounds = saveBounds;