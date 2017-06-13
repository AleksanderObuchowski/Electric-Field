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
	

	for(var i=0; i<4000; i++)
{
	

		x=random(width);
		y=random(height);
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
		line(x,y,x+deltax,y+deltay)


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
		line(x,y,x+deltax,y+deltay)


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
	  if(mouseX>this.x-7.5 && mouseX<this.x+7.5 && mouseY>this.y-7.5 && mouseY<this.y+7.5 && mouseIsPressed){
  	  this.moved=true;

	}
	  if(!mouseIsPressed && this.moved){
  	  this.moved=false;

	}
	  if(this.moved){
			//draw
			drawing()
			this.x=mouseX;
			this.y=mouseY;
	}

}



}
function drawing() {
	//draw
		background(220);

		for(var i=0;i<width;i+=10){
			stroke(200);
		line(i,0,i,height);
		line(0,i,width,i);
		}
		if(mode ==1 || mode==2){
		drawLines(15);
		}
		if(mode ==3){
		  drawArrows(15);
		  
		}
		if(mode ==4){
		  drawGrains(35);
		  
		  
		}
	c1.display();
	c2.display();
}
function fstatic() {
mode=1;
bstatic.style("background:#cccacc;");
banimation.style("background: #a3a3a3;");
barrows.style("background:#a3a3a3;")
bgrains.style("background:#a3a3a3;");
drawing()
  
}
function fanimation() {
mode=2;
bstatic.style("background: #a3a3a3;");
banimation.style("background:#cccacc; ");
barrows.style("background:#a3a3a3;");
bgrains.style("background:#a3a3a3;");
drawing()
  
}
function farrows() {
mode=3;
bstatic.style("background: #a3a3a3;;");
banimation.style("background:#a3a3a3; ");
barrows.style("background:#cccacc;");
bgrains.style("background:#a3a3a3;");
drawing()
}
function fgrains() {
mode=4;
bstatic.style("background: #a3a3a3;;");
banimation.style("background:#a3a3a3; ");
barrows.style("background:#a3a3a3;");
bgrains.style("background:#cccacc;");
drawing()
}
var mode = 2
var canvas;
var charge1,charge2;
var Ew=0,x,y;
var check=false,anim=true, stat=false;
var Slider1;
var text1;
var text2;
var x,y,dx,dy,E1x,E1y,dxn,dyn,d2,E2,E2x,E2y,EEx,EEy,EE,deltax,deltay;
function setup() {
  canvas = createCanvas(1000, 700);
  canvas.parent("canvas");

	//SILDER 1

  Slider1 = createSlider(-100, 100, 0);
	Slider1.parent("slider1");
  Slider1.mouseClicked(drawing);
  Slider1.size(490,10);
	tex1 = createP("charge 1: "+Slider1.value());
	tex1.parent("value1")

		//SILDER 2

  Slider2 = createSlider(-100, 100, 0);
	Slider2.parent("slider2");
  Slider2.mouseClicked(drawing);
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
  banimation.style("background:#cccacc; ");
  
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
  

  c1 = new Charge(100,height/3,0);
  c2 = new Charge(width-100,height/3,0);

//draw
	background(220);

	for(var i=0;i<width;i+=10){
	  stroke(200);
	line(i,0,i,height);
	line(0,i,width,i);
	}
	drawLines(15);
	 c1.display();
	 c2.display();
}

function draw() {
    if(mode==2){
      drawing()
      
    }
  
  c1.v=Slider1.value();
  c2.v=Slider2.value();
  tex1.html(Slider1.value()+" Q")
  tex2.html(Slider2.value()+" Q")

frameRate(20);


strokeWeight(1);
fill(42,150);





c1.move();
c2.move();


}
