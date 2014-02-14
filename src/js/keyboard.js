"use strict";
GAMEKBD.Keyboard = (function() {
  var instance;

  function Keyboard() {}

  instance = null;

  GAMEKBD.KeyboardInput = (function() {
    var i, map, mapOld;

    map = (function() {
      var _i, _results;
      _results = [];
      for (i = _i = 0; _i <= 200; i = ++_i) {
        _results.push(false);
      }
      return _results;
    })();

    mapOld = (function() {
      var _i, _results;
      _results = [];
      for (i = _i = 0; _i <= 200; i = ++_i) {
        _results.push(false);
      }
      return _results;
    })();

    function KeyboardInput() {
      document.addEventListener("keydown", this._handleKeyDown, false);
      document.addEventListener("keyup", this._handleKeyUp, false);
    }

    KeyboardInput.prototype.update = function() {
      mapOld = map;
      return map = map.slice();
    };

    KeyboardInput.prototype._handleKeyDown = function(e) {
      var code;
      code = e.keyCode;
      return map[code] = true;
    };

    KeyboardInput.prototype._handleKeyUp = function(e) {
      var code;
      code = e.keyCode;
      return map[code] = false;
    };

    KeyboardInput.prototype.isKeyUp = function(keyCode) {
      return !map[keyCode];
    };

    KeyboardInput.prototype.isKeyDown = function(keyCode) {
      return map[keyCode];
    };

    KeyboardInput.prototype.isKeyPressed = function(keyCode) {
      return !mapOld[keyCode] && map[keyCode];
    };

    KeyboardInput.prototype.isKeyReleased = function(keyCode) {
      return mapOld[keyCode] && !map[keyCode];
    };

    return KeyboardInput;

  })();

  Keyboard.get = function() {
    return instance != null ? instance : instance = new GAMEKBD.KeyboardInput();
  };

  return Keyboard;

})();
