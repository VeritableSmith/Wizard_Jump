
function animatePlayers() {

  if(CONTROLS.p1.left) {
    if(MANAGER.players[0].speed>-MANAGER.players[0].MAX_SPEED) {MANAGER.players[0].speed-=0.25;}
    MANAGER.players[0].direction=-1;
  }
  else if(CONTROLS.p1.right) {
    if(MANAGER.players[0].speed<MANAGER.players[0].MAX_SPEED) {MANAGER.players[0].speed+=0.25;}
    MANAGER.players[0].direction=1;
  }
  else {
    if(MANAGER.players[0].speed<0) {MANAGER.players[0].speed+=0.25;}
    else if(MANAGER.players[0].speed>0) {MANAGER.players[0].speed-=0.25;}
  }

 //Manages the Jump function for Player 1

  if(CONTROLS.p1.jumpCounter>0) {CONTROLS.p1.jumpCounter--;}

  if(CONTROLS.p1.jump&&MANAGER.players[0].grounded) {
    if(CONTROLS.p1.jumpCounter==0) {
      CONTROLS.p1.jumpCounter=150;
      MANAGER.players[0].speedJ=MANAGER.players[0].MAX_SPEEDJ;
      MANAGER.players[0].grounded=false;
    }
  }
  if(!MANAGER.players[0].grounded) {
    if(MANAGER.players[0].speedJ > 0 && !CONTROLS.p1.jump) {
      MANAGER.players[0].speedJ-=1;
    }
    else if(MANAGER.players[0].speedJ>-MANAGER.players[0].MAX_SPEEDJ) {
      MANAGER.players[0].speedJ-=0.5;
    }
  }

  //Updates the position of Player 1
  MANAGER.players[0].x+=MANAGER.players[0].speed;
  MANAGER.players[0].y-=MANAGER.players[0].speedJ;

  //Switches sides of Player 1 if Player 1 is out of bounds
  if(MANAGER.players[0].x<0) {MANAGER.players[0].x=GAME.canvas.width;}
  else if(MANAGER.players[0].x>GAME.canvas.width) {MANAGER.players[0].x=0;}


  if(GAME.player2) {

  }
  checkGrounded();
  checkPlatformCollision();
}

var enemySpawnTime=100
function animateEnemies() {
  //Controls spawning of Enemies!
  if(enemySpawnTime==0) {
    enemySpawnTime=MANAGER.enemyTime;
    if(MANAGER.enemies.length<MANAGER.enemyCap) {
      if(GAME.level==1){MANAGER.enemies.push(new Enemy('slime'));}
      else if(GAME.level==2) {MANAGER.enemies.push(new Enemy('spider'));}
    }
  }
  else {
    enemySpawnTime--;
  }

  //Updates position and controls behavior of all enemies.
  for(var i = 0; i < MANAGER.enemies.length; i++) {
    if(MANAGER.enemies[i].type=='slime') {
    if(!GAME.player2) {
      dx = MANAGER.players[0].x-MANAGER.enemies[i].x;
      if(Math.abs(dx)>10) {
        if(MANAGER.enemies[i].speedJ==0) {
        if((dx < GAME.canvas.width/2 && dx > 0) || dx < -GAME.canvas.width/2) {
          MANAGER.enemies[i].speed=Math.abs(MANAGER.enemies[i].speed);
        }
        else {
          MANAGER.enemies[i].speed=-Math.abs(MANAGER.enemies[i].speed);
        }
      }
      }

      if(MANAGER.enemies[i].jumpCounter>0) {MANAGER.enemies[i].jumpCounter--;}
      if(MANAGER.enemies[i].grounded) {
        if(MANAGER.enemies[i].jumpCounter==0) {
          MANAGER.enemies[i].jumpCounter=150;
          MANAGER.enemies[i].speedJ=MANAGER.enemies[i].MAX_SPEEDJ;
          MANAGER.enemies[i].grounded=false;
        }
      }
      if(!MANAGER.enemies[i].grounded) {
        if(MANAGER.enemies.groundedCounter==0) {MANAGER.enemies[i].x+=MANAGER.enemies[i].speed+0.1*Math.floor(Math.random()*10);}
        if(MANAGER.enemies[i].speedJ>-MANAGER.players[0].MAX_SPEEDJ) {
          MANAGER.enemies[i].speedJ-=0.2;
        }
      }
      MANAGER.enemies[i].y-=MANAGER.enemies[i].speedJ;
    }
    else {

    }
    if(MANAGER.enemies[i].x>GAME.canvas.width) {MANAGER.enemies[i].x=0;}
    else if(MANAGER.enemies[i].x<0) {MANAGER.enemies[i].x=GAME.canvas.width;}
  }
  //SPIDERS:
  else if(MANAGER.enemies[i].type=='spider') {
    if(!GAME.player2) {
      dx = MANAGER.players[0].x-MANAGER.enemies[i].x;
      if(Math.abs(dx)>200) {
        if(MANAGER.enemies[i].speedJ==0) {
        if((dx < GAME.canvas.width/2 && dx > 0) || dx < -GAME.canvas.width/2) {
          MANAGER.enemies[i].speed=3;
        }
        else {
          MANAGER.enemies[i].speed=-3;
        }
      }
      }
      if(MANAGER.enemies[i].grounded){MANAGER.enemies[i].x+=MANAGER.enemies[i].speed;}

      if(MANAGER.enemies[i].jumpCounter>0) {MANAGER.enemies[i].jumpCounter--;}
      if(MANAGER.enemies[i].grounded) {
        if(MANAGER.enemies[i].jumpCounter==0) {
          MANAGER.enemies[i].jumpCounter=275;
          MANAGER.enemies[i].speedJ=2*MANAGER.enemies[i].MAX_SPEEDJ;
          MANAGER.enemies[i].grounded=false;
        }
      }
      if(!MANAGER.enemies[i].grounded) {

        if(MANAGER.enemies[i].speedJ>-MANAGER.players[0].MAX_SPEEDJ) {
          MANAGER.enemies[i].speedJ-=0.4;
        }
      }
      MANAGER.enemies[i].y-=MANAGER.enemies[i].speedJ;
    }
    else {

    }
    if(MANAGER.enemies[i].x>GAME.canvas.width) {MANAGER.enemies[i].x=0;}
    else if(MANAGER.enemies[i].x<0) {MANAGER.enemies[i].x=GAME.canvas.width;}
  }
  }
  checkGroundedE();
  checkPlatformCollisionE();
}

