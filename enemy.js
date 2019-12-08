

function Enemy(type) {
  if(type=='slime') {
    if(Math.random()>.5) {this.x=0;}
    else {this.x=GAME.canvas.width;}

    this.y=GAME.groundHeight;
  }
  else if(type=='spider') {
    this.x=30+Math.ceil(Math.random()*(GAME.canvas.width-60));
    this.y=0;
  }
  this.type=type;
  this.speed=3;
  this.speedJ=0;
  this.health=3;
  this.iframes=0;
  this.MAX_SPEEDJ=7;
  this.direction=1;
  this.grounded=true;
  this.groundedCounter=2;
  this.jumpCounter=50;
  this.scale=GAME.pixelScale;
  this.particles=[];
}

var spriteE1 = [{x:-2,y:0,c:'rgb(33,101,56)'},{x:-1,y:0,c:'rgb(33,101,56)'},{x:0,y:0,c:'rgb(33,101,56)'},
{x:1,y:0,c:'rgb(33,101,56)'},{x:2,y:0,c:'rgb(33,101,56)'},

{x:-3,y:1,c:'rgb(33,101,56)'},{x:-2,y:1,c:'rgb(62,161,96)'},{x:-1,y:1,c:'rgb(62,161,96)'},
{x:0,y:1,c:'rgb(62,161,96)'},{x:1,y:1,c:'rgb(62,161,96)'},{x:2,y:1,c:'rgb(62,161,96)'},
{x:3,y:1,c:'rgb(33,101,56)'},

{x:-3,y:2,c:'rgb(33,101,56)'},{x:-2,y:2,c:'rgb(62,161,96)'},{x:-1,y:2,c:'black'},
{x:0,y:2,c:'rgb(62,161,96)'},{x:1,y:2,c:'black'},{x:2,y:2,c:'rgb(62,161,96)'},
{x:3,y:2,c:'rgb(33,101,56)'},

{x:-2,y:3,c:'rgb(33,101,56)'},{x:-1,y:3,c:'rgb(62,161,96)'},{x:0,y:3,c:'rgb(62,161,96)'},
{x:1,y:3,c:'rgb(62,161,96)'},{x:2,y:3,c:'rgb(33,101,56)'},

{x:-1,y:4,c:'rgb(33,101,56)'},{x:0,y:4,c:'rgb(33,101,56)'},
{x:1,y:4,c:'rgb(33,101,56)'}
];
var spriteE1Left = [{x:-2,y:0,c:'rgb(33,101,56)'},{x:-1,y:0,c:'rgb(33,101,56)'},{x:0,y:0,c:'rgb(33,101,56)'},
{x:1,y:0,c:'rgb(33,101,56)'},{x:2,y:0,c:'rgb(33,101,56)'},

{x:-3,y:1,c:'rgb(33,101,56)'},{x:-2,y:1,c:'rgb(62,161,96)'},{x:-1,y:1,c:'rgb(62,161,96)'},
{x:0,y:1,c:'rgb(62,161,96)'},{x:1,y:1,c:'rgb(62,161,96)'},{x:2,y:1,c:'rgb(62,161,96)'},
{x:3,y:1,c:'rgb(33,101,56)'},

{x:-3,y:2,c:'rgb(33,101,56)'},{x:-2,y:2,c:'black'},{x:-1,y:2,c:'rgb(62,161,96)'},
{x:0,y:2,c:'black'},{x:1,y:2,c:'rgb(62,161,96)'},{x:2,y:2,c:'rgb(62,161,96)'},
{x:3,y:2,c:'rgb(33,101,56)'},

{x:-2,y:3,c:'rgb(33,101,56)'},{x:-1,y:3,c:'rgb(62,161,96)'},{x:0,y:3,c:'rgb(62,161,96)'},
{x:1,y:3,c:'rgb(62,161,96)'},{x:2,y:3,c:'rgb(33,101,56)'},

{x:-1,y:4,c:'rgb(33,101,56)'},{x:0,y:4,c:'rgb(33,101,56)'},
{x:1,y:4,c:'rgb(33,101,56)'}
];
var spriteE1Right = [{x:-2,y:0,c:'rgb(33,101,56)'},{x:-1,y:0,c:'rgb(33,101,56)'},{x:0,y:0,c:'rgb(33,101,56)'},
{x:1,y:0,c:'rgb(33,101,56)'},{x:2,y:0,c:'rgb(33,101,56)'},

{x:-3,y:1,c:'rgb(33,101,56)'},{x:-2,y:1,c:'rgb(62,161,96)'},{x:-1,y:1,c:'rgb(62,161,96)'},
{x:0,y:1,c:'rgb(62,161,96)'},{x:1,y:1,c:'rgb(62,161,96)'},{x:2,y:1,c:'rgb(62,161,96)'},
{x:3,y:1,c:'rgb(33,101,56)'},

{x:-3,y:2,c:'rgb(33,101,56)'},{x:-2,y:2,c:'rgb(62,161,96)'},{x:-1,y:2,c:'rgb(62,161,96)'},
{x:0,y:2,c:'black'},{x:1,y:2,c:'rgb(62,161,96)'},{x:2,y:2,c:'black'},
{x:3,y:2,c:'rgb(33,101,56)'},

{x:-2,y:3,c:'rgb(33,101,56)'},{x:-1,y:3,c:'rgb(62,161,96)'},{x:0,y:3,c:'rgb(62,161,96)'},
{x:1,y:3,c:'rgb(62,161,96)'},{x:2,y:3,c:'rgb(33,101,56)'},

{x:-1,y:4,c:'rgb(33,101,56)'},{x:0,y:4,c:'rgb(33,101,56)'},
{x:1,y:4,c:'rgb(33,101,56)'}
];
var spriteE1JumpUp = [{x:-2,y:0,c:'rgb(33,101,56)'},{x:-1,y:0,c:'rgb(33,101,56)'},{x:0,y:0,c:'rgb(33,101,56)'},
{x:1,y:0,c:'rgb(33,101,56)'},{x:2,y:0,c:'rgb(33,101,56)'},

{x:-3,y:1,c:'rgb(33,101,56)'},{x:-2,y:1,c:'rgb(62,161,96)'},{x:-1,y:1,c:'rgb(62,161,96)'},
{x:0,y:1,c:'rgb(62,161,96)'},{x:1,y:1,c:'rgb(62,161,96)'},{x:2,y:1,c:'rgb(62,161,96)'},
{x:3,y:1,c:'rgb(33,101,56)'},

{x:-3,y:2,c:'rgb(33,101,56)'},{x:-2,y:2,c:'rgb(62,161,96)'},{x:-1,y:2,c:'rgb(62,161,96)'},
{x:0,y:2,c:'rgb(62,161,96)'},{x:1,y:2,c:'rgb(62,161,96)'},{x:2,y:2,c:'rgb(62,161,96)'},
{x:3,y:2,c:'rgb(33,101,56)'},

{x:-2,y:3,c:'rgb(33,101,56)'},{x:-1,y:3,c:'black'},{x:0,y:3,c:'rgb(62,161,96)'},
{x:1,y:3,c:'black'},{x:2,y:3,c:'rgb(33,101,56)'},

{x:-1,y:4,c:'rgb(33,101,56)'},{x:0,y:4,c:'rgb(33,101,56)'},
{x:1,y:4,c:'rgb(33,101,56)'}
];
var spriteE1Jump=[
{x:-1,y:0,c:'rgb(33,101,56)'},{x:0,y:0,c:'rgb(33,101,56)'},{x:1,y:0,c:'rgb(33,101,56)'},

{x:-2,y:1,c:'rgb(33,101,56)'},{x:-1,y:1,c:'rgb(62,161,96)'},{x:0,y:1,c:'rgb(62,161,96)'},
{x:1,y:1,c:'rgb(62,161,96)'},{x:2,y:1,c:'rgb(33,101,56)'},

{x:-3,y:2,c:'rgb(33,101,56)'},{x:-2,y:2,c:'rgb(62,161,96)'},
{x:-1,y:2,c:'rgb(62,161,96)'},{x:0,y:2,c:'rgb(62,161,96)'},
{x:1,y:2,c:'rgb(62,161,96)'},{x:2,y:2,c:'rgb(62,161,96)'},{x:3,y:2,c:'rgb(33,101,56)'},

{x:-3,y:3,c:'rgb(33,101,56)'},{x:-2,y:3,c:'rgb(62,161,96)'},{x:-1,y:3,c:'black'},
{x:0,y:3,c:'rgb(62,161,96)'},{x:1,y:3,c:'black'},{x:2,y:3,c:'rgb(62,161,96)'},
{x:3,y:3,c:'rgb(33,101,56)'},

{x:-2,y:4,c:'rgb(33,101,56)'},{x:-1,y:4,c:'rgb(62,161,96)'},{x:0,y:4,c:'rgb(62,161,96)'},
{x:1,y:4,c:'rgb(62,161,96)'},{x:2,y:4,c:'rgb(33,101,56)'},

{x:-1,y:5,c:'rgb(33,101,56)'},{x:0,y:5,c:'rgb(62,161,96)'},{x:1,y:5,c:'rgb(33,101,56)'},

{x:0,y:6,c:'rgb(33,101,56)'}
];

