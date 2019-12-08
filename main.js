/**
 *  This is called once after the HTML of the page loads
 *
 */
function Start() {

  var gameOpen=new sound("game_open.mp3");
  gameOpen.play();
  //Initialize the Players
  InitializePlayers();
}