function checkGrounded() {
  for(var i = 0; i < MANAGER.players.length; i++) {
    if(MANAGER.players[i].y>=GAME.groundHeight) {
      MANAGER.players[i].grounded=true;
      MANAGER.players[i].speedJ=0;
      MANAGER.players[i].y=GAME.groundHeight;
      if(i==0 && CONTROLS.p1.jumpCounter>10) {
        CONTROLS.p1.jumpCounter=5;
      }
      else if (CONTROLS.p2.jumpCounter>10) {
        CONTROLS.p2.jumpCounter=5;
      }
    }
    else {
      MANAGER.players[i].grounded=false;
    }
  }
}

function checkGroundedE() {
  for(var i = 0; i < MANAGER.enemies.length; i++) {
    if(MANAGER.enemies[i].y>=GAME.groundHeight) {
      if(!MANAGER.enemies[i].grounded) {generateEnemyParticles(i);}
      MANAGER.enemies[i].grounded=true;
      MANAGER.enemies[i].speedJ=0;
      MANAGER.enemies[i].y=GAME.groundHeight;
    }
    else {
      MANAGER.enemies[i].grounded=false;
    }
  }
}

function checkPlatformCollision() {
  for(var i = 0; i < MANAGER.players.length; i++) {
    for(var p = 0; p < MANAGER.platforms.length; p++) {
      if(MANAGER.players[i].y>=MANAGER.platforms[p].y&&MANAGER.players[i].y<=MANAGER.platforms[p].y+10
          &&MANAGER.players[i].x+MANAGER.players[i].scale>=MANAGER.platforms[p].x&&MANAGER.players[i].x-MANAGER.players[i].scale<=MANAGER.platforms[p].x+MANAGER.platforms[p].length
          &&MANAGER.players[i].speedJ<0) {
        MANAGER.players[i].y=MANAGER.platforms[p].y;
        MANAGER.players[i].grounded=true;
        MANAGER.players[i].speedJ=0;
        if(i==0 && CONTROLS.p1.jumpCounter>10) {
          CONTROLS.p1.jumpCounter=5;
        }
        else if (CONTROLS.p2.jumpCounter>10) {
          CONTROLS.p2.jumpCounter=5;
        }
      }
    }
  }
}

function checkPlatformCollisionE() {
  for(var i = 0; i < MANAGER.enemies.length; i++) {
    for(var p = 0; p < MANAGER.platforms.length; p++) {
      if(MANAGER.enemies[i].type=='slime') {
      if(MANAGER.enemies[i].y>=MANAGER.platforms[p].y&&MANAGER.enemies[i].y<=MANAGER.platforms[p].y+10
          &&MANAGER.enemies[i].x+4*MANAGER.enemies[i].scale>=MANAGER.platforms[p].x&&MANAGER.enemies[i].x-4*MANAGER.enemies[i].scale<=MANAGER.platforms[p].x+MANAGER.platforms[p].length
          &&MANAGER.enemies[i].speedJ<0) {
            if(MANAGER.enemies[i].speedJ<-0.2) {generateEnemyParticles(i);}
        MANAGER.enemies[i].y=MANAGER.platforms[p].y;
        MANAGER.enemies[i].grounded=true;
        MANAGER.enemies[i].speedJ=0;
      }
    }
    else if(MANAGER.enemies[i].type=='spider') {
      if(MANAGER.enemies[i].y>=MANAGER.platforms[p].y&&MANAGER.enemies[i].y<=MANAGER.platforms[p].y+10
          &&MANAGER.enemies[i].x+6*MANAGER.enemies[i].scale>=MANAGER.platforms[p].x&&MANAGER.enemies[i].x-6*MANAGER.enemies[i].scale<=MANAGER.platforms[p].x+MANAGER.platforms[p].length
          &&MANAGER.enemies[i].speedJ<0) {
        MANAGER.enemies[i].y=MANAGER.platforms[p].y;
        MANAGER.enemies[i].grounded=true;
        MANAGER.enemies[i].speedJ=0;
      }
    }
  }
  }
}

