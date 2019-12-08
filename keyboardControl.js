
var CONTROLS = {
  p1 : {
    left : false,
    right : false,
    jump : false,
    jumpCounter : 0,
    fireH : false,
    fireHCounter : 0,
    fireV : false,
    fireVCounter : 0
  },
  p2 : {
    left : false,
    right : false,
    jump : false,
    jumpCounter : 0,
    fireH : false,
    fireHCounter : 0,
    fireV : false,
    fireVCounter : 0
  }
};

document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case "l":
      GAME.level++;
      resetPlayers();
      break;
    case "a":
      CONTROLS.p1.left = true;
      break;
    case "d":
      CONTROLS.p1.right = true;
      break;
    case " ":
      CONTROLS.p1.jump = true;
      break;
    case "t":
      CONTROLS.p1.fireH = true;
      break;
    case "y":
      CONTROLS.p1.fireV = true;
      break;
    case "ArrowLeft":
      CONTROLS.p2.left = true;
      break;
    case "ArrowRight":
      CONTROLS.p2.right = true;
      break;
    case "ArrowUp":
      CONTROLS.p2.jump = true;
      break;
    case ".":
      CONTROLS.p2.fireH = true;
      break;
    case ",":
      CONTROLS.p2.fireV = true;
      break;
    default:
      break;
  }
});


document.addEventListener('keyup', function(event) {
  switch (event.key) {
    case "a":
      CONTROLS.p1.left = false;
      break;
    case "d":
      CONTROLS.p1.right = false;
      break;
    case " ":
      CONTROLS.p1.jump = false;
      break;
    case "t":
      CONTROLS.p1.fireH = false;
      break;
    case "y":
      CONTROLS.p1.fireV = false;
      break;
    case "ArrowLeft":
      CONTROLS.p2.left = false;
      break;
    case "ArrowRight":
      CONTROLS.p2.right = false;
      break;
    case "ArrowUp":
      CONTROLS.p2.jump = false;
      break;
    case ".":
      CONTROLS.p2.fireH = false;
      break;
    case ",":
      CONTROLS.p2.fireV = false;
      break;
    default:
      break;
  }
});
