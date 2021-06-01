# Snake Speedrun Timer Chrome Extension

Simple timer added to your game to count your time and help beat your best time.\

Google Snake Game [here](https://www.google.com/fbx?fbx=snake_arcade).

![preview](https://raw.githubusercontent.com/kubo550/game-speedrun-timer/master/snake-preview.png)

## Instalation 

 1. Extract the ZIP file into a folder.
 2. Open Chrome*, and enter "chrome://extensions" in the address bar, or get to extensions via settings.
 3. Once you have gotten to extensions, click the button on the top right labeled "developer mode" to turn on Dev Mode.
 4. Now on the top left corner, there is a button labeled "load unpacked". Click that and select the folder in which you extracted the snake-timer-app.
 5. Go to the (game)[https://www.google.com/fbx?fbx=snake_arcade] and refresh the page!.


## Usage

Counter will automatically stop when player gets **50** score. \
You can chagne goal score in *content.js* 

```javascript
 //...
 const FRUIT_LIMIT = 50; // type any number you want
 //...
```

You can also change default keys to stop start and restart timer 

```javascript

const START_KEY = "ArrowRight";
const STOP_KEY = "x";
const RESTART_KEY = " ";
 
```


- Press **Arrow Right** to start the timer.
- Press **x** to stop the timer.
- press **Space** to restart the timer.
