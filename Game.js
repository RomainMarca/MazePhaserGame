Ball.Game = function(game) {};
Ball.Game.prototype = {
    create: function() {
        ball = this.add.sprite((320-22)/2, 450, 'ball');
        this.keys = this.game.input.keyboard.createCursorKeys();

        window.addEventListener("deviceorientation", this.handleOrientation, true);

        this.hole = this.add.sprite(Ball._WIDTH*0.5, 90, 'hole');
        this.physics.enable(this.hole, Phaser.Physics.ARCADE);
        this.hole.anchor.set(0.5);
        this.hole.body.setSize(2, 2);
    },
    initLevels: function() {},
    showLevel: function(level) {},
    updateCounter: function() {},
    managePause: function() {},
    manageAudio: function() {},
    update: function() {
        if (this.keys.left.isDown) {
            this.ball.body.velocity.x -= this.movementForce;
        } else if (this.keys.right.isDown) {
            this.ball.body.velocity.x += this.movementForce;
        }
        if (this.keys.up.isDown) {
            this.ball.body.velocity.y -= this.movementForce;
        } else if (this.keys.down.isDown) {
            this.ball.body.velocity.y += this.movementForce;
        }
    },
    wallCollision: function() {},
    handleOrientation: function(e) {},
    finishLevel: function() {}
};

//TODO continue on "Création du mur du labyrinthe"