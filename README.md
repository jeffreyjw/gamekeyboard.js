gamekeyboard.js
===

A small library to handle cross browser keyboard input, especially in games.

### Maintainer

[Jeffrey](https://github.com/jeffreyjw)

### Get Started

Download and include the library in your application:

```
<script src="gamekeyboard.min.js"></script>
```

You can also test the library in tests/test0/index.html

### How to use

First, instantiate a Keyboard:

```javascript
var keyboard = new GAMEKBD.Keyboard();
```

Then, in your game loop, add an update call - it should be called once per frame

```javascript
keyboard.update();
```

Now you can check the keys!

```javascript
// check if key A was just pressed
if (keyboard.isKeyPressed(GAMEKBD.Keys.KEY_A))
{
    //...
}

// check if space was just released
if (keyboard.isKeyReleased(GAMEKBD.Keys.SPACE))
{
    //...
}

// check if left arrow is down
if (keyboard.isKeyDown(GAMEKBD.Keys.ARROW_LEFT))
{
    //...
}

// check if key ESCAPE is up
if (keyboard.isKeyUp(GAMEKBD.Keys.ESCAPE))
{
    //...
}
```

### License

The MIT License (MIT)

Copyright (c) 2013 Jeffrey

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
