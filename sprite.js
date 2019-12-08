function RenderSprite(context, pos, x, y, scale) {
  var sx = x, sy =y;
  context.lineWidth=1;

  for(var j = 0; j < pos.length; j++) {
    context.fillStyle=pos[j].c;
    context.strokeStyle=pos[j].c;
    sx=x+cale*pos[j].x;
    sy=y-scale*pos[j].y;
    context.fillRect(sx, sy, scale, -scale);
    context.strokeRect(sx, sy, scale, -scale);
  }
}

function RenderSprite(context, pos, x, y, scale, direction) {
  var sx = x, sy =y;
  context.lineWidth=1;

  for(var j = 0; j < pos.length; j++) {
    context.fillStyle=pos[j].c;
    context.strokeStyle=pos[j].c;
    sx=x+direction*scale*pos[j].x;
    sy=y-scale*pos[j].y;
    context.fillRect(sx, sy, scale, -scale);
    context.strokeRect(sx, sy, scale, -scale);
  }
}

function RenderArrow(context, x, y , direction, color, scale) {
  var sprite;
  if(direction=='up') {
    sprite=[{x:-1,y:4,c:color},{x:0,y:4,c:color},{x:0,y:5,c:color},{x:1,y:0,c:color},{x:1,y:1,c:color},{x:1,y:2,c:color},{x:1,y:3,c:color},{x:1,y:4,c:color},
    {x:1,y:5,c:color},{x:1,y:6,c:color},{x:2,y:5,c:color},{x:2,y:4,c:color},{x:3,y:4,c:color}];
  }
  else if(direction=='left') {
    sprite=[{x:0,y:1,c:color},{x:1,y:0,c:color},{x:1,y:1,c:color},{x:1,y:2,c:color},
    {x:2,y:1,c:color},{x:2,y:0,c:color},{x:2,y:-1,c:color},{x:2,y:2,c:color},{x:2,y:3,c:color},
    {x:3,y:1,c:color},{x:4,y:1,c:color},{x:5,y:1,c:color},{x:6,y:1,c:color}];
  }
  else if(direction=='right') {
    sprite=[{x:0,y:1,c:color},{x:1,y:1,c:color},{x:2,y:1,c:color},{x:3,y:1,c:color},{x:4,y:1,c:color},
      {x:4,y:2,c:color},{x:4,y:3,c:color},{x:4,y:0,c:color},{x:4,y:-1,c:color},
      {x:5,y:1,c:color},{x:6,y:1,c:color},{x:5,y:0,c:color},{x:5,y:2,c:color}];
  }
  RenderSprite(context, sprite, x, y, scale, 1);
}


function RenderWord(context, x, y, string, color, scale) {
  for(var i = 0; i < string.length; i++) {
    RenderChar(context, x, y, string.substring(i,i+1), color,scale);
    if(string.substring(i,i+1)==' ') {x+=2*scale;}
    else {x+=4*scale;}
  }
}

function RenderChar(context, x, y, char) {
  RenderChar(context,x,y,char,'white');
}

function RenderChar(context, x, y, char, color) {
  RenderChar(context,x,y,char,color,GAME.pixelScale);
}

