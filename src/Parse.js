/*
* Load the main application
* We use jquery since we are not downloading files like a regular web app, this one takes less time to load files
* Jquery also comes with great tools for creating, selecting, and managing elements in the DOM
* Lastly, LESS can be loaded in the app since we are again not relying on an internet connection for this to work
*/

const $ = require('jquery');
const e = require('./editor/Editor').editor;

/*
* Since we have to load LESS files then convert them into CSS, we want that to finish
* before we actually load the main Editor instance and render HTML
*/
$(document).ready(function() {
	var Editor = new e();
});