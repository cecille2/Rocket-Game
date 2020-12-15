//push code to github and send to mr. sasson for problems
//how to scale all planets individually
//testing
let stars = [];
let me;
let moon = [];
let planeta = [];
let planetb = [];
let planetc = [];
let planetd = [];
let planete = [];
let planetf = [];


function setup() {
  createCanvas(800, 700);
  me = new Rocket(width/2, 300, 3);
}

function draw(){
    background(8, 39, 89);

    me.draw();
    me.moveMe();

  if (frameCount % 75 == 0) {//star
      let  s = new Star(random(0,800), 10, 2);
      stars.push(s);
      console.log(stars);
    }

  for (let i = 0; i < stars.length; i++) {
          stars[i].moveStar();
          stars[i].disapearStar();
    }

    if (frameCount % 200 == 0) {//planeta
        let  a = new Planeta(random(0,800), 0, 2);
        planeta.push(a);
        console.log(planeta);
      }

    for (let i = 0; i < planeta.length; i++) {
            planeta[i].movePlaneta();
      }

    if (frameCount % 300 == 0) {//planetb
          let  b = new Planetb(random(0,800), 5, 2);
          planetb.push(b);
          console.log(planetb);
        }

    for (let i = 0; i < planetb.length; i++) {
              planetb[i].movePlanetb();
        }

    if (frameCount % 350 == 0) {//planetc
              let  c = new Planetc(random(0,800), 5, 2);
              planetc.push(c);
              console.log(planetc);
            }

    for (let i = 0; i < planetc.length; i++) {
                  planetc[i].movePlanetc();
            }
    if (frameCount % 250 == 0) {//planetd
        let  d = new Planetd(random(0,800), 5, 2);
        planetd.push(d);
        console.log(planetd);
            }

    for (let i = 0; i < planetd.length; i++) {
        planetd[i].movePlanetd();
          }

    if (frameCount % 150 == 0) {//planete
    let  e = new Planete(random(0,800), 5, 2);
    planete.push(e);
    console.log(planete);
      }

    for (let i = 0; i < planete.length; i++) {
    planete[i].movePlanete();
        }

    if (frameCount % 300 == 0) {//planetf
      let  f = new Planetf(random(0,800), 5, 2);
      planetf.push(f);
      console.log(planetf);
        }

    for (let i = 0; i < planetf.length; i++) {
      planetf[i].movePlanetf();
          }

    drawThings(stars);
    drawThings(moon);
    drawThings(me);
    drawThings(planeta);
    drawThings(planetb);
    drawThings(planetc);
    drawThings(planetd);
    drawThings(planete);
    drawThings(planetf);
}

function drawThings(list) {
  for(let i = 0; i < list.length; i++ ){
    list[i].draw();
  }
}


class Rocket{
  constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
        this.x = x;
        this.y = y;
        this.speed = speed;
  }

draw(){
  push()
  translate(this.x,this.y)
  scale(.5)
  strokeWeight(1);
  stroke(51);
  fill(6, 24, 145);
  ellipse(this.x,this.y,80);//window for avatar
  fill("white");
  ellipse(this.x,this.y,20); //body
  fill(255, 201, 255);
  arc(200, 170, 100, 260, 1.589, HALF_PI);//rocket
  //arc(50, 50, 80, 80, 0, PI + QUARTER_PI, CHORD);
  //arc(200, 100, 80, 80, -100, PI + QUARTER_PI, PIE);
  fill(255, 226, 201);
  ellipse(this.x,this.y,25);//head

  fill("white");
  ellipse(this.x,this.y,40);// window on rocket top
  ellipse(this.x,this.y,40); //window on rocket middle (last window is 6 lines lower)

  noStroke();
  fill(255, 201, 255);
  triangle(130, 345, 200, 205, 270, 345);//rocket jets
  strokeWeight(1);
  stroke(51);
  fill("white");
  ellipse(this.x,this.y,40);//window on rocket last

  fill("orange");
  triangle(130, 345, 155, 390, 174, 345);
  triangle(175, 345, 200, 390, 222, 345);
  triangle(222, 345, 245, 390, 269, 345);
  pop()
  }

moveMe(){
  if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
     this.y -= this.speed;
  }


  if (keyIsDown(RIGHT_ARROW)){
    this.x += this.speed;
  }

  if (keyIsDown(LEFT_ARROW)){
    this.x -= this.speed;
  }
  }
}


