// create a new scene
let gameScene = new Phaser.Scene('Game');

// initiate scene parameters
gameScene.init = function() {
    // player speed
    this.playerSpeed = 3;

    // enemy speed boundaries
    this.enemyMinSpeed = 2;
    this.enemyMaxSpeed = 4;

    // boundaries
    this.enemyMinY = 80;
    this.enemyMaxY = 280;

    // set termination to false (used when game is over)
    this.isTerminating = false;
}

// load assets (executed once after init() and before create())
gameScene.preload = function () {
    // load images
    this.load.image('background', 'assets/background.png');
    this.load.image('player', 'assets/player.png');
    this.load.image('enemy', 'assets/dragon.png');
    this.load.image('goal', 'assets/treasure.png');
};

// create objects (executed onace after preload())
gameScene.create = function () {

    // create background sprite
    let bg = this.add.sprite(0, 0, 'background');
    bg.setOrigin(0, 0); // set origin of sprite to top left

    // create player sprite
    this.player = this.add.sprite(40, this.sys.game.config.height / 2, 'player');
    // player.depth = 1;        // not needed, just as an example: If this is created before the background it will be shown behind the background, to avoid that the depth could be set to a higher number (default: 0)
    this.player.setScale(0.5);   // scale a sprite (change the .displayWidth / .displayHeight property)

    // create goal (treasure) sprite
    this.goal = this.add.sprite(this.sys.game.config.width - 80, this.sys.game.config.height / 2, 'goal');
    this.goal.setScale(0.6);   // scale

    // create enemy group
    this.enemies = this.add.group({
        key: 'enemy',           // key of the sprite
        repeat: 4,               // how many are created
        setXY: {
            x: 90,             // x position of the first one
            y: 100,             // y position of the second one
            stepX: 100,           // steps of the x positions of all elements
            stepY: 20           // steps of the y positions of all elements
        }
    });    // create a group

    // setting the scale of the group elements
    Phaser.Actions.ScaleXY(this.enemies.getChildren(), -0.4, -0.4) // reduce the scale of all elements of the group (from 1 to 0.6)

    // flip the enemy and set speed (this method is called for each element)
    Phaser.Actions.Call(this.enemies.getChildren(), function (enemy) {
        // flip enemy
        enemy.flipX = true;

        // set the speed
        let dir = Math.random() < 0.5 ? 1 : -1;  // random direction
        let speed = this.enemyMinSpeed + Math.random() * (this.enemyMaxSpeed - this.enemyMinSpeed)
        enemy.speed = dir * speed;

    }, this);  // the 'this' at the end is to place it in the scene context

};

// update method
gameScene.update = function () {

    // if the game is terminating don't execute this function
    if(this.isTerminating) return;

    // check for active input
    if(this.input.activePointer.isDown) {
        // player walks
        this.player.x += this.playerSpeed;
    }

    // treasure overlap check
    let playerRect = this.player.getBounds();
    let goalRect = this.goal.getBounds();

    if(Phaser.Geom.Intersects.RectangleToRectangle(playerRect, goalRect)) {

        // restart game
        return this.gameOver();     // return is needed to make sure that any code which follows is not executed

    }

    // get enemies
    let enemies = this.enemies.getChildren();
    let numEnemies = enemies.length;

    for(let i  = 0; i < numEnemies; i++) {

        // enemy movement
        enemies[i].y += enemies[i].speed;

        // check we haven't passed the boundaries and change direction
        if( (enemies[i].y < this.enemyMinY && enemies[i].speed < 0) ||
            (enemies[i].y > this.enemyMaxY && enemies[i].speed > 0)){
            enemies[i].speed *= -1;
        }

        let enemyRect = enemies[i].getBounds();

        // check enemy overlap
        if(Phaser.Geom.Intersects.RectangleToRectangle(playerRect, enemyRect)) {

            return this.gameOver();     // return is needed to make sure that any code which follows is not executed
        }
    }


};

gameScene.gameOver = function () {

    // initiated game over sequence (when this is true the game over sequence has started and makes sure that no update is done anymore)
    this.isTerminating = true;

    // shake camera
    this.cameras.main.shake(500);

    // listen for event completion (fade out when camera shaking is over)
    this.cameras.main.on('camerashakecomplete', function(camera, effect){

        // fade out
        this.cameras.main.fade(500);
    }, this);

    // listen for event completion (restart scene when fade out is over)
    this.cameras.main.on('camerafadeoutcomplete', function(camera, effect){

        // restart scene
        this.scene.restart();
    }, this);
};

// set the configuration of the game
let config = {
    type: Phaser.AUTO, // Phaser will use WebGL if available, if not it uses the canvas
    width: 640,
    height: 360,
    scene: gameScene,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
};

// create a new game, pass the configuration
let game = new Phaser.Game(config);