class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){      
      player = new Player();
      player.getCount();
          
      form = new Form()
      form.display();
    }

    play() 
     {
     //show on the screen game to start in position 120,100
     textSize(30);
     text("Game Start", 120, 100);
  
     //getting all the players data by calling the static function from player class
     Player.getPlayerInfo();

     //Display all the info on screen=name,distnace
     if(getPlayerInfo!==undefined){

        //players name has to be shown in position 130,150,170,190
        var display_position = 130;
        display_position+= 20;

        for(var plr in allPlayers)
        {
          text(allPlayers[plr].name,allPlayer[plr].distance,120,display_position)
        
        }
      }
  
      //Whenever the keydown is pressed we want the distance to increase by 5 and the function updatew to be called 
      //so that the distance gets updated in the database
     if(keyIsDown(UP_ARROW) && player.index!==null) {
      player.distance+= 50;
      player.update();
     }
    }
  }
}
