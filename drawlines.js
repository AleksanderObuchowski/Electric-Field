function drawLines(length){
  var pos = createVector(0,0);
	var dist1 = createVector(0,0);
	var dist2 = createVector(0,0);
	var field1 = createVector(0,0);
	var field2 = createVector(0,0);
	var magField = createVector(0,0);
	var E1,E2l
	for(var i=0; i<2000; i++)
{
		

		pos.x=random(width);
		pos.y=random(height);
		dist1.x=pos.x-c1.x;
		dist1.y=pos.y-c1.y;
		E1=c1.v/(dist1.mag()*dist1.mag());
		field1.x=dist1.x*E1/dist1.mag();
		field1.y=dist1.y*E1/dist1.mag();


		dist2.x=pos.x-c2.x;
		dist2.y=pos.y-c2.y;
		E2=c2.v/(dist2.mag()*dist2.mag());
		field1.x=dist2.x*E2/dist2.mag();
		field1.y=dist2.y*E2/dist2.mag();


		magField.x=field1.x*field2.x
		magField.y=field1.y*field2.y
		

		var deltax=length*magField.x/magField.mag()
		var deltay=length*magField.y/magField.mag()

		stroke(0,70);
		arrow(x,y,x+deltax,y+deltay);


}