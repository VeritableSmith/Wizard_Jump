var rock1Sprite=[{x:-1,y:-2,c:'rgb(50,50,50)'},{x:0,y:-2,c:'rgb(50,50,50)'},{x:1,y:-2,c:'rgb(50,50,50)'},
{x:-2,y:-1,c:'rgb(50,50,50)'},{x:-1,y:-1,c:'rgb(80,80,80)'},{x:0,y:-1,c:'rgb(80,80,80)'},{x:1,y:-1,c:'rgb(80,80,80)'},{x:2,y:-1,c:'rgb(50,50,50)'},
{x:-2,y:0,c:'rgb(50,50,50)'},{x:-1,y:0,c:'rgb(80,80,80)'},{x:0,y:0,c:'rgb(80,80,80)'},{x:1,y:0,c:'rgb(80,80,80)'},{x:2,y:0,c:'rgb(50,50,50)'},
{x:-2,y:1,c:'rgb(50,50,50)'},{x:-1,y:1,c:'rgb(80,80,80)'},{x:0,y:1,c:'rgb(80,80,80)'},{x:1,y:1,c:'rgb(80,80,80)'},{x:2,y:1,c:'rgb(50,50,50)'},
{x:-1,y:2,c:'rgb(50,50,50)'},{x:0,y:2,c:'rgb(50,50,50)'},{x:1,y:2,c:'rgb(50,50,50)'}];

function RenderRocks(context) {
  for(var i = 0; i < MANAGER.rocks.length; i++) {
    RenderSprite(context, rock1Sprite, MANAGER.rocks[i].x,MANAGER.rocks[i].y, GAME.pixelScale, 1);
  }
}

function Rock() {
  this.y=0;
  this.x=Math.floor(Math.random()*(GAME.canvas.width-50))+20;
  this.speed=2+(Math.floor(MANAGER.rockSpeedVar*Math.random()));
}
