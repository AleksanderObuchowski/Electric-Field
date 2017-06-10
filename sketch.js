

function drawLines(length){
	for(var i=0; i<10000; i++)
{
		var x,y;

		x=random(width);
		y=random(height);
		var dx=x-c1.x;
		var dy=y-c1.y;
		var d1=sqrt(dx*dx+dy*dy);
		var E1=c1.v/(d1*d1);
		var E1x=dx*E1/d1;
		var E1y=dy*E1/d1;

		var dxn=x-c2.x;
		var dyn=y-c2.y;
		var d2=sqrt(dxn*dxn+dyn*dyn);
		var E2=c2.v/(d2*d2);
		var E2x=dxn*E2/d2;
		var E2y=dyn*E2/d2;

		var EEx=E1x+E2x;
		var EEy=E1y+E2y;
		var EE=sqrt(EEx*EEx+EEy*EEy);

		var deltax=length*EEx/EE;
		var deltay=length*EEy/EE;

		stroke(0,70);
		line(x,y,x+deltax,y+deltay);


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
		drawLines(15);

	c1.display();
	c2.display();
}
function fstatic() {
mode=1;
bstatic.style("background:#cccacc;");
banimation.style("background: #a3a3a3;");

}
function fanimation() {
mode=2;
bstatic.style("background: #a3a3a3;;");
banimation.style("background:#cccacc; ");

}
var mode = 2
var canvas;
var charge1,charge2;
var Ew=0,x,y;
var check=false,anim=true, stat=false;
var Slider1;
var text1;
var text2;

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
