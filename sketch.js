 
//INITIALIZING GRID
var cols = 100;
 var rows = 100;
var grid = new Array(cols);
for (var i = 0; i < cols; i++) {
  grid[i] = new Array(rows);
}
//INITIALIZING VARIABLES
var mode = 2
var canvas;
var charge1,charge2;
var Ew=0,x,y;
var check=false,anim=true, stat=false;
var Slider1;
var text1;
var text2;
var x,y,dx,dy,E1x,E1y,dxn,dyn,d2,E2,E2x,E2y,EEx,EEy,EE,deltax,deltay;
var c1,c2;
var lines= new Array(8);
var line1
var mul,mul2
//PARTICLE

function Particle(a,b) {

  this.a1=a;
  this.b1=b;
  this.pos = new Victor(a,b)
  this.vel = new Victor(0,0);
  this.acc = new Victor(0,0);
  this.maxSpeed = 3;
  this.force= new Victor(0,0);

  this.update =function() {
    this.vel=this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);

    this.pos.add(this.acc);

    
  }

  

  this.applyForce =function() {

  this.x =Math.floor(this.pos.x/(width/cols));
  this.y =Math.floor(this.pos.y/(height/rows));
  this.force= grid[this.x][this.y];

  this.acc=this.acc.copy(this.force.normalize().multiply(mul2))
//System.out.println(force);
  }

   this.show =function(){
    stroke(0);
    noStroke()
    fill(0);
    point(this.pos.x, this.pos.y);
 
		ellipse(this.pos.x, this.pos.y,3,3);
    //System.out.println("x: "+pos.x+"y: "+pos.y);
  }



 this.edges =function() {
    if (this.pos.x >= width) {
     this.vel.x=0;
     this.vel.y=0;
      //acc.setMag(0);
     this.pos.x=this.a1;
     this.pos.y=this.b1;

 
    }
    if (this.pos.x <= 0) {
      this.vel.x=0;
     this.vel.y=0;
      //acc.setMag(0);
     this.pos.x=this.a1;
     this.pos.y=this.b1;
 
 
    }

    if (this.pos.y >= height) {
      this.vel.x=0;
     this.vel.y=0;
      //acc.setMag(0);
      this.pos.x=this.a1;
     this.pos.y=this.b1;

      
    }
    if (this.pos.y <= 0) {
     this.vel.x=0;
     this.vel.y=0;
      //acc.setMag(0);
     this.pos.x=this.a1;
     this.pos.y=this.b1;

    
    }
    if(c2.c<0 && this.pos.x>c2.x-10 && this.pos.x<c2.x+10 && this.pos.y>c2.y-10 && this.pos.y<c2.y+10){
     this.vel.x=0;
     this.vel.y=0;
      //acc.setMag(0);
    this.pos.x=this.a1;
     this.pos.y=this.b1;
    //System.out.println("NO jest");


    }
  }
}









function vectorGrid(){
	print("Vector grid")
var x1=0;
for(var  i=width/cols/2;i<width;i+=width/cols){
  var y1=0;
  for(var  j=height/rows/2;j<height;j+=height/rows){
		 dx=i-c1.x;
		 dy=j-c1.y;
		 d1=sqrt(dx*dx+dy*dy);
		 E1=c1.v/(d1*d1);
		 E1x=dx*E1/d1;
		 E1y=dy*E1/d1;

		 dxn=i-c2.x;
		 dyn=j-c2.y;
		 d2=sqrt(dxn*dxn+dyn*dyn);
		 E2=c2.v/(d2*d2);
		 E2x=dxn*E2/d2;
		 E2y=dyn*E2/d2;

		 EEx=E1x+E2x;
		 EEy=E1y+E2y;
		 EE=sqrt(EEx*EEx+EEy*EEy);

		 deltax=15*EEx/EE;
		 deltay=15*EEy/EE;
   	 grid[x1][y1]= new Victor(1*deltax,1*deltay);
   	 //line(x,y,x+deltax, y + deltay)
     //print("col: "+x1+"row: "+y1+"value: " +grid[x1][y1]);
    //print(deltax)
    //print(deltay)
    y1++;
  }
  x1++;
}	




}


function arrow( x1,  y1,  x2,  y2) {
  line(x1, y1, x2, y2);
  push();
  translate(x2, y2);
  var a = atan2(x1-x2, y2-y1);
  rotate(a);
  line(0, 0, -5, -5);
  line(0, 0, 5, -5);
  pop();
} 