function handleProjectileAnimation() {
  for(var i = 0; i < MANAGER.players.length; i++) {
    for(var j = 0; j < MANAGER.players[i].projectilesH.length; j++) {


      if(MANAGER.players[i].projectilesH[j].x<0) {MANAGER.players[i].projectilesH[j].x=GAME.canvas.width;}
      else if(MANAGER.players[i].projectilesH[j].x>GAME.canvas.width) {MANAGER.players[i].projectilesH[j].x=0;}

      MANAGER.players[i].projectilesH[j].distanceTraveled+=MANAGER.players[i].projectilesH[j].speed;

      //For the Blue Wizard
      if(MANAGER.players[i].colorD=='rgb(14,71,240)') {

        MANAGER.players[i].projectilesH[j].x+=
        (MANAGER.players[i].projectilesH[j].rotation/360)*
        MANAGER.players[i].projectilesH[j].direction*MANAGER.players[i].projectilesH[j].speed;

        if(MANAGER.players[i].projectilesH[j].rotation<720) {
          MANAGER.players[i].projectilesH[j].rotation+=6;
        }

        if(MANAGER.players[i].projectilesH[j].distanceTraveled>700) {
          MANAGER.players[i].projectilesH.splice(j, 1);
        }
      }
      //For the Red Wizard
      else if(MANAGER.players[i].colorD=='rgb(110,23,42)') {
        MANAGER.players[i].projectilesH[j].rotation+=10;
        var radians = (Math.PI / 180) * (MANAGER.players[i].projectilesH[j].rotation+180),
        sin = Math.sin(radians);

        MANAGER.players[i].projectilesH[j].x+= 0.7*
        MANAGER.players[i].projectilesH[j].direction*MANAGER.players[i].projectilesH[j].speed;
        MANAGER.players[i].projectilesH[j].y+=10*sin;

        if(MANAGER.players[i].projectilesH[j].distanceTraveled>500) {
          MANAGER.players[i].projectilesH.splice(j, 1);
        }
      }
      //For the Yellow Wizard
      else if(MANAGER.players[i].colorD=='rgb(171,165,2)') {
        MANAGER.players[i].projectilesH[j].x+=
        MANAGER.players[i].projectilesH[j].direction*MANAGER.players[i].projectilesH[j].speed;
        if(MANAGER.players[i].projectilesH[j].distanceTraveled>300) {
          MANAGER.players[i].projectilesH.splice(j, 1);
        }
      }
    }

    if(i==0) {
      if(CONTROLS.p1.fireHCounter>0) {CONTROLS.p1.fireHCounter--;}
      else if(CONTROLS.p1.fireH) {
        var px = MANAGER.players[i].x, py = MANAGER.players[i].y, scale = MANAGER.players[i].scale, dir = MANAGER.players[i].direction;
        MANAGER.players[i].projectilesH.push(new ProjectileH(px+dir*6*scale, py-6*scale, dir));
        CONTROLS.p1.fireHCounter=25;
      }
    }
    else {
      if(CONTROLS.p2.fireHCounter>0) {CONTROLS.p2.fireHCounter--;}
      else if(CONTROLS.p12fireH) {
        var px = MANAGER.players[i].x, py = MANAGER.players[i].y, scale = MANAGER.players[i].scale, dir = MANAGER.players[i].direction;
        MANAGER.players[i].projectilesH.push(new ProjectileH(px+dir*6*scale, py-6*scale, dir));
        CONTROLS.p2.fireHCounter=40;
      }
    }
  }
}

var rockCount=2;
var rockSpawnTime=100;
function handleRockAnimation() {
  if(rockSpawnTime>0) {rockSpawnTime--;}
  else {
    MANAGER.rocks.push(new Rock());
    if(rockCount==0) {
      rockSpawnTime=MANAGER.rockTime;
      rockCount=MANAGER.rockCap+Math.floor(Math.random()*(MANAGER.rockCap/2));
    }
    else {
      rockCount--;
      rockSpawnTime=10+Math.floor(Math.random()*30);
    }
  }

  for(var i = 0; i < MANAGER.rocks.length; i++) {
    MANAGER.rocks[i].y+=MANAGER.rocks[i].speed;
    if(MANAGER.rocks[i].y+2*GAME.pixelScale>=GAME.groundHeight) {
      //rockExplode(MANAGER.rocks[i].x,MANAGER.rocks[i].y, MANAGER.rocks[i].speed);
      MANAGER.rocks.splice(i,1);
    }
  }
}



function handlePlayerParticleAnimation() {
  //Updates jumpParticles
  for(var i = 0; i < MANAGER.players.length; i++) {
  if((MANAGER.players[i].grounded)&&MANAGER.players[i].jumpParticles.length<12&&Math.abs(MANAGER.players[i].speed)>1) {
    MANAGER.players[i].jumpParticles.push(new Particle(MANAGER.players[i].x, MANAGER.players[i].y,2));
  }
  else if(!MANAGER.players[i].grounded&&MANAGER.players[i].groundedCounter==0) {
    while(MANAGER.players[i].jumpParticles.length>0) {MANAGER.players[i].jumpParticles.pop();}
  }

  for(var j = 0; j < MANAGER.players[i].jumpParticles.length; j++) {
      var radians = (Math.PI / 180) * MANAGER.players[i].jumpParticles[j].rotation,
      cos = Math.cos(radians),
      sin = Math.sin(radians);

      MANAGER.players[i].jumpParticles[j].x += MANAGER.players[i].jumpParticles[j].speed * cos;
      MANAGER.players[i].jumpParticles[j].y += MANAGER.players[i].jumpParticles[j].speed * sin;

      MANAGER.players[i].jumpParticles[j].distanceTraveled+=
      Math.abs(MANAGER.players[i].jumpParticles[j].speed * cos) + Math.abs(MANAGER.players[i].jumpParticles[j].speed * sin);

      if(MANAGER.players[i].jumpParticles[j].distanceTraveled>50) {
        MANAGER.players[i].jumpParticles.splice(j, 1);
      }
  }
}
}

function generateEnemyParticles(index) {
  for(var i = 0; i < 20+Math.floor(Math.random()*20); i++) {
    MANAGER.enemies[index].particles.push(new Particle(MANAGER.enemies[index].x,MANAGER.enemies[index].y,1));
  }
}

