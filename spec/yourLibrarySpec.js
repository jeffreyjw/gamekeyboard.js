describe('gamekeyboard.js', function() {

    var keyboard = new GAMEKBD.Keyboard();

    setInterval(function(){

        if (keyboard.isKeyPressed(GAMEKBD.Keys.KEY_A))
        {
            console.log("pressed");
        }

        if (keyboard.isKeyReleased(GAMEKBD.Keys.KEY_A))
        {
            console.log("released");
        }

        keyboard.update();
    }, 20)

    it('should be true', function(){
        expect(true).toBe(true);
    });
  
});