var greySpi = 'rgb(105,105,105)';
var redSpi = 'rgb(156,3,3)';
var spriteE2Ga=[
  {x:-5,y:0,c:greySpi},{x:8,y:0,c:greySpi},

  {x:-8,y:1,c:greySpi},{x:-5,y:1,c:greySpi},{x:-1,y:1,c:greySpi},
  {x:0,y:1,c:greySpi},{x:1,y:1,c:greySpi},{x:5,y:1,c:greySpi},
  {x:8,y:1,c:greySpi},

  {x:-7,y:2,c:greySpi},{x:-4,y:2,c:greySpi},{x:-2,y:2,c:'black'},
  {x:-1,y:2,c:redSpi},{x:0,y:2,c:greySpi},{x:1,y:2,c:redSpi},
  {x:2,y:2,c:'black'},{x:4,y:2,c:greySpi},{x:7,y:2,c:greySpi},

  {x:-7,y:3,c:greySpi},{x:-3,y:3,c:'black'},{x:-2,y:3,c:'black'},
  {x:-1,y:3,c:greySpi},{x:0,y:3,c:greySpi},{x:1,y:3,c:greySpi},
  {x:2,y:3,c:'black'},{x:3,y:3,c:'black'},{x:7,y:3,c:greySpi},

  {x:-6,y:4,c:greySpi},{x:-4,y:4,c:greySpi},{x:-2,y:4,c:'black'},
  {x:-1,y:4,c:'black'},{x:0,y:4,c:'black'},{x:1,y:4,c:'black'},
  {x:2,y:4,c:'black'},{x:4,y:4,c:greySpi},{x:6,y:4,c:greySpi},

  {x:-5,y:5,c:greySpi},{x:-1,y:5,c:'black'},{x:0,y:5,c:'black'},
  {x:1,y:5,c:'black'},{x:5,y:5,c:greySpi},
];
var spriteE2Gb=[
  {x:-8,y:0,c:greySpi},{x:5,y:0,c:greySpi},

  {x:-8,y:1,c:greySpi},{x:-5,y:1,c:greySpi},{x:-1,y:1,c:greySpi},
  {x:0,y:1,c:greySpi},{x:1,y:1,c:greySpi},{x:5,y:1,c:greySpi},
  {x:8,y:1,c:greySpi},

  {x:-7,y:2,c:greySpi},{x:-4,y:2,c:greySpi},{x:-2,y:2,c:'black'},
  {x:-1,y:2,c:redSpi},{x:0,y:2,c:greySpi},{x:1,y:2,c:redSpi},
  {x:2,y:2,c:'black'},{x:4,y:2,c:greySpi},{x:7,y:2,c:greySpi},

  {x:-7,y:3,c:greySpi},{x:-3,y:3,c:'black'},{x:-2,y:3,c:'black'},
  {x:-1,y:3,c:greySpi},{x:0,y:3,c:greySpi},{x:1,y:3,c:greySpi},
  {x:2,y:3,c:'black'},{x:3,y:3,c:'black'},{x:7,y:3,c:greySpi},

  {x:-6,y:4,c:greySpi},{x:-4,y:4,c:greySpi},{x:-2,y:4,c:'black'},
  {x:-1,y:4,c:'black'},{x:0,y:4,c:'black'},{x:1,y:4,c:'black'},
  {x:2,y:4,c:'black'},{x:4,y:4,c:greySpi},{x:6,y:4,c:greySpi},

  {x:-5,y:5,c:greySpi},{x:-1,y:5,c:'black'},{x:0,y:5,c:'black'},
  {x:1,y:5,c:'black'},{x:5,y:5,c:greySpi},
];
var spriteE2Jump=[
  {x:-6,y:0,c:greySpi},{x:-4,y:0,c:greySpi},{x:4,y:0,c:greySpi},
  {x:6,y:0,c:greySpi},

  {x:-6,y:1,c:greySpi},{x:-4,y:1,c:greySpi},{x:-1,y:1,c:greySpi},
  {x:0,y:1,c:greySpi},{x:1,y:1,c:greySpi},{x:4,y:1,c:greySpi},
  {x:6,y:1,c:greySpi},

  {x:-6,y:2,c:greySpi},{x:-3,y:2,c:greySpi},{x:-2,y:2,c:'black'},
  {x:-1,y:2,c:redSpi},{x:0,y:2,c:greySpi},{x:1,y:2,c:redSpi},
  {x:2,y:2,c:'black'},{x:3,y:2,c:greySpi},{x:6,y:2,c:greySpi},

  {x:-6,y:3,c:greySpi},{x:-3,y:3,c:'black'},{x:-2,y:3,c:'black'},
  {x:-1,y:3,c:greySpi},{x:0,y:3,c:greySpi},{x:1,y:3,c:greySpi},
  {x:2,y:3,c:'black'},{x:3,y:3,c:'black'},{x:6,y:3,c:greySpi},

  {x:-5,y:4,c:greySpi},{x:-2,y:4,c:'black'},
  {x:-1,y:4,c:'black'},{x:0,y:4,c:'black'},{x:1,y:4,c:'black'},
  {x:2,y:4,c:'black'},{x:5,y:4,c:greySpi},

  {x:-5,y:5,c:greySpi},{x:-3,y:5,c:greySpi},{x:-1,y:5,c:'black'},{x:0,y:5,c:'black'},
  {x:1,y:5,c:'black'},{x:3,y:5,c:greySpi},{x:5,y:5,c:greySpi},

  {x:-4,y:6,c:greySpi},{x:4,y:6,c:greySpi},
];
var spiderTime=20;