function handleEnemyParticleAnimation() {
  for(var e = 0; e < MANAGER.enemies.length;e++) {
    for(var p = 0; p < MANAGER.enemies[e].particles.length; p++) {
      var radians = (Math.PI / 180) * 2*MANAGER.enemies[e].particles[p].rotation,
      cos = Math.cos(radians),
      sin = Math.sin(radians);
      var rand = Math.random();
      MANAGER.enemies[e].particles[p].x+=2*cos*rand,MANAGER.enemies[e].particles[p].y+=2*sin*rand;
      MANAGER.enemies[e].particles[p].distanceTraveled+=Math.abs(cos)+Math.abs(sin);

      if(MANAGER.enemies[e].particles[p].distanceTraveled>65) {
          MANAGER.enemies[e].particles.splice(p,1);
      }
    }
  }
}

function handleRockParticleAnimation() {
  //Updates jumpParticles
  for(var i = 0; i < MANAGER.rockParticles.length; i++) {
      var radians = (Math.PI / 180) * MANAGER.rockParticles[i].rotation,
      cos = Math.cos(radians),
      sin = Math.sin(radians);

      MANAGER.rockParticles[i].x += MANAGER.rockParticles[i].speed * cos;
      MANAGER.rockParticles[i].y += MANAGER.rockParticles[i].speed * sin;

      MANAGER.rockParticles[i].distanceTraveled+=
      Math.abs(MANAGER.rockParticles[i].speed * cos) + Math.abs(MANAGER.rockParticles[i].speed * sin);

      if(MANAGER.rockParticles[i].distanceTraveled>40) {
        MANAGER.rockParticles.splice(i, 1);

      }
}
}

function RenderPlayerParticles(context) {
  for(var i = 0; i < MANAGER.players.length; i++) {
  for(var j = 0; j < MANAGER.players[i].jumpParticles.length; j++) {
    context.fillStyle=MANAGER.players[i].colorD;
    context.fillRect(MANAGER.players[i].jumpParticles[j].x,MANAGER.players[i].jumpParticles[j].y, 4,4);
  }
}
}

function RenderRockParticles(context) {
  for(var j = 0; j < MANAGER.rockParticles.length; j++) {
    context.fillStyle='rgb(50,50,50)';
    context.fillRect(MANAGER.rockParticles[j].x,MANAGER.rockParticles[j].x, 6,6);
  }
}

function RenderEnemyParticles(context) {
  context.fillStyle='rgb(62,161,96)';
  for(var e = 0; e < MANAGER.enemies.length; e++) {
    for(var p = 0; p < MANAGER.enemies[e].particles.length; p++) {
      context.fillRect(MANAGER.enemies[e].particles[p].x,MANAGER.enemies[e].particles[p].y,5,5);
    }
  }
}

function rockExplode(x,y,speed) {
  for(var i = 0; i < 4; i++) {
    MANAGER.rockParticles.push(new Particle(x,y,speed));
  }
}




function checkProjectileCollision() {
  for(var player = 0; player < MANAGER.players.length; player++) {
    for(var proj = 0; proj < MANAGER.players[player].projectilesH.length; proj++) {
      var prox = MANAGER.players[player].projectilesH[proj].x, proy = MANAGER.players[player].projectilesH[proj].y;
      for(var rocks = 0; rocks < MANAGER.rocks.length; rocks++) {
        if(Math.pow(prox-MANAGER.rocks[rocks].x,2)+Math.pow(proy-MANAGER.rocks[rocks].y,2)<Math.pow(5*MANAGER.players[player].scale,2)) {
          MANAGER.rocks.splice(rocks,1);
          rocks--;
          MANAGER.players[player].projectilesH.splice(proj, 1);
          proj--;
          MANAGER.killedR++;
        }
      }
      for(var enem = 0; enem < MANAGER.enemies.length; enem++) {
        if(MANAGER.enemies[enem].iframes==0) {
          if(MANAGER.enemies[enem].type=='slime') {
        if((Math.pow(prox-MANAGER.enemies[enem].x,2)/36)+(Math.pow(proy-(MANAGER.enemies[enem].y-20),2)/25)<Math.pow(GAME.pixelScale,2)) {
          MANAGER.enemies[enem].health--;
          MANAGER.enemies[enem].iframes=60;
          if(MANAGER.enemies[enem].health==0) {
            MANAGER.enemies.splice(enem, 1);
            enem--;
            MANAGER.killedE++;
          }

          MANAGER.players[player].projectilesH.splice(proj,1);
          //proj--
        }
        }
        else if(MANAGER.enemies[enem].type=='spider') {
          if((Math.pow(prox-MANAGER.enemies[enem].x,2)/200)+(Math.pow(proy-(MANAGER.enemies[enem].y-20),2)/36)<Math.pow(GAME.pixelScale,2)) {
            MANAGER.enemies[enem].health--;
            MANAGER.enemies[enem].iframes=60;
            if(MANAGER.enemies[enem].health==0) {
              MANAGER.enemies.splice(enem, 1);
              enem--;
              MANAGER.killedE++;
            }

            MANAGER.players[player].projectilesH.splice(proj,1);
            proj--;
          }
        }
        }
      }
    }
  }
}

function checkPlayerCollision() {
  for(var player = 0; player < MANAGER.players.length; player++) {
    if(MANAGER.players[player].iframes==0) {
    var playx = MANAGER.players[player].x, playy = MANAGER.players[player].y-6*GAME.pixelScale;
    for(var rocks = 0; rocks < MANAGER.rocks.length; rocks++) {
      if(Math.pow(playx-MANAGER.rocks[rocks].x,2)/14+Math.pow(playy-MANAGER.rocks[rocks].y,2)/36<Math.pow(GAME.pixelScale,2)) {
        MANAGER.rocks.splice(rocks,1);
        rocks--;

        MANAGER.players[player].health--;
        MANAGER.players[player].iframes=60;
      }
    }
    for(var enem = 0; enem < MANAGER.enemies.length; enem++) {
      if(MANAGER.enemies[enem].type=='slime') {
      if((Math.pow(playx-MANAGER.enemies[enem].x,2)/60)+(Math.pow(playy-(MANAGER.enemies[enem].y-30),2)/36)<Math.pow(GAME.pixelScale,2)) {
        MANAGER.players[player].health--;
        MANAGER.players[player].iframes=60;
      }
    }
    else if(MANAGER.enemies[enem].type=='spider') {
      if((Math.pow(playx-MANAGER.enemies[enem].x,2)/256)+(Math.pow(playy-(MANAGER.enemies[enem].y-30),2)/36)<Math.pow(GAME.pixelScale,2)) {
        MANAGER.players[player].health--;
        MANAGER.players[player].iframes=60;
      }
    }
    }
  }
  }
}

