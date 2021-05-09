# GTA SA Menu
Simple Javascript notifications based on GTA San Andreas. Responsive

## Installation
Add CSS and JS in your code.
```html
<link rel="stylesheet" href="https://j33sus.github.io/gtasa-notification.js/css/gtasa-notification.min.css">
```
```html
<script src="https://j33sus.github.io/gtasa-notification.js/js/gtasa-notification.min.js"></script>
```

## Use
**Method 1:** Pass object with params.
```js
let options = {
    message: 'hello', // your message
    time: 5000, // time in milliseconds
    position: 'top left' // position in screen
};
GTASA.notification(options);
```
```js
GTASA.notification({message: 'Hello!', position: 'top left', time: 5000});
```
**Method 2:** Call inline function passing arguments.
```js
GTASA.notification(message, position, time);
```
```js
GTASA.notification('Hello!', 'top left', 5000);
```

## Position
`top left`, `top right`, `bottom left`, `bottom right`

## Custom sound
```js
let options = {
    // ...
    enableSound: true, // default
    soundUrl: 'yourfile.ext'
};
GTASA.notification(options);
```
```js
GTASA.notification({enableSound: true, soundUrl: 'yourfile.ext'});
```
## Preview
URL: https://J33sus.github.io/gtasa-notification.js/
