describe('gamekeyboard.js', function() {

    var keyboard = new GAMEKBD.Keyboard();

    it('should be equal', function(){
        expect(keyboard.map).toEqual(keyboard.mapOld);
    });

    it('should not be equal', function(){
        var evt = document.createEvent("KeyboardEvent");
        evt.initKeyboardEvent("keydown", true, true, null, false, false, false, false, 0, 0);
        document.dispatchEvent(evt);
        expect(keyboard.map).toNotEqual(keyboard.mapOld);
    });

    it('should be equal again', function(){
        keyboard.update();
        expect(keyboard.map).toEqual(keyboard.mapOld);
    });
});