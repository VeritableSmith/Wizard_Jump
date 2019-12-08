
function InitializePlayers() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);

  MANAGER.players.push(new Player('blue'));


}

function Player(color) {
  this.x = 30;
  this.y = GAME.groundHeight;
  this.speed = 0;
  this.speedJ = 0;
  this.scale = GAME.pixelScale;
  this.health=3;
  this.direction=1;
  this.projectilesH=[];
  this.projectilesV=[];
  this.jumpParticles=[];
  this.grounded=true;
  this.groundedCounter=2;
  this.MAX_SPEED=5;
  this.MAX_SPEEDJ = 12;
  this.iframes=0;
  if(color=='red') {
    this.colorL='rgb(189,32,66)';
    this.colorD='rgb(110,23,42)';
  }
  else if(color=='blue') {
    this.colorL='rgb(84,152,244)';
    this.colorD='rgb(14,71,240)';
  }
  else if(color=='yellow') {
    this.colorL='rgb(237,216,40)';
    this.colorD='rgb(171,165,2)';
  }

  var black='rgb(0,0,0)';
  var peach='rgb(234, 215, 283)';
  var grey='rgb(118,118,118)';

  this.positions = [
    //Row 0:
    {
      x : -2,
      y : 0,
      c : this.colorD
    },
    {
      x : -1,
      y : 0,
      c : this.colorD
    },
    {
      x : 0,
      y : 0,
      c :this.colorD
    },
    {
      x : 1,
      y : 0,
      c :this.colorD
    },

    //Row 1:
    {
      x : -1,
      y : 1,
      c : this.colorD
    },
    {
      x : 0,
      y : 1,
      c : this.colorD
    },
    {
      x : 1,
      y : 1,
      c : this.colorD
    },

    //Row 2:
    {
      x : -1,
      y : 2,
      c : this.colorD
    },
    {
      x : 0,
      y : 2,
      c : this.colorD
    },
    {
      x : 1,
      y : 2,
      c : this.colorD
    },

    //Row 3:
    {
      x : -1,
      y : 3,
      c : this.colorD
    },
    {
      x : 0,
      y : 3,
      c : this.colorD
    },
    {
      x : 1,
      y : 3,
      c : this.colorD
    },

    //Row 4:
    {
      x : -1,
      y : 4,
      c : this.colorD
    },
    {
      x : 0,
      y : 4,
      c : this.colorD
    },
    {
      x : 1,
      y : 4,
      c : this.colorL
    },
    {
      x : 2,
      y : 4,
      c : peach
    },

    //Row 5:
    {
      x : -1,
      y : 5,
      c : this.colorD
    },
    {
      x : 0,
      y : 5,
      c : this.colorL
    },
    {
      x : 1,
      y : 5,
      c : this.colorL
    },
    {
      x : 2,
      y : 5,
      c : peach
    },

    //Row 6:
    {
      x : -1,
      y : 6,
      c : this.colorL
    },
    {
      x : 0,
      y : 6,
      c : this.colorL
    },
    {
      x : 1,
      y : 6,
      c : this.colorD
    },

    //Row 7:
    {
      x : -1,
      y : 7,
      c : this.colorL
    },
    {
      x : 0,
      y : 7,
      c : this.colorL
    },
    {
      x : 1,
      y : 7,
      c : grey
    },

    //Row 8:
    {
      x : -1,
      y : 8,
      c : grey
    },
    {
      x : 0,
      y : 8,
      c : grey
    },
    {
      x : 1,
      y : 8,
      c : grey
    },

    //Row 9:
    {
      x : -1,
      y : 9,
      c : grey
    },
    {
      x : 0,
      y : 9,
      c : peach
    },
    {
      x : 1,
      y : 9,
      c : black
    },

    //Row 10:
    {
      x : -2,
      y : 10,
      c :this.colorD
    },
    {
      x : -1,
      y : 10,
      c :this.colorD
    },
    {
      x : 0,
      y : 10,
      c : this.colorD
    },
    {
      x : 1,
      y : 10,
      c : this.colorD
    },
    {
      x : 2,
      y : 10,
      c : this.colorD
    },

    //Row 11:
    {
      x : -1,
      y : 11,
      c :this.colorL
    },
    {
      x : 0,
      y : 11,
      c :this.colorL
    },
    {
      x : 1,
      y : 11,
      c :this.colorL
    },

    //Row 12
    {
      x : -1,
      y : 12,
      c :this.colorL
    },
    {
      x : 0,
      y : 12,
      c :this.colorL
    },

    //Row 13
    {
      x : -2,
      y : 13,
      c :this.colorL
    },
  ],
  this.positionsJ=[
    //Row 0
    {
      x : -3,
      y : 0,
      c : this.colorD
    },

    //Row 1
    {
      x : -3,
      y : 1,
      c : this.colorD
    },
    {
      x : -2,
      y : 1,
      c : this.colorD
    },
    {
      x : -1,
      y : 1,
      c : this.colorD
    },

    //Row 2
    {
      x : -2,
      y : 2,
      c : this.colorD
    },
    {
      x : -1,
      y : 2,
      c : this.colorD
    },
    {
      x : 0,
      y : 2,
      c : this.colorD
    },

    //Row 3
    {
      x : -1,
      y : 3,
      c : this.colorD
    },
    {
      x : 0,
      y : 3,
      c : this.colorD
    },
    {
      x : 1,
      y : 3,
      c : this.colorD
    },

    //Row 4
    {
      x : -2,
      y : 4,
      c : peach
    },
    {
      x : -1,
      y : 4,
      c : peach
    },
    {
      x : 0,
      y : 4,
      c : this.colorD
    },
    {
      x : 1,
      y : 4,
      c : this.colorD
    },

    //Row 5:
    {
      x : -2,
      y : 5,
      c : this.colorL
    },
    {
      x : -1,
      y : 5,
      c : this.colorL
    },
    {
      x : 0,
      y : 5,
      c : this.colorD
    },
    {
      x : 1,
      y : 5,
      c : this.colorD
    },

    //Row 6:
    {
      x : -2,
      y : 6,
      c : this.colorL
    },
    {
      x : -1,
      y : 6,
      c : this.colorL
    },
    {
      x : 0,
      y : 6,
      c : this.colorD
    },
    {
      x : 1,
      y : 6,
      c : this.colorD
    },

    //Row 7:
    {
      x : -1,
      y : 7,
      c : this.colorL
    },
    {
      x : 0,
      y : 7,
      c : this.colorL
    },
    {
      x : 1,
      y : 7,
      c : this.colorD
    },

    //Row 8:
    {
      x : -1,
      y : 8,
      c : this.colorL
    },
    {
      x : 0,
      y : 8,
      c : this.colorL
    },
    {
      x : 1,
      y : 8,
      c : grey
    },

    //Row 9:
    {
      x : -1,
      y : 9,
      c : grey
    },
    {
      x : 0,
      y : 9,
      c : grey
    },
    {
      x : 1,
      y : 9,
      c : grey
    },

    //Row 10:
    {
      x : -1,
      y : 10,
      c : grey
    },
    {
      x : 0,
      y : 10,
      c : peach
    },
    {
      x : 1,
      y : 10,
      c : black
    },

    //Row 11:
    {
      x : -2,
      y : 11,
      c : this.colorD
    },
    {
      x : -1,
      y : 11,
      c : this.colorD
    },
    {
      x : 0,
      y : 11,
      c : this.colorD
    },
    {
      x : 1,
      y : 11,
      c : this.colorD
    },

    //Row 12
    {
      x : -1,
      y : 12,
      c : this.colorL
    },
    {
      x : 0,
      y : 12,
      c : this.colorL
    },
    {
      x : 2,
      y : 12,
      c : this.colorD
    },

    //Row 13:
    {
      x : -2,
      y : 13,
      c : this.colorL
    },
    {
      x : -1,
      y : 13,
      c : this.colorL
    },

    //Row 14:
    {
      x : -3,
      y : 14,
      c : this.colorL
    }
  ],
  this.proHSprite = [{x:0, y:1, c:this.colorD}, {x:0,y:2,c:this.colorD},
  {x:1,y:0,c:this.colorD},{x:1,y:1,c:this.colorL},{x:1,y:2,c:this.colorL},
  {x:1,y:3,c:this.colorD},{x:2,y:0,c:this.colorD},{x:2,y:1,c:this.colorL},
  {x:2,y:2,c:this.colorL},{x:2,y:3,c:this.colorD},{x:3,y:1,c:this.colorD},
  {x:3,y:2,c:this.colorD}];
}

