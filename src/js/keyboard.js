GAMEKBD.Keyboard = (function() {
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

  function Keyboard() {
    document.addEventListener("keydown", this._handleKeyDown, false);
    document.addEventListener("keyup", this._handleKeyUp, false);
  }

  Keyboard.prototype.update = function() {
    mapOld = map;
    return map = map.slice();
  };

  Keyboard.prototype._handleKeyDown = function(e) {
    var code;
    code = e.keyCode;
    return map[code] = true;
  };

  Keyboard.prototype._handleKeyUp = function(e) {
    var code;
    code = e.keyCode;
    return map[code] = false;
  };

  Keyboard.prototype.isKeyUp = function(keyCode) {
    return !map[keyCode];
  };

  Keyboard.prototype.isKeyDown = function(keyCode) {
    return map[keyCode];
  };

  Keyboard.prototype.isKeyPressed = function(keyCode) {
    return !mapOld[keyCode] && map[keyCode];
  };

  Keyboard.prototype.isKeyReleased = function(keyCode) {
    return mapOld[keyCode] && !map[keyCode];
  };

  return Keyboard;

})();
