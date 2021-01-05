var canvas, backgroundImage;
var allPlayers;
var gameState = 0;
var playerCount;

var database;

var form, player, game;


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
}

function draw(){
//when 4players join we want the game state to become 1/PLAY state
  if(playerCount===4){
    game.update(1);
  }
     
    
  if(gameState===1){
    form.hide();
    game.play();
  }


}