var level1Theme= new sound("Level1Theme.wav");
var level2Theme= new sound("Level2Theme.wav");
var levelChangeTimer=140;
function levelChange(context) {
  if(levelChangeTimer==0) {
    GAME.level++;
  for(var i = 0; i < MANAGER.platforms.length; i++) {MANAGER.platforms.pop();i--;}
  for(var i = 0; i < MANAGER.enemies.length; i++) {MANAGER.enemies.pop();i--;}
  for(var i = 0; i < MANAGER.rocks.length; i++) {MANAGER.rocks.pop();i--;}
  if (GAME.level==1) {
    GAME.groundHeight=620;

    MANAGER.platforms.push(new Platform(160, 500, 160));
    MANAGER.platforms.push(new Platform(0, 380, 120));
    MANAGER.platforms.push(new Platform(360, 380, 120));
    MANAGER.platforms.push(new Platform(180, 240, 120));

    MANAGER.rockCap=2;
    MANAGER.enemyCap=1;

    MANAGER.rockTarget=20;
    MANAGER.enemyTarget=5;

    MANAGER.rockTime=200;
    MANAGER.enemyTime=250;

    MANAGER.rockSpeedVar=1;

    GAME.trans=false;
    levelChangeTimer=140;
  }
  else if(GAME.level==2){
    level1Theme.stop();
    GAME.groundHeight=620;

    MANAGER.platforms.push(new Platform(0, 240, 100));
    MANAGER.platforms.push(new Platform(0, 520, 100));
    MANAGER.platforms.push(new Platform(190, 380, 100));
    MANAGER.platforms.push(new Platform(380, 240, 100));
    MANAGER.platforms.push(new Platform(380, 520, 100));

    MANAGER.rockCap=3;
    MANAGER.enemyCap=1;

    MANAGER.rockTarget=40;
    MANAGER.enemyTarget=8;

    MANAGER.rockTime=240;
    MANAGER.enemyTime=250;

    MANAGER.rockSpeedVar=3;

    GAME.trans=false;
    levelChangeTimer=140;
  }
  else if(GAME.level==3) {
    level2Theme.stop();
    GAME.groundHeight=620;

    MANAGER.platforms.push(new Platform(130, 480,220));
    MANAGER.platforms.push(new Platform(170, 360,140));


    MANAGER.rockCap=6;

    MANAGER.rockTarget=60;
    MANAGER.enemyTarget=0;

    MANAGER.rockTime=100;

    MANAGER.rockSpeedVar=8;

    GAME.trans=false;
    levelChangeTimer=140;
  }
    resetPlayers();
  }
  else {
    levelChangeTimer--;
    context.fillStyle='black';
    context.fillRect(0,0,480,640);
    RenderWord(context, 175, 300, 'level ' +(GAME.level+1), 'white', 5);
  }
}

function resetPlayers(context) {
  MANAGER.killedR=0,MANAGER.killedE=0;
  for(var i = 0; i < MANAGER.players.length; i++) {
    MANAGER.players[i].y=GAME.groundHeight;
    MANAGER.players[i].speed=0;
    MANAGER.players[i].speedJ=0;
    MANAGER.players[i].health=3;
    if(i==0) {
      MANAGER.players[i].x=30;
    }
    else if(i==1) {
      MANAGER.players[i].x=GAME.canvas.width-30;
    }
  }
}


var treeSprite1=[{x:0,y:0,c:'rgb(62,46,8)'},
{x:-1,y:1,c:'rgb(23,71,0)'},{x:0,y:1,c:'rgb(23,71,0)'},{x:1,y:1,c:'rgb(23,71,0)'},
{x:-1,y:2,c:'rgb(23,71,0)'},{x:0,y:2,c:'rgb(23,71,0)'},{x:1,y:2,c:'rgb(23,71,0)'},
{x:0,y:3,c:'rgb(23,71,0)'}];

var treeSprite1D=[{x:0,y:0,c:'rgb(45,26,4)'},
{x:-1,y:1,c:'rgb(16,47,6)'},{x:0,y:1,c:'rgb(16,47,6)'},{x:1,y:1,c:'rgb(16,47,6)'},
{x:-1,y:2,c:'rgb(16,47,6)'},{x:0,y:2,c:'rgb(16,47,6)'},{x:1,y:2,c:'rgb(16,47,6)'},
{x:0,y:3,c:'rgb(16,47,6)'}];

var treeSprite2=[{x:0,y:0,c:'rgb(62,46,8)'},
{x:0,y:1,c:'rgb(62,46,8)'},
{x:-1,y:2,c:'rgb(23,71,0)'},{x:0,y:2,c:'rgb(23,71,0)'},{x:1,y:2,c:'rgb(23,71,0)'},
{x:-1,y:3,c:'rgb(23,71,0)'},{x:0,y:3,c:'rgb(23,71,0)'},{x:1,y:3,c:'rgb(23,71,0)'},
{x:0,y:4,c:'rgb(23,71,0)'}];

