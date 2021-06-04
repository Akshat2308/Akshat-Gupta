var canvas = new fabric.Canvas('myCanvas');
var player = "";
var block = "";
bw=30;
bh=30;
px=50;
py=50;
function player_sprite(){
    fabric.Image.fromURL("player.png",
    function (img){
    player=img;
    player.scaleToWidth(150);
    player.scaleToHeight(140);
    player.set({
        top:py,
        left:px
    });
    canvas.add(player);
    
    });
}
function block_sprite(blockImage){
    fabric.Image.fromURL(blockImage,
    function (img){
    block=img;
    block.scaleToWidth(bw);
    block.scaleToHeight(bh);
    block.set({
        top:py,
        left:px
    });
    canvas.add(block);
    
    });
}

window.addEventListener("keydown",a);
function a(e){
 gar=e.keyCode;
 if (gar=='38'){
   up();
 }
 if (gar=='40'){
    down();
  }
  if (gar=='37'){
    left();
  }
  if (gar=='39'){
    right();
  }
  if (gar=='67'){
    block_sprite('cloud.jpg');
  }
  if (gar=='68'){
    block_sprite('dark_green.png');
  }
  if (gar=='71'){
    block_sprite('ground.png');
  }
  if (gar=='76'){
    block_sprite('light_green.png');
  }
  if (gar=='82'){
    block_sprite('roof.jpg');
  }
  if (gar=='84'){
    block_sprite('trunk.jpg');
  }
  if (gar=='85'){
    block_sprite('unique.png');
  }
  if (gar=='87'){
    block_sprite('wall.jpg');
  }
  if (gar=='89'){
    block_sprite('yellow_wall.jpg');
  }
  if (gar=='187'){
      bw=bw+10;
      bh=bh+10;
      document.getElementById("cw").innerHTML=bw;
      document.getElementById("ch").innerHTML=bh;
      }
  if (gar=='189'){
    bw=bw-10;
    bh=bh-10;
    document.getElementById("cw").innerHTML=bw;
    document.getElementById("ch").innerHTML=bh;
  }
}

function up (){
  if (py >= 0){
    py= py - bh;
    console.log("block height"+bh);
    console.log ("up arrow key pressed,x" +px+ "y" + py);
    canvas.remove(player);
    player_sprite();
  }
}
function down (){
  if (py <= 510){
    py= py + bh;
    console.log("block height"+bh);
    console.log ("up arrow key pressed,x" +px+ "y" + py);
    canvas.remove(player);
    player_sprite();
  }
}
function left (){
  if (px >= 0){
    px= px - bw;
    console.log("block height"+bh);
    console.log ("up arrow key pressed,x" +px+ "y" + py);
    canvas.remove(player);
    player_sprite();
  }
}
function right (){
  if (px <= 850){
    px= px + bw;
    console.log("block height"+bh);
    console.log ("up arrow key pressed,x" +px+ "y" + py);
    canvas.remove(player);
    player_sprite();
  }
}
