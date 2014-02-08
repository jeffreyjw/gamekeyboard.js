class GAMEKBD.Keyboard

  map = (false for i in [0..200])
  mapOld = (false for i in [0..200])

  constructor: () ->
    document.addEventListener("keydown", this._handleKeyDown, false)
    document.addEventListener("keyup", this._handleKeyUp, false)

  update: () ->
    mapOld = map
    map = map.slice()

  _handleKeyDown: (e) ->
    code = e.keyCode
    map[code] = true

  _handleKeyUp: (e) ->
    code = e.keyCode
    map[code] = false

  isKeyUp: (keyCode) ->
    return map[keyCode]

  isKeyDown: (keyCode) ->
    return !map[keyCode]

  # was the key pressed in this frame
  isKeyPressed: (keyCode) ->
    return (!mapOld[keyCode] && map[keyCode])

  # was the key released in this frame
  isKeyReleased: (keyCode) ->
    return (mapOld[keyCode] && !map[keyCode])