var treeSprite2D=[{x:0,y:0,c:'rgb(45,26,4)'},
{x:0,y:1,c:'rgb(45,26,4)'},
{x:-1,y:2,c:'rgb(45,26,4)'},{x:0,y:2,c:'rgb(45,26,4)'},{x:1,y:2,c:'rgb(45,26,4)'},
{x:-1,y:3,c:'rgb(45,26,4)'},{x:0,y:3,c:'rgb(45,26,4)'},{x:1,y:3,c:'rgb(45,26,4)'},
{x:0,y:4,c:'rgb(45,26,4)'}];

var treeSprite3=[{x:0,y:0,c:'rgb(62,46,8)'},
{x:-1,y:1,c:'rgb(23,71,0)'},{x:0,y:1,c:'rgb(23,71,0)'},{x:1,y:1,c:'rgb(23,71,0)'},
{x:-2,y:2,c:'rgb(23,71,0)'},{x:-1,y:2,c:'rgb(23,71,0)'},{x:0,y:2,c:'rgb(23,71,0)'},{x:1,y:2,c:'rgb(23,71,0)'},{x:2,y:2,c:'rgb(23,71,0)'},
{x:-1,y:3,c:'rgb(23,71,0)'},{x:0,y:3,c:'rgb(23,71,0)'},{x:1,y:3,c:'rgb(23,71,0)'},
{x:0,y:4,c:'rgb(23,71,0)'}];

var treeSprite3D=[{x:0,y:0,c:'rgb(45,26,4)'},
{x:-1,y:1,c:'rgb(45,26,4)'},{x:0,y:1,c:'rgb(16,47,6)'},{x:1,y:1,c:'rgb(16,47,6)'},
{x:-2,y:2,c:'rgb(16,47,6)'},{x:-1,y:2,c:'rgb(16,47,6)'},{x:0,y:2,c:'rgb(16,47,6)'},{x:1,y:2,c:'rgb(16,47,6)'},{x:2,y:2,c:'rgb(16,47,6)'},
{x:-1,y:3,c:'rgb(16,47,6)'},{x:0,y:3,c:'rgb(16,47,6)'},{x:1,y:3,c:'rgb(16,47,6)'},
{x:0,y:4,c:'rgb(16,47,6)'}];

function drawBackground(context){
  if(GAME.level==0) {

  }
  else if(GAME.level==1) {
    context.fillStyle='rgb(167, 233, 235)';
    context.fillRect(0, 0, GAME.canvas.width, GAME.canvas.height);
    context.fillStyle='green';
    context.fillRect(0, GAME.groundHeight, GAME.canvas.width, GAME.canvas.height-GAME.groundHeight);

    RenderSprite(context, treeSprite1, 10, GAME.groundHeight,GAME.pixelScale,1);
    RenderSprite(context, treeSprite1, 30, GAME.groundHeight,GAME.pixelScale,1);
    RenderSprite(context, treeSprite2, 65, GAME.groundHeight,GAME.pixelScale,1);
    RenderSprite(context, treeSprite1, 85, GAME.groundHeight,GAME.pixelScale,1);
    //RenderSprite(context, treeSprite2, 105, GAME.groundHeight,GAME.pixelScale,1);
    RenderSprite(context, treeSprite2, 125, GAME.groundHeight,GAME.pixelScale,1);
    RenderSprite(context, treeSprite3, 150, GAME.groundHeight,GAME.pixelScale,1);
    //RenderSprite(context, treeSprite2, 175, GAME.groundHeight,GAME.pixelScale,1);
    RenderSprite(context, treeSprite1, 190, GAME.groundHeight,GAME.pixelScale,1);
    RenderSprite(context, treeSprite1, 210, GAME.groundHeight,GAME.pixelScale,1);
    //RenderSprite(context, treeSprite3, 235, GAME.groundHeight,GAME.pixelScale,1);
    //RenderSprite(context, treeSprite2, 260, GAME.groundHeight,GAME.pixelScale,1);
    RenderSprite(context, treeSprite1, 280, GAME.groundHeight,GAME.pixelScale,1);
    //RenderSprite(context, treeSprite3, 310, GAME.groundHeight,GAME.pixelScale,1);
    //RenderSprite(context, treeSprite3, 340, GAME.groundHeight,GAME.pixelScale,1);
    RenderSprite(context, treeSprite2, 365, GAME.groundHeight,GAME.pixelScale,1);
    RenderSprite(context, treeSprite2, 385, GAME.groundHeight,GAME.pixelScale,1);
  //  RenderSprite(context, treeSprite1, 410, GAME.groundHeight,GAME.pixelScale,1);
  //  RenderSprite(context, treeSprite2, 430, GAME.groundHeight,GAME.pixelScale,1);
    RenderSprite(context, treeSprite3, 455, GAME.groundHeight,GAME.pixelScale,1);

    RenderSprite(context, treeSprite2D, 5, GAME.groundHeight,GAME.pixelScale,1);
    RenderSprite(context, treeSprite3D, 45, GAME.groundHeight,GAME.pixelScale,1);
  //  RenderSprite(context, treeSprite2D, 70, GAME.groundHeight,GAME.pixelScale,1);
  //  RenderSprite(context, treeSprite2D, 95, GAME.groundHeight,GAME.pixelScale,1);
  //  RenderSprite(context, treeSprite3D, 140, GAME.groundHeight,GAME.pixelScale,1);
    RenderSprite(context, treeSprite1D, 185, GAME.groundHeight,GAME.pixelScale,1);
  //  RenderSprite(context, treeSprite1D, 220, GAME.groundHeight,GAME.pixelScale,1);
  //  RenderSprite(context, treeSprite2D, 250, GAME.groundHeight,GAME.pixelScale,1);
    RenderSprite(context, treeSprite1D, 280, GAME.groundHeight,GAME.pixelScale,1);
    RenderSprite(context, treeSprite1D, 330, GAME.groundHeight,GAME.pixelScale,1);
  //  RenderSprite(context, treeSprite1D, 400, GAME.groundHeight,GAME.pixelScale,1);
  //  RenderSprite(context, treeSprite1D, 440, GAME.groundHeight,GAME.pixelScale,1);
  }
  else if(GAME.level==2) {
    context.fillStyle='rgb(38,48,117)';
    context.fillRect(0,0,GAME.canvas.width,GAME.canvas.height);
    context.fillStyle='green';
    context.fillRect(0,GAME.groundHeight,GAME.canvas.width,GAME.canvas.height-GAME.groundHeight);

    context.fillStyle='rgb(62,46,8)';
    context.fillRect(0,GAME.groundHeight,120, -GAME.groundHeight+100);
    context.fillRect(170, GAME.groundHeight,140,-GAME.groundHeight+100);
    context.fillRect(GAME.canvas.width,GAME.groundHeight,-120, -GAME.groundHeight+100);

    context.fillStyle='rgb(16,47,6)';
    context.fillRect(0, 0, GAME.canvas.width,100);
  }
  else if(GAME.level==3) {
    context.fillStyle='rgb(167, 233, 235)';
    context.fillRect(0,0,GAME.canvas.width,GAME.canvas.height);
    context.fillStyle='grey';
    context.fillRect(0,GAME.groundHeight,GAME.canvas.width,GAME.canvas.height-GAME.groundHeight);
  }
  else if(GAME.level==4) {

  }
}

