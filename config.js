var GAME = {
  canvas : {
    width : 480,
    height : 640
  },
  started : true,
  level : 0,
  pixelScale : 5,
  player2 : false,
  groundHeight : 620,
  trans : false
};

var MANAGER = {
  players : [],
  enemies : [],
  rocks : [],
  platforms : [],
  rockSpeedVar : 2,
  rockTime : 0,
  rockCap : 0,
  rockTarget : 0,
  killedR : 0,
  rockParticles : [],
  enemyTime : 0,
  enemyCap : 0,
  enemyTarget : 0,
  killedE : 0
}
