var particles= [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
   ground =  new Ground(200,700,1000,50)


  for (var k = 0; k<=width; k = k+80){ 
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }

  for (var j = 40; j <=width; j=j+50){
     plinkos.push(new Plinko(j,75));
  }
  for (var j = 15; j <= width-10; j=j+50){
       plinkos.push(new Plink(j,175));
  }
    
  
  for ( var j = 0; j< particles.length; j++){
     particles[j].display(); 
    }

    if(frameCount%60===0){ 
      particles.push(new Particle(random(width/2-10,width/2+10),10,10));
     }

    drawSprites();
}