function displayScore(context) {
  var colorNorm;
  if(GAME.level==1) {colorNorm='black';}
  else if(GAME.level==2) {colorNorm='white';}
  else if(GAME.level==3) {colorNorm='black';}
  if(MANAGER.rockTarget>0) {
    if(MANAGER.killedR<MANAGER.rockTarget) {
      RenderWord(context, 5, 30, 'rocks:' + MANAGER.killedR + '/' + MANAGER.rockTarget, colorNorm, 5);
    }
    else {
      RenderWord(context, 5, 30, 'rocks:' + MANAGER.killedR + '/' + MANAGER.rockTarget, 'rgb(55,152,0)', 5);
    }
  }
  if(MANAGER.enemyTarget>0) {
    if(MANAGER.killedE<MANAGER.enemyTarget) {
      RenderWord(context, 5, 60, 'beasts:' + MANAGER.killedE + '/' + MANAGER.enemyTarget, colorNorm, 5);
    }
    else {
      RenderWord(context, 5, 60, 'beasts:' + MANAGER.killedE + '/' + MANAGER.enemyTarget, 'rgb(55,152,0)', 5);
    }
  }
  if(MANAGER.killedR>=MANAGER.rockTarget&&MANAGER.killedE>=MANAGER.enemyTarget) {GAME.trans=true;}
}

function displayHealth(context) {
  if(!GAME.player2) {
    context.lineWidth=5;
    context.strokeStyle='black';
    if(MANAGER.players[0].health==3) {context.fillStyle='rgb(55,152,0)';}
    else if(MANAGER.players[0].health==2) {context.fillStyle='orange';}
    else if(MANAGER.players[0].health==1) {context.fillStyle='red';}
    else {GAME.started=false;}

    if(MANAGER.players[0].health==3) {context.fillRect(GAME.canvas.width-20, 5,15,20);}
    if(MANAGER.players[0].health>=2) {context.fillRect(GAME.canvas.width-20, 25,15,20);}
      if(MANAGER.players[0].health>=1) {context.fillRect(GAME.canvas.width-20,45,15,20);}

    context.strokeRect(GAME.canvas.width-20, 5,15,20);
    context.strokeRect(GAME.canvas.width-20, 25,15,20);
    context.strokeRect(GAME.canvas.width-20, 45,15,20);
  }
}