function RenderPlayers(context) {
  for(var i = 0; i < MANAGER.players.length; i++) {
    if(MANAGER.players[i].iframes>0) {MANAGER.players[i].iframes--;}
    if(MANAGER.players[i].iframes%10<5) {
    if(MANAGER.players[i].grounded) {
      RenderPlayer(context, i, MANAGER.players[i].positions);
      this.groundedCounter=2;
    }
    else if(this.groundedCounter>0) {
      RenderPlayer(context, i, MANAGER.players[i].positions);
      this.groundedCounter--;
    }
    else {
      RenderPlayer(context, i, MANAGER.players[i].positionsJ);
    }
  }
  }
}

function RenderPlayer(context, index, pos) {
  var px = MANAGER.players[index].x, py = MANAGER.players[index].y, scale=MANAGER.players[index].scale,dir=MANAGER.players[index].direction;
  RenderSprite(context, pos, px, py, scale, dir);
}




function ProjectileH(x,y, dir) {
  this.speed=8;
  this.direction=dir;
  this.x=x;
  this.y=y;
  this.distanceTraveled=0;
  this.rotation=0;
}

function RenderProjectiles(context) {

  for(var i = 0; i < MANAGER.players.length; i++) {
    for(var j = 0; j < MANAGER.players[i].projectilesH.length; j++) {
      //context.fillStyle='black';
      //ontext.fillRect(MANAGER.players[i].projectilesH[j].x,MANAGER.players[i].projectilesH[j].y, 15,15);
      RenderSprite(context, MANAGER.players[i].proHSprite, MANAGER.players[i].projectilesH[j].x, MANAGER.players[i].projectilesH[j].y, MANAGER.players[i].scale, 1);
    }
  }
}

function Particle(x,y,speed) {
  this.x = x;
  this.y = y;
  this.rotation=Math.ceil(Math.random()*180);
  this.distanceTraveled=0;
  this.speed=speed;
}
