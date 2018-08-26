// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = Math.floor(Math.random()*500);

    //randomly assign the  enemy a y position
    let rando = Math.floor(Math.random()*100);
    switch(rando%3){
      case 2:
        this.y = 225;
        break;
      case 1:
        this.y = 65;
        break;
      default:
        this.y = 135;
        break;
    };
    //create a random speed for the enemy to make it more interesting
     this.speed = Math.floor(Math.random()*3)*100+100;
     //this.speed = 100;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
  this.x += this.speed*dt;
  if (this.x > 500) {
    this.x = 0;
   }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
//something or the other about the player
  this.sprite = 'images/char-horn-girl.png';
  this.x = 200;
  this.y = 400;
};

Player.prototype.update = function(dt){
  //see if the player made it to the top row


};

Player.prototype.handleInput = function(dt){
 dX = 100;
 dY = 82;
  switch(dt){
    case "up":
      if(this.y - dY > -63){
        this.y -= dY;
      }
      break;
    case "down":
      if(this.y + dY < 480){
        this.y += dY;
      };
      
      break;
    case "left":
      if(this.x-dX > -13){ 
        this.x -= dX;
      };
      break;
    case "right":
      if(this.x+dX < 500){
        this.x += dX;
      };
      break;
  };
};

Player.prototype.render = function(){
ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let allEnemies = [new Enemy(), new Enemy(), new Enemy()];
let player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