function drawLines(length){
	

	for(var i=0; i<5000; i++)
{
	

		x=random(width);
		var xf=floor(x/(width/cols));
		y=random(height);
		var yf =floor(y/(height/rows));

		stroke(0,70)
		line(x,y,x+grid[xf][yf].x, y + grid[xf][yf].y)


}


}
function drawGrains(length){
	

	for(var i=0; i<4000; i++)
{
	
		 x=noise(i)*width
		 y=noise(8000-i)*height
		 
		 
		 dx=x-c1.x;
		 dy=y-c1.y;
		 d1=sqrt(dx*dx+dy*dy);
		 E1=c1.v/(d1*d1);
		 E1x=dx*E1/d1;
		 E1y=dy*E1/d1;

		 dxn=x-c2.x;
		 dyn=y-c2.y;
		 d2=sqrt(dxn*dxn+dyn*dyn);
		 E2=c2.v/(d2*d2);
		 E2x=dxn*E2/d2;
		 E2y=dyn*E2/d2;

		 EEx=E1x+E2x;
		 EEy=E1y+E2y;
		 EE=sqrt(EEx*EEx+EEy*EEy);

		 deltax=length*EEx/EE;
		 deltay=length*EEy/EE;

		stroke(0,70);
		line(x-deltax/2,y-deltay/2,x+deltax/2,y+deltay/2)


}


}
function drawArrows(length){
	
	
	for(var i=0; i<1000; i+=30)
{
	for (var j=0;j<height;j+=30){

		x=i;
		y=j;
		 dx=x-c1.x;
		 dy=y-c1.y;
		 d1=sqrt(dx*dx+dy*dy);
		 E1=c1.v/(d1*d1);
		 E1x=dx*E1/d1;
		 E1y=dy*E1/d1;

		 dxn=x-c2.x;
		 dyn=y-c2.y;
		 d2=sqrt(dxn*dxn+dyn*dyn);
		 E2=c2.v/(d2*d2);
		 E2x=dxn*E2/d2;
		 E2y=dyn*E2/d2;

		 EEx=E1x+E2x;
		 EEy=E1y+E2y;
		 EE=sqrt(EEx*EEx+EEy*EEy);

		 deltax=length*EEx/EE;
		 deltay=length*EEy/EE;
    strokeWeight(2)
		stroke(0,70);
		arrow(x,y,x+deltax,y+deltay);


}
}

}

function Charge(x,y,v){
  this.x=x;
  this.y=y;
  this.v=v;
	this.moved=false;

  this.display =function(){
    fill(255);
    this.t="";
    if(this.v>0){
      fill(255,0,0,100);
      this.t="+";

    }
    else if (this.v<0){
      fill(0,0,255,100);
      this.t="-";

    }
    stroke(0);
    strokeWeight(1);
    ellipse(this.x,this.y,15,15);
    fill(0);
    textAlign(CENTER, CENTER);
    text(this.t,this.x+0.2,this.y-1.7);

}
  this.move =function(){
	  if(mouseX>this.x-7.5 && mouseX<this.x+7.5 && mouseY>this.y-7.5 && mouseY<this.y+7.5 && mouseIsPressed && !c1.moved && !c2.moved){
  	  this.moved=true;

	}
	  if(!mouseIsPressed && this.moved){
	  	
	  	this.x=floor(this.x/(width/cols))*(width/cols)+5;
	  	this.y=floor(this.y/(height/rows))*(height/rows)+3.5;
	  	vectorGrid()
	  	 c1points()
	  	 
  	  this.moved=false;
  	  drawing()
			
	}
	  if(this.moved && mouseIsPressed){
			//draw
			drawing()
			this.x=floor(mouseX/(width/cols))*(width/cols)+5;
	  	this.y=floor(mouseY/(height/rows))*(height/rows)+3.5;
	}

}



}
function drawing() {
if (mode==5){
		for(var i=0;i<width;i+=10){
			stroke(200);
		line(i,0,i,height);
		}
		for(var i=0; i<height;i+=7){
			line(0,i,width,i)
		}
	fill(220,1)
	rect(0,0,width,height)
}
		
    else{
    	background(220)
		for(var i=0;i<width;i+=10){
			stroke(200);
		line(i,0,i,height);
		}
		for(var i=0; i<height;i+=7){
			line(0,i,width,i)
		}
    }
		if((mode ==1 || mode==2) && (c1.moved==false && c2.moved==false)){
		drawLines(15);
		}
		if(mode ==3){
		  drawArrows(20);
		  
		}
		if(mode ==4){
		  drawGrains(15);
		  
		  
		}
		if(mode==5){
		for (var i=0;i<8;i++){
lines[i].applyForce();
lines[i].update();
lines[i].edges();
lines[i].show()
}
}
			
			
		
	c1.display();
	c2.display();
}

function c1points(){
		for (var i=0;i<8;i++){
		lines[i]= new Particle(c1.x+line1.x,c1.y+line1.y);
		line1.rotate(PI/4);
		print(line1.length())	
	
	
}
}
//BUTTONS