function RenderEnemies(context) {
  for(var i = 0; i < MANAGER.enemies.length; i++) {
    if(MANAGER.enemies[i].iframes>0) {MANAGER.enemies[i].iframes--;}

    if(MANAGER.enemies[i].type=='slime') {
      if(MANAGER.enemies[i].grounded||MANAGER.enemies.groundedCounter>0) {
        if(MANAGER.enemies[i].grounded) {MANAGER.enemies.groundedCounter=2;}
        else {MANAGER.enemies.groundedCounter--;}
      }

      if(MANAGER.enemies[i].iframes%10<5) {
        if(MANAGER.enemies[i].grounded||MANAGER.enemies.groundedCounter>0) {
        if(MANAGER.enemies[i].speed==0) {
          RenderSprite(context, spriteE1, MANAGER.enemies[i].x,MANAGER.enemies[i].y,2*MANAGER.enemies[i].scale,1);
        }
        else if(MANAGER.enemies[i].speed>0) {
          RenderSprite(context, spriteE1Right, MANAGER.enemies[i].x,MANAGER.enemies[i].y,2*MANAGER.enemies[i].scale,1);
        }
        else if(MANAGER.enemies[i].speed<0) {
          RenderSprite(context, spriteE1Right, MANAGER.enemies[i].x,MANAGER.enemies[i].y,2*MANAGER.enemies[i].scale,-1);
        }
      }
      else {
        if(MANAGER.enemies[i].speedJ>0) {
          RenderSprite(context, spriteE1Jump, MANAGER.enemies[i].x,MANAGER.enemies[i].y,2*MANAGER.enemies[i].scale,1);
        }
        else {
          RenderSprite(context, spriteE1Jump, MANAGER.enemies[i].x,MANAGER.enemies[i].y,2*MANAGER.enemies[i].scale,1);
        }
      }
    }
  }
    else if(MANAGER.enemies[i].type=='spider') {
      if(MANAGER.enemies[i].grounded||MANAGER.enemies.groundedCounter>0) {
        if(MANAGER.enemies[i].grounded) {MANAGER.enemies.groundedCounter=2;}
        else {MANAGER.enemies.groundedCounter--;}
      }

      if(MANAGER.enemies[i].iframes%10<5) {
        if(MANAGER.enemies[i].grounded||MANAGER.enemies.groundedCounter>0) {
          spiderTime--;
        if(spiderTime>9) {
          RenderSprite(context, spriteE2Ga, MANAGER.enemies[i].x,MANAGER.enemies[i].y,2*MANAGER.enemies[i].scale,1);
        }
        else {
          RenderSprite(context, spriteE2Gb, MANAGER.enemies[i].x,MANAGER.enemies[i].y,2*MANAGER.enemies[i].scale,1);
        }
        if(spiderTime==0) {spiderTime=20;}
      }
      else {
        if(MANAGER.enemies[i].speedJ>0) {
          RenderSprite(context, spriteE2Jump, MANAGER.enemies[i].x,MANAGER.enemies[i].y,2*MANAGER.enemies[i].scale,1);
        }
        else {
          RenderSprite(context, spriteE2Jump, MANAGER.enemies[i].x,MANAGER.enemies[i].y,2*MANAGER.enemies[i].scale,1);
        }
      }
    }
    }
  }
}
