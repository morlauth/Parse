#### Welcome to Parse
Parse is a text editor which I built upon electron. The entire program is written in javascript and uses LESS, Jquery, and Ace as frameworks to help develop the project.
The main code can be found under `src/editor`. There you can see the actual code which runs the editor.
The code which initalizes the app is located under `src/main-process`. I kept the `src-noconflict` folder out of the `lib` folder due to issues which Ace.

#### How to run
First make sure you have node.js installed, don't worry, npm comes baked into node.
In order to run this app, simply download it. CD into the directory then type `npm i`. This will download all the modules you need. It doesn't take very long.
Afterwards you are ready! Simply type `npm test` and your good to go!

#### Binaries
If you want to compile the app for mac, type in your console `npm run build-mac`!