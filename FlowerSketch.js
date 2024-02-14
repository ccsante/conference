function setup(){
    const size = min(windowWidth, windowHeight);
    createCanvas(500, 500);
    colorMode(HSB, 1);
    noStroke();

}

var radius = 0.4;
const dotSize = 0.05;
const PHI = (1+ Math.sqrt(5)) / 2;

let t;
const frames = 500;

function cosn(v){
  return cos(v* TWO_PI) * 0.5 +0.5;
}
function invCosn(v){
  return 1 - cosn(v);
}

function draw(){
    t = fract(frameCount / frames);
  
  
  
    scale (width, height);
    background(0);
    fill(1,0.2);

    const count = 1000 ;
    for(let j = 1; j < round(15*t) ; j ++){
      push();
      translate(0.5,0.5);
      rotate(j)
      
      for(let i = 1; i <count * invCosn(t); i++){
          const f = i/count;
          const angle = f;
          const dist = f* (radius+1) *t;

          const x = cos(angle * TWO_PI) * dist;
          const y = sin(angle * TWO_PI) * dist;

          const  r =  f *  dotSize;
          fill(0.825,invCosn(t),sin(t));
          circle (x,y,r);

      }
      pop();
      
    }
  
 

}