function fstatic() {
mode=1;
bstatic.style("background: rgba(0, 0, 0, 0.5);");
banimation.style("background: rgba(0, 0, 0, 0.2);");
barrows.style("background: rgba(0, 0, 0, 0.2);")
bgrains.style("background: rgba(0, 0, 0, 0.2);");
drawing()
  
}
function fanimation() {
mode=2;
bstatic.style("background: rgba(0, 0, 0, 0.2);");
banimation.style("background: rgba(0, 0, 0, 0.5); ");
barrows.style("background: rgba(0, 0, 0, 0.2);");
bgrains.style("background: rgba(0, 0, 0, 0.2);");
drawing()
  
}
function farrows() {
mode=3;
bstatic.style("background: rgba(0, 0, 0, 0.2);");
banimation.style("background: rgba(0, 0, 0, 0.2);");
barrows.style("background: rgba(0, 0, 0, 0.5);");
bgrains.style("background: rgba(0, 0, 0, 0.2);");
drawing()
}
function fgrains() {
mode=4;
bstatic.style("background: rgba(0, 0, 0, 0.2);;");
banimation.style("background: rgba(0, 0, 0, 0.2);");
barrows.style("background: rgba(0, 0, 0, 0.2);");
bgrains.style("background: rgba(0, 0, 0, 0.5);");
drawing()
}
function flines() {
mode=5;
bstatic.style("background: rgba(0, 0, 0, 0.2);;");
banimation.style("background: rgba(0, 0, 0, 0.2);");
barrows.style("background: rgba(0, 0, 0, 0.2);");
bgrains.style("background: rgba(0, 0, 0, 0.5);");
drawing()
}


function s1change(){

		vectorGrid()
		if (1){
			drawing()
		}
		if(mode==5){
	 	c1points()
}
}
function s2change(){
		
		vectorGrid()
		if (1){
			drawing()
		}
		if(mode==5){
	 	c1points()
}

}
function setup() {
  canvas = createCanvas(1000, 700);
  canvas.parent("canvas");
  canvas.id("sketch");

	//SILDER 1

  Slider1 = createSlider(-100, 100, 0);
	Slider1.parent("slider1");
  Slider1.mouseClicked(s1change);
  Slider1.size(490,10);
	tex1 = createP("charge 1: "+Slider1.value());
	tex1.parent("value1")


		//SILDER 2

  Slider2 = createSlider(-100, 100, 0);
	Slider2.parent("slider2");
  Slider2.mouseClicked(s2change);
  Slider2.size(490,10)
	tex2 = createP("charge 1: "+Slider2.value());
	tex2.parent("value2")
	//BUTTON STATIC
	bstatic = createButton('static');
	bstatic.parent("canvas");
	bstatic.id('static');
	bstatic.class('btn');
	bstatic.mouseClicked(fstatic)
	
		//BUTTON ANIMATION
  banimation = createButton('animation');
	banimation.parent("canvas");
	banimation.id('animation');
	banimation.class('btn');
	banimation.mouseClicked(fanimation)
  banimation.style("background: rgba(0, 0, 0, 0.5); ");
  
  		//BUTTON ARROWS
  barrows = createButton('arrows');
	barrows.parent("canvas");
	barrows.id('arrows');
	barrows.class('btn');
	barrows.mouseClicked(farrows)
	
	  		//BUTTON GRAINS
  bgrains = createButton('grains');
	bgrains.parent("canvas");
	bgrains.id('grains');
	bgrains.class('btn');
	bgrains.mouseClicked(fgrains);
	
			 //BUTTON LINES
	//blines = createButton('lines');
	//blines.parent("canvas");
	//blines.id('lines');
	//blines.class('btn');
	//blines.mouseClicked(flines);

  c1 = new Charge(100,height/3,0);
  c2 = new Charge(width-100,height/3,0);
vectorGrid()
//draw
	background(220);
  p1= new Particle(700,500);
	for(var i=0;i<width;i+=10){
	  stroke(200);
	line(i,0,i,height);
	line(0,i,width,i);
	}
	drawLines(15);
	 c1.display();
	 c2.display();

line1 =new Victor(c2.x-c1.x,c2.y-c1.y)
mul = new Victor(10,10)
mul2= new Victor(3,3)
line1.normalize();

line1.multiply(mul)

line1.rotate(PI/4);

for (var i=0;i<8;i++){
lines[i]= new Particle(c1.x+line1.x,c1.y+line1.y);
line1.rotate(PI/4);

}
	
	

}
function draw() {
    if(mode==2){
      drawing()
      
    }
  
  c1.v=Slider1.value();
  c2.v=Slider2.value();
  tex1.html(Slider1.value()+" Q")
  tex2.html(Slider2.value()+" Q")




strokeWeight(1);
fill(42,150);
c1.move();
c2.move();
if(mode==5 && c1.moved==false && c2.moved==false){
	drawing()

}




}
