//Tutorial 1 - Initial Tiled Line Tutorial from GenerativeArtistry.com

var canvas;
var context;

function draw(x, y, width, height) {
  var leftToRight = Math.random() >= 0.5;

  if(leftToRight) {
    context.moveTo(x, y);
    context.lineTo(x + width, y + height);    
  } else {
    context.moveTo(x + width, y);
    context.lineTo(x, y + height);
  }
  context.stroke();
}

function init(){
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');

    var size = 300 ;
    var step = 20;
    var dpr = window.devicePixelRatio;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    context.scale(dpr, dpr);

    context.lineCap = 'square';
    context.lineWidth = 2   ;

    for(var x = 0; x < size; x += step) {
        for(var y = 0; y < size; y+= step) {
            draw(x, y, step, step);    
        }
    }
}

if (document.readyState === 'complete') init()
else window.addEventListener('load', init); 