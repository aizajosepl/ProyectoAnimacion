GamePlayManager = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    },
    preload: function() {
        game.load.image('fondo', 'assets/images/fondo-noche.png');
        game.load.spritesheet('caballero', 'assets/images/spritesoldier.png', 155, 150, 8);
        game.load.spritesheet('caballerodos', 'assets/images/spritesoldierdos.png', 120, 160, 8);
    },
    create: function() {
        this.fondo = game.add.tileSprite(0, 0, 1280, 720,'fondo');

        this.caballero = game.add.sprite(100, 100, 'caballero');
        this.caballero.y = 400;
        this.caballero.scale.setTo(1.5);
        this.caballero.animations.add('movimiento', [0,1,2,3,4,5,6,7],9,true);
        this.caballero.animations.play('movimiento');

        this.caballerodos = game.add.sprite(200, 200, 'caballerodos');
        this.caballerodos.y = 385;
        this.caballerodos.scale.setTo(1.5);
        this.caballerodos.animations.add('movimientodos', [0,1,2,3,4,5,6,7],6,true);
        this.caballerodos.animations.play('movimientodos');
    },
    update: function() {
        console.log("update");
        this.fondo.tilePosition.x -=1;
        this.caballero.x += 2;  
        if (this.caballero.x >= this.game.world.width) {
            this.caballero.x = -100;
        } 
        
        this.caballerodos.x += 2;  
        if (this.caballerodos.x >= this.game.world.width) {
            this.caballerodos.x = -100;
        } 
    }
}
var game = new Phaser.Game(1200, 960, Phaser.CANVAS);

game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");