function RenderChar(context, x, y, char, color, scale) {
  var sprite;
  if(char=='a') {
    sprite = [{x:0,y:0,c:color},{x:0,y:1,c:color},{x:0,y:2,c:color},{x:0,y:3,c:color},
      {x:0,y:4,c:color},{x:1,y:2,c:color},{x:1,y:4,c:color},{x:2,y:0,c:color},{x:2,y:1,c:color},
      {x:2,y:2,c:color},{x:2,y:3,c:color},{x:2,y:4,c:color}
    ];
  }
  else if(char=='b') {
    sprite = [{x:0,y:0,c:color},{x:0,y:1,c:color},{x:0,y:2,c:color},{x:0,y:3,c:color},
      {x:0,y:4,c:color},{x:1,y:0,c:color},{x:1,y:2,c:color},{x:1,y:4,c:color},{x:2,y:0,c:color},{x:2,y:1,c:color},
      {x:2,y:2,c:color},{x:2,y:3,c:color},{x:2,y:4,c:color}
    ];
  }
  else if(char=='c') {
    sprite = [{x:0,y:0,c:color},{x:0,y:1,c:color},{x:0,y:2,c:color},{x:0,y:3,c:color},
      {x:0,y:4,c:color},{x:1,y:0,c:color},{x:1,y:4,c:color},{x:2,y:0,c:color},
      {x:2,y:4,c:color}
    ];
  }
  else if(char=='d') {
    sprite = [{x:0,y:0,c:color},{x:0,y:1,c:color},{x:0,y:2,c:color},{x:0,y:3,c:color},
      {x:0,y:4,c:color},{x:1,y:0,c:color},{x:1,y:4,c:color},{x:2,y:1,c:color},
      {x:2,y:2,c:color},{x:2,y:3,c:color}
    ];
  }
  else if(char=='e') {
    sprite = [{x:0,y:0,c:color},{x:0,y:1,c:color},{x:0,y:2,c:color},{x:0,y:3,c:color},
      {x:0,y:4,c:color},{x:1,y:0,c:color},{x:1,y:2,c:color},{x:1,y:4,c:color},{x:2,y:0,c:color},
      {x:2,y:2,c:color},{x:2,y:4,c:color}
    ];
  }
  else if(char=='f') {
    sprite = [{x:0,y:0,c:color},{x:0,y:1,c:color},{x:0,y:2,c:color},{x:0,y:3,c:color},
      {x:0,y:4,c:color},{x:1,y:2,c:color},{x:1,y:4,c:color},
      {x:2,y:2,c:color},{x:2,y:4,c:color}
    ];
  }
  else if(char=='g') {

  }
  else if(char=='h') {
    sprite = [{x:0,y:0,c:color},{x:0,y:1,c:color},{x:0,y:2,c:color},{x:0,y:3,c:color},
      {x:0,y:4,c:color},{x:1,y:2,c:color},{x:2,y:0,c:color},{x:2,y:1,c:color},
      {x:2,y:2,c:color},{x:2,y:3,c:color},{x:2,y:4,c:color}
    ];
  }
  else if(char=='i') {
    sprite = [{x:0,y:0,c:color},
      {x:0,y:4,c:color},{x:1,y:0,c:color},{x:1,y:1,c:color},{x:1,y:2,c:color},{x:1,y:3,c:color},{x:1,y:4,c:color},{x:2,y:0,c:color},{x:2,y:4,c:color}
    ];
  }
  else if(char=='j') {
    sprite = [{x:0,y:0,c:color},
      {x:0,y:4,c:color},{x:1,y:0,c:color},{x:1,y:1,c:color},{x:1,y:2,c:color},{x:1,y:3,c:color},{x:1,y:4,c:color},{x:2,y:4,c:color}
    ];
  }
  else if(char=='k') {
    sprite = [{x:0,y:0,c:color},{x:0,y:1,c:color},{x:0,y:2,c:color},{x:0,y:3,c:color},
      {x:0,y:4,c:color},{x:1,y:2,c:color},{x:2,y:0,c:color},{x:2,y:1,c:color},
      {x:2,y:3,c:color},{x:2,y:4,c:color}
    ];
  }
  else if(char=='l') {
    sprite = [{x:0,y:0,c:color},{x:0,y:1,c:color},{x:0,y:2,c:color},{x:0,y:3,c:color},
      {x:0,y:4,c:color},{x:1,y:0,c:color},{x:2,y:0,c:color}
    ];
  }
  else if(char=='m') {
    sprite = [{x:0,y:0,c:color},{x:0,y:1,c:color},{x:0,y:2,c:color},{x:0,y:3,c:color},
      {x:0,y:4,c:color},{x:1,y:3,c:color},{x:2,y:0,c:color},{x:2,y:1,c:color},
      {x:2,y:2,c:color},{x:2,y:3,c:color},{x:2,y:4,c:color}
    ];
  }
  else if(char=='n') {

  }
  else if(char=='o') {
    sprite = [{x:0,y:0,c:color},{x:0,y:1,c:color},{x:0,y:2,c:color},{x:0,y:3,c:color},
      {x:0,y:4,c:color},{x:1,y:0,c:color},{x:1,y:4,c:color},{x:2,y:0,c:color},{x:2,y:1,c:color},
      {x:2,y:2,c:color},{x:2,y:3,c:color},{x:2,y:4,c:color}
    ];
  }
  else if(char=='p') {
    sprite = [{x:0,y:0,c:color},{x:0,y:1,c:color},{x:0,y:2,c:color},{x:0,y:3,c:color},
      {x:0,y:4,c:color},{x:1,y:2,c:color},{x:1,y:4,c:color},
      {x:2,y:2,c:color},{x:2,y:3,c:color},{x:2,y:4,c:color}
    ];
  }
  else if(char=='q') {

  }
  else if(char=='r') {
    sprite = [{x:0,y:0,c:color},{x:0,y:1,c:color},{x:0,y:2,c:color},{x:0,y:3,c:color},
      {x:0,y:4,c:color},{x:1,y:2,c:color},{x:2,y:1,c:color},{x:1,y:4,c:color},{x:2,y:0,c:color},
      {x:2,y:3,c:color},{x:2,y:4,c:color}
    ];
    //{x:2,y:2,c:color},

  }
  else if(char=='s') {
    sprite = [{x:0,y:0,c:color},{x:0,y:3,c:color},
      {x:1,y:0,c:color},{x:1,y:2,c:color},{x:1,y:4,c:color},
      {x:2,y:1,c:color},{x:2,y:4,c:color},{x:2,y:4,c:color}
    ];
  }
  else if(char=='t') {
    sprite = [
      {x:0,y:4,c:color},{x:1,y:0,c:color},{x:1,y:1,c:color},
      {x:1,y:2,c:color},{x:1,y:3,c:color},{x:1,y:4,c:color},{x:2,y:4,c:color}
    ];
  }
  else if(char=='u') {
    sprite = [{x:0,y:0,c:color},{x:0,y:1,c:color},{x:0,y:2,c:color},{x:0,y:3,c:color},
      {x:0,y:4,c:color},{x:1,y:0,c:color},{x:2,y:0,c:color},{x:2,y:1,c:color},
      {x:2,y:2,c:color},{x:2,y:3,c:color},{x:2,y:4,c:color}
    ];
  }
  else if(char=='v') {
    sprite = [{x:0,y:1,c:color},{x:0,y:2,c:color},{x:0,y:3,c:color},
      {x:0,y:4,c:color},{x:1,y:0,c:color},{x:2,y:1,c:color},
      {x:2,y:2,c:color},{x:2,y:3,c:color},{x:2,y:4,c:color}
    ];
  }
  else if(char=='w') {
    sprite = [{x:0,y:0,c:color},{x:0,y:1,c:color},{x:0,y:2,c:color},{x:0,y:3,c:color},
      {x:0,y:4,c:color},{x:1,y:1,c:color},{x:2,y:0,c:color},{x:2,y:1,c:color},
      {x:2,y:2,c:color},{x:2,y:3,c:color},{x:2,y:4,c:color}
    ];
  }
  else if(char=='x') {
    sprite = [{x:0,y:0,c:color},{x:0,y:1,c:color},{x:0,y:3,c:color},
      {x:0,y:4,c:color},{x:1,y:2,c:color},{x:2,y:0,c:color},{x:2,y:1,c:color},
      {x:2,y:3,c:color},{x:2,y:4,c:color}
    ];
  }
  else if(char=='y') {
    sprite = [
      {x:0,y:4,c:color},{x:0,y:3,c:color},{x:1,y:0,c:color},{x:1,y:1,c:color},
      {x:1,y:2,c:color},{x:2,y:3,c:color},{x:2,y:4,c:color}
    ];
  }
  else if(char=='z') {
    sprite = [{x:0,y:0,c:color},{x:0,y:1,c:color},
      {x:0,y:4,c:color},{x:1,y:0,c:color},{x:1,y:2,c:color},{x:2,y:3,c:color},{x:1,y:4,c:color},{x:2,y:0,c:color},{x:2,y:4,c:color}
    ];
  }
  else if(char=='1') {
    sprite = [{x:0,y:0,c:color},
      {x:0,y:3,c:color},{x:1,y:0,c:color},{x:1,y:1,c:color},{x:1,y:2,c:color},{x:1,y:3,c:color},
      {x:1,y:4,c:color},{x:2,y:0,c:color}
    ];
  }
  else if(char=='2') {
    sprite = [{x:0,y:0,c:color},{x:0,y:1,c:color},
      {x:0,y:4,c:color},{x:1,y:0,c:color},{x:1,y:2,c:color},{x:2,y:3,c:color},{x:1,y:4,c:color},{x:2,y:0,c:color}
    ];
  }
  else if(char=='3') {
    sprite = [{x:0,y:0,c:color},{x:0,y:2,c:color},
      {x:0,y:4,c:color},{x:1,y:0,c:color},{x:1,y:2,c:color},{x:1,y:4,c:color},{x:2,y:0,c:color},{x:2,y:1,c:color},
      {x:2,y:2,c:color},{x:2,y:3,c:color},{x:2,y:4,c:color}
    ];
  }
  else if(char=='4') {
    sprite = [{x:0,y:2,c:color},{x:0,y:3,c:color},
      {x:0,y:4,c:color},{x:1,y:2,c:color},{x:2,y:0,c:color},{x:2,y:1,c:color},
      {x:2,y:2,c:color},{x:2,y:3,c:color},{x:2,y:4,c:color}
    ];
  }
  else if(char=='5') {
    sprite = [{x:0,y:0,c:color},{x:0,y:2,c:color},{x:0,y:3,c:color},{x:0,y:4,c:color},
      {x:1,y:0,c:color},{x:1,y:2,c:color},{x:1,y:4,c:color},
      {x:2,y:1,c:color},{x:2,y:4,c:color},{x:2,y:4,c:color}
    ];
  }
  else if(char=='6') {
    sprite = [{x:0,y:0,c:color},{x:0,y:1,c:color},{x:0,y:2,c:color},{x:0,y:3,c:color},
      {x:0,y:4,c:color},{x:1,y:0,c:color},{x:1,y:2,c:color},{x:1,y:4,c:color},{x:2,y:0,c:color},{x:2,y:1,c:color},
      {x:2,y:2,c:color},{x:2,y:4,c:color}
    ];
  }
  else if(char=='7') {
    sprite = [{x:0,y:0,c:color},
      {x:0,y:4,c:color},{x:1,y:1,c:color},{x:1,y:2,c:color},{x:2,y:3,c:color},{x:1,y:4,c:color},{x:2,y:4,c:color}
    ];
  }
  else if(char=='8') {
    sprite = [{x:0,y:0,c:color},{x:0,y:1,c:color},{x:0,y:2,c:color},{x:0,y:3,c:color},
      {x:0,y:4,c:color},{x:1,y:0,c:color},{x:1,y:2,c:color},{x:1,y:4,c:color},{x:2,y:0,c:color},{x:2,y:1,c:color},
      {x:2,y:2,c:color},{x:2,y:3,c:color},{x:2,y:4,c:color}
    ];
  }
  else if(char=='9') {
    sprite = [{x:0,y:2,c:color},{x:0,y:3,c:color},
      {x:0,y:4,c:color},{x:1,y:2,c:color},{x:1,y:4,c:color},{x:2,y:0,c:color},{x:2,y:1,c:color},
      {x:2,y:2,c:color},{x:2,y:3,c:color},{x:2,y:4,c:color}
    ];
  }
  else if(char=='0') {
    sprite = [{x:0,y:0,c:color},{x:0,y:1,c:color},{x:0,y:2,c:color},{x:0,y:3,c:color},
      {x:0,y:4,c:color},{x:1,y:0,c:color},{x:1,y:4,c:color},{x:2,y:0,c:color},{x:2,y:1,c:color},
      {x:2,y:2,c:color},{x:2,y:3,c:color},{x:2,y:4,c:color}
    ];
  }
  else if(char=='!') {
    sprite = [{x:0,y:0,c:color},{x:0,y:2,c:color},{x:0,y:3,c:color},
      {x:0,y:4,c:color}
    ];
  }
  else if(char == '.') {
    sprite=[{x:0,y:0,c:color}];
  }
  else if(char=='/') {
    sprite=[{x:0, y:0, c:color},{x:0,y:1,c:color},
    {x:1,y:2,c:color},{x:2,y:3,c:color},{x:2,y:4,c:color},];
  }
  else if(char==':') {
    sprite=[{x:0, y:1, c:color},{x:0,y:3,c:color}];
  }
  else {
    sprite={};
  }

  RenderSprite(context, sprite, x, y, scale, 1);
}