class Star {

  constructor(x,y, speed){
		this.x = x;
    this.y = y;
    this.speed = speed;
	}

  draw(){
  push()
  translate(this.x,this.y)
  scale(2.0)
  text("⭐",this.x,this.y);
  pop()
  }

  moveStar(){
    this.y = this.y+ this.speed;
}

  disapearStar(){
   if (this.x >= me.x-10 && this.x <= me.x+10 && this.y > me.y-10 && this.y < me.y+10){
          stars.splice(this.x,this.y)
     }
   }
}

class Moon{
  constructor(x,y, speed){
        this.x = x;
        this.y = y;
        this.speed = speed;
  }

  draw(){
    strokeWeight(0.0)
    fill(232, 230, 230)
    ellipse(this.x,this.y,200)
    fill(204, 198, 198)
    ellipse(this.x,this.y,55,60);//bottom left
    ellipse(this.x,this.y,20,50)//right
    ellipse(this.x,this.y,35)//top left
    ellipse(this.x,this.y,20)//bottom
    ellipse(this.x,this.y,30)//far bottom left
    ellipse(this.x,this.y,25)
  }

 moveMoon(){
     this.y = this.y+ this.speed;
  }
}

class Planeta{

  constructor(x,y, speed){
        this.x = x;
        this.y = y;
        this.speed = speed;
  }

  draw(){
    push()
    translate(this.x,this.y)
    strokeWeight(0.0)
    ellipse(this.x,this.y,250,50)
    fill(8, 39, 89)
    ellipse(this.x,this.y,230,30)
    fill(224, 141, 65)
    ellipse(this.x,this.y,175)
    pop()
}

  movePlaneta(){
    this.y = this.y+ this.speed;
  }
}

class Planetb{

  constructor(x,y, speed){
        this.x = x;
        this.y = y;
        this.speed = speed;
      }

  draw(){
  push()
  translate(this.x,this.y)
  scale(.5)
  fill("lavender");
  ellipse(this.x,this.y,200);
  fill("purple");
  ellipse(this.x,this.y,40,30);
  ellipse(this.x,this.y,40,30);
  pop()
  }
  movePlanetb(){
    this.y = this.y+ this.speed;
  }
}

class Planetc{
  constructor(x,y, speed){
          this.x = x;
          this.y = y;
          this.speed = speed;
        }

        draw(){
          push()
          translate(this.x,this.y)
          scale(.75)
          fill("crimson");
          ellipse(this.x,this.y,200);
          fill("pink");
          ellipse(this.x,this.y,100,40);
          ellipse(this.x,this.y,90,30);
          pop()
        }
        movePlanetc(){
          this.y = this.y+ this.speed;
        }
      }

class Planetd{

  constructor(x,y, speed){
        this.x = x;
        this.y = y;
        this.speed = speed;
  }

  draw(){
  translate(this.x,this.y)
  push()
  scale(.35)
  fill("turquoise");
  ellipse(this.x,this.y,200);
  fill("blue");
  ellipse(this.x,this.y,50,60);
  ellipse(this.x,this.y,80,40);
  ellipse(this.x,this.y,50)
  pop()
  }
  movePlanetd(){
    this.y = this.y+ this.speed;
  }
}

class Planete{

  constructor(x,y, speed){
        this.x = x;
        this.y = y;
        this.speed = speed;
  }

  draw(){
  translate(this.x,this.y)
  push()
  scale(.25)
  fill("yellow");
  ellipse(this.x,this.y,200);
  fill("gold");
  ellipse(this.x,this.y,50,40);
  ellipse(this.x,this.y,40,100);
  ellipse(this.x,this.y,50)
  pop()
  }

  movePlanete(){
    this.y = this.y+ this.speed;
  }
}

class Planetf{
  constructor(x,y, speed){
        this.x = x;
        this.y = y;
        this.speed = speed;
  }

  draw(){
  push()
  translate(this.x,this.y)
  fill("orange");
  ellipse(this.x,this.y,200);
  fill("yellow");
  ellipse(this.x,this.y,50,60);
  ellipse(this.x,this.y,80,40);
  ellipse(this.x,this.y,50)
  pop()
  }
  movePlanetf(){
    this.y = this.y+ this.speed;
  }
}
