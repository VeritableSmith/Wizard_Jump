//Draws all of the platforms
var p1Sprite = [];
var p2Sprite = [];
var p3Sprite = [];
var p4Sprite = [];


function RenderPlatforms(context) {
  var pos;
  if(GAME.level==0) {}
  else if(GAME.level==1) {context.fillStyle='green';}
  else if(GAME.level==2) {context.fillStyle='rgb(45,26,4)';}
  else if(GAME.level==3) {}
  else if(GAME.level==4) {}
  for(var i = 0; i < MANAGER.platforms.length; i++) {
    context.fillRect(MANAGER.platforms[i].x, MANAGER.platforms[i].y, MANAGER.platforms[i].length, 5);
  }
}

function Platform(x, y, length) {
  this.x=x;
  this.y=y;
  this.length=length;
}
