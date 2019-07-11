let canvas = document.querySelector('.zdog-canvas');
let ctx = canvas.getContext('2d');
// get canvas size
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
ctx.imageSmoothingEnabled = true;
let scene = new Zdog.Anchor();



var image = new Image();
image.src = "memeglasses.png";
 
new Zdog.Shape({
  addTo: scene,
  path: [
    { x: -40, y: 25 }, // start at 1st point
    { x:  40, y: 25 }, // line to 2nd point
  ],
  stroke: 7,
  color: '#000',
});

new Zdog.Shape({
  addTo: scene,
  path: [
    { x: -45, y: -20 }, // start at 1st point
    { x:  45, y: -20 }, // line to 2nd point
  ],
  stroke: 7,
  color: '#000',
});

new Zdog.Ellipse({
  addTo: scene,
  width: 100,
  height: 95,
  stroke: 7,
  color: '#000',
  
});


// add circle
let base = new Zdog.Ellipse({
  addTo: scene,
  width: 100,
  height: 95,
  stroke: 7,
  color: '#000',
   backface: false,
   front: { x: 1 },
    quarters: 2,
});

new Zdog.Ellipse({
  addTo: base,
  width: 100,
  height: 95,
  stroke: 7,
  color: '#000',
 rotate: { y: Zdog.TAU/8 },
 backface: false,
 front: { x: 1 },
  quarters: 2,
});

new Zdog.Ellipse({
  addTo: base,
  width: 100,
  height: 95,
  stroke: 7,
  color: '#000',
 rotate: { y: Zdog.TAU/4 },
 backface: false,
 front: { x: 1 },
  quarters: 2,
});

new Zdog.Ellipse({
  addTo: base,
  width: 100,
  height: 95,
  stroke: 7,
  color: '#000',
 rotate: { y: Zdog.TAU*3/8 },
 backface: false,
 front: { x: 1 },
  quarters: 2,
});

new Zdog.Ellipse({
  addTo: base,
  width: 100,
  height: 95,
  stroke: 7,
  color: '#000',
 rotate: { y: Zdog.TAU*4/8 },
 backface: false,
 front: { x: 1 },
  quarters: 2,
});

new Zdog.Ellipse({
  addTo: base,
  width: 100,
  height: 95,
  stroke: 7,
  color: '#000',
 rotate: { y: Zdog.TAU*5/8 },
 backface: false,
 front: { x: 1 },
  quarters: 2,
});

new Zdog.Ellipse({
  addTo: base,
  width: 100,
  height: 95,
  stroke: 7,
  color: '#000',
 rotate: { y: Zdog.TAU*6/8 },
 backface: false,
 front: { x: 1 },
  quarters: 2,
});

new Zdog.Ellipse({
  addTo: base,
  width: 100,
  height: 95,
  stroke: 7,
  color: '#000',
 rotate: { y: Zdog.TAU*7/8 },
 backface: false,
 front: { x: 1 },
  quarters: 2,
});

let speed = 0.06;
let reverse = false;
let counter = 0;
function animate() {
   //rotate illo each frame
  if(speed < 0.05){
	  speed = 0.05;
		counter++;
		if(counter > 40){
			counter =0;
			reverse =  true;
		}
	}
	if(speed >0.12){
		
		speed = 0.12;
		counter++;
		if(counter > 20){
			counter =0;
			reverse =  false;
		}
	}
	if(reverse){
		speed+= 0.003;
	}else{
		speed-= 0.001;
	}
	
  base.rotate.y += speed;
  scene.updateGraph();
  //base.updateRenderGraph();
  // animate next frame
  render();
  requestAnimationFrame( animate );
}
// start animation
function render() {
  // clear canvas
  ctx.clearRect( 0, 0, canvasWidth, canvasHeight );
  ctx.save();

  // center canvas & zoom
  ctx.translate( canvasWidth/2, canvasHeight/2 );
  ctx.scale(1, 1 );
  // set lineJoin and lineCap to round
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  // render scene graph

  scene.renderGraphCanvas( ctx );
 ctx.drawImage(image, -65 ,-44 , 130, 84 );
  ctx.restore();

}


animate();