var pressedSpace=false;
var rectBackHeight = 0;
var rectSpeed = 20;
var selectedChar=0;
var charLeaveX = 0;
var animationCounterF = 500;
var timer = 250;
var characterTheme=new sound('character_select.wav');
function intro(context) {

  context.clearRect(0,0,480,640);
  if(timer>0) {timer--;}
  if(timer==0 && animationCounterF>159) {
      characterTheme.play();
  }
  if(animationCounterF>400) {
    if(pressedSpace&&selectedChar==0) {
      rectBackHeight-=rectSpeed;
      rectSpeed-=0.5;
      context.fillStyle='rgb(140,140,140)';
      context.fillRect(0,0,480,640);
      RenderWord(context, 135, 200, 'select your', 'white', '5');
      RenderWord(context, 150, 230, 'character', 'white', '5');

      MANAGER.players[0].x=240, MANAGER.players[0].y=425, MANAGER.players[0].grounded=true;
      RenderArrow(context, 235, 480, 'up', 'white', '5');
      RenderWord(context, 195, 340,'water', MANAGER.players[0].colorD,5);

      MANAGER.players[1].x=360, MANAGER.players[1].y=550, MANAGER.players[1].grounded=true;
      RenderArrow(context, 290, 540, 'right', 'white', '5');
      RenderWord(context, 325, 465,'fire', MANAGER.players[1].colorL,5);

      MANAGER.players[2].x=115, MANAGER.players[2].y=550, MANAGER.players[2].grounded=true, MANAGER.players[2].direction=-1;
      RenderArrow(context, 160, 540, 'left', 'white', '5');
      RenderWord(context, 85, 465,'bolt', MANAGER.players[2].colorL,5);
      RenderPlayers(context);
      if(CONTROLS.p2.jump) {selectedChar=2;}
      else if(CONTROLS.p2.left){selectedChar=1;}
      else if(CONTROLS.p2.right){selectedChar=3;}
    }
    else if(selectedChar!=0) {
      animationCounterF--;
      context.fillStyle='rgb(140,140,140)';
      context.fillRect(0,0,480,640);
      if(selectedChar!=1) {
        MANAGER.players[2].grounded=false;
        MANAGER.players[2].x-=0.5*charLeaveX;
        MANAGER.players[2].y-=-0.1*Math.pow(charLeaveX,2)+2*charLeaveX;
      }
      else {
        if(MANAGER.players[2].x<245){MANAGER.players[2].x+=0.05*charLeaveX;}
      }
      if(selectedChar!=2) {
        MANAGER.players[0].grounded=false;
        MANAGER.players[0].x+=0.5*charLeaveX;
        MANAGER.players[0].y-=-0.1*Math.pow(charLeaveX,2)+2*charLeaveX;
      }
      else {
        if(MANAGER.players[0].y<470){MANAGER.players[0].y+=0.05*charLeaveX;}
      }
      if(selectedChar!=3) {
        MANAGER.players[1].grounded=false;
        MANAGER.players[1].x+=0.5*charLeaveX;
        MANAGER.players[1].y-=-0.1*Math.pow(charLeaveX,2)+2*charLeaveX;
      }
      else {
        if(MANAGER.players[1].x>245){MANAGER.players[1].x-=0.05*charLeaveX;}
      }
      charLeaveX++;
      RenderPlayers(context);
    }
  }
  else if(animationCounterF>0) {
    if(animationCounterF==400) {
      if(selectedChar==1) {
        MANAGER.players.splice(0, 1);
        MANAGER.players.splice(0, 1);
      }
      else if(selectedChar==2) {
        MANAGER.players.splice(1, 1);
        MANAGER.players.splice(1, 1);
      }
      else if(selectedChar==3) {
        MANAGER.players.splice(0, 1);
        MANAGER.players.splice(1, 1);
      }
    }
    animationCounterF--;
    context.fillStyle='rgb(140,140,140)';
    context.fillRect(0,0,480,640);

    RenderWord(context, 180, 240, 'wizard!', 'white', 5);
    if(animationCounterF<320) {
      RenderWord(context, 170, 320, 'save the', 'white', 5);
      RenderWord(context, 190, 360, 'world!', 'white', 5);
    }
    RenderPlayers(context);
    if(animationCounterF==160) {
      characterTheme.stop();
      GAME.trans=true;
    }
  }

  //Render Curtains
  context.fillStyle='black';
  if(selectedChar==0) {
    if(rectBackHeight<640) {
      context.fillRect(0,rectBackHeight,96,740);
      context.fillRect(96,rectBackHeight,96,690);
      context.fillRect(192,rectBackHeight,96,640);
      context.fillRect(288,rectBackHeight,96,690);
      context.fillRect(384,rectBackHeight,96,740);
    }
  }

  //Render Title
  if(animationCounterF>=160) {RenderWord(context,35,140,'wizard jump','white','10');}

  if(!pressedSpace) {
    RenderWord(context, 140, 400, 'press space', 'grey', '5');
  }
  if(CONTROLS.p1.jump&&!pressedSpace) {
    pressedSpace=true;
    MANAGER.players.push(new Player('red'));
    MANAGER.players.push(new Player('yellow'));
  }

}


function runGame() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  if(GAME.started) {
    if(GAME.trans) {
      levelChange(context);
    }
    else if (GAME.level==0) {
      intro(context);

    }
    else if(GAME.level==1) {
      level1Theme.play();
      animatePlayers();
      animateEnemies();
      handleProjectileAnimation();
      handlePlayerParticleAnimation();
      handleEnemyParticleAnimation();
      handleRockAnimation();
    //  handleRockParticleAnimation();

      checkProjectileCollision();
      checkPlayerCollision();

      context.clearRect(0, 0, 480, 640);

      drawBackground(context);

      RenderPlatforms(context);
      RenderPlayers(context);
      RenderEnemies(context);
      RenderPlayerParticles(context);
      RenderEnemyParticles(context);
      RenderRocks(context);
    //  RenderRockParticles(context);
      RenderProjectiles(context);

      displayScore(context);
      displayHealth(context);
      if(GAME.trans) {level1Theme.stop();}
    }
    else if(GAME.level==2) {
      level2Theme.play();
      animatePlayers();
      animateEnemies();
      handleProjectileAnimation();
      handlePlayerParticleAnimation();

      handleRockAnimation();
    //  handleRockParticleAnimation();

      checkProjectileCollision();
      checkPlayerCollision();

      context.clearRect(0, 0, 480, 640);

      drawBackground(context);

      RenderPlatforms(context);
      RenderPlayers(context);
      RenderEnemies(context);
      RenderPlayerParticles(context);

      RenderRocks(context);
    //  RenderRockParticles(context);
      RenderProjectiles(context);

      displayScore(context);
      displayHealth(context);
      if(GAME.trans) {level2Theme.stop();}
    }
    else if(GAME.level==3) {
      animatePlayers();
      handleProjectileAnimation();
      handlePlayerParticleAnimation();

      handleRockAnimation();
    //  handleRockParticleAnimation();

      checkProjectileCollision();
      checkPlayerCollision();

      context.clearRect(0, 0, 480, 640);

      drawBackground(context);

      RenderPlatforms(context);
      RenderPlayers(context);
      RenderPlayerParticles(context);

      RenderRocks(context);
    //  RenderRockParticles(context);
      RenderProjectiles(context);

      displayScore(context);
      displayHealth(context);
    }
    else if(GAME.level==4) {

    }
    else {}
  }
  else {
    context.fillStyle='black';
    context.fillRect(0,0,480,640);
    RenderWord(context, GAME.canvas.width/2-90, GAME.canvas.height/2, 'you lose ...', 'white', 5);
  }
  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);
