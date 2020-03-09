/* project notes

Maya Finkman
Creative Coding: Project One
		IDEAS:
		- make multiple things grow - switch through multiple screens
		- sure, can make shapes bigger, but think about how to create growth in other ways
		- circles getting bigger to heartbeat? 
		- lines growing ? squiggly lines
		- i dont know yet but there will be more
		
		Sketch one:
		- represent how each of us grow individually, in our own space, on our own time, to our own extent
		- sometimes can coincide with others, alongside others, or just on our own
		
		Sketch two:
		- represent how we grow on our own paths - no one does exactly the same thing
		
		Sketch three:
		- represent how we are constantly growing and changing, adapting to our surroundings
		
		Sketch four: 
		- represents how it takes time, can be uneven, looks different each time, but we all eventually grow into who we are supposed to be, 
			our full and complete, yet individual, selves
		-piece by piece we become who we are
			
			ADJECTIVE: growing
			- more specifically, looking at the way we as humans grow in our lives
		
*/
	//sketch one variables
	let randHeight = 0; //how high the line goes, intialized to zero for purpose of becoming random when first begins
	let randWidth; //how wide the line moves
	let randX; //what x val the line goes to
	let x=0;
	let y=0;
	let widthCounter=0;
	let counter = 0; //for switching the screens
	let colorArr= [20,20,20];

//sketch two variables
	let img2Circles = [];
	let img2CirclesR = []; //same but in opposite direction
	let img2CirclesU = []; //same but goes in the up direction

	let circleCount = 0; //variable counting each circle that has been drawn
	let coneCount = 0; //variable counting each circle cone that has been drawn

//sketch three variables
let triCount = 0;

//sketch 4 variables
let growCount = 0;
let numOfTri = 0;
let img4Triangles = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(200);
	frameRate(200);
	previousCount = 0;
	
	//set up img2Circles with circleOb objects
	for (let i = 0; i < 25; i++) {
		let r = 1; //indicates the Left moving one
		img2Circles[i] = new CircleOb(i,r);
	}
	for (let i = 0; i < 25; i++) {
		let r = 2; //indicates the right moving one
		img2CirclesR[i] = new CircleOb(i,r);
	}
	for (let i = 0; i < 25; i++) {
		let r = 3; //indicates the up moving one
		img2CirclesU[i] = new CircleOb(i,r);
	}
	
	
}

function draw() {
	//set up img4Triangles with thinTriangle objects, needs to be done in draw to work
	for (let i = 0; i < 25; i++) {
		img4Triangles[i] = new thinTriangle();
	}
	if(counter<10){ //first drawing
		frameRate(200);	
		image1();	
	}
	else if(counter==10){ //reset for second drawing
		background(255);
		counter++;
	}
	
	else if(counter>10 && counter<85){ //second drawing
		frameRate(10);
		if (coneCount<25){	
			image2(img2Circles);
			coneCount++;
		}
		else if (coneCount>=25 && coneCount<50){ //second drawing right
			image2(img2CirclesR);
			coneCount++;
		}
		else if (coneCount>=50 && coneCount<75){//second drawing up
			image2(img2CirclesU);
			coneCount++;
		}
		counter++;
	}
	else if(counter==85){//reset for third drawing
		background(255);
		counter++;
	}
	else if(counter>85 && counter<125){ //third drawing
		orange = new TriangleOb();//creating new object

		applyMatrix();
		if(triCount<40){
			orange.grow(triCount); //grows larger because triCount is increasing each time
			angleMode(DEGREES);
			translate (windowWidth/2, windowHeight/2); //making the rotation center the center of the screen
			rotate(90*triCount); //rotate each time more, how it over comes the resetting of the matrix bc rotation is still increasing
			orange.display();
		}
		triCount++;
		resetMatrix();
		counter++;
	}
	else if(counter==125){ //resetting the screen for sketch four
		frameRate(15);
		background('#76C3E8');
		counter++;
	}
	else if(counter>125 && counter<280){ //sketch four
	if(numOfTri<23){
		sketch4(img4Triangles[numOfTri]);
		}
		counter++;
		}
	else{
		counter=0;
		background(200);
	}
}

//function to change the color of the points of the first sketch
function colorChange(colorArr){ 
	//start with blue increase
	if (colorArr[2]<255)
	{
		colorArr[2]= colorArr[2]+1;
	}
	//move to increase in red
	else if((colorArr[2]=255) && (colorArr[0]<255))
	{
		colorArr[0]=colorArr[0]+1;
	}
	//increase green last
	else if ((colorArr[0]=255) && (colorArr[1]<255))
	{
		colorArr[1]=colorArr[1]+1;
	}
	//print(colorArr[1]);
	return colorArr;
	
	
}

function image1(){ //first sketch
	strokeWeight(20);
		colorArr=colorChange(colorArr); //function to change the color along a scale each time
		stroke(colorArr[0],colorArr[1],colorArr[2],100); //sets stroke to the new change color
		//fill(0);
		if(randHeight <= 0) //checking if the height is zero or less than, because that means it has reached the top so it draws a new one
			{
				randHeight = random(150,windowHeight-100);  
				randWidth = random(1, 30);
				randX= random(windowWidth-30); //this determines what x coord the squiggle is drawn on
				y=0; //resets y to zero 
				colorArr=[20,20,20]; //reseting the rgb color to 000 so it starts with black each time
				counter++; //increases counter after each drawing
			}
			else{
				randHeight--; //decrease the height each time so can keep track of where the height has been drawn, know when gets to zero
				y++; //increases y so that the proper amt can be subtracted from the windowHeight
			}
			if(widthCounter<40){ //if between 0 and 20 then. going forwards
				widthCounter++;
				x++;
			}
			else if(widthCounter>=40 && widthCounter<80){ //if between 20 and 40, goes backwards
				widthCounter++;
				x--;
			}
		else{
			widthCounter = 0;
			x=0;
		}
			/*print("x is: " +  x  + " counter is: " + counter);
			print("y is: " +  y  + " randHeight is: " + randHeight);*/
			point((randX+x),(windowHeight-y)); //draw point
		}

function image2(arr) {
	if(circleCount<25){
		arr[circleCount].display(); 
		circleCount++;
	}
	else if (circleCount>=25){
		circleCount=0;
	}
}

class CircleOb {
	//want it to move in diff directions depending on x pos
	//want it to grow in size each time

	constructor(i,r) {
		//increase x position of each object
		if(r==(1)){
			this.xPos = (windowWidth/2) + (pow(1.4,i));
			//increase y position of each object
			this.yPos = (windowHeight - (windowHeight / 20)) - (i*20);
		}
		else if (r==2){
			this.xPos = (windowWidth/2) - (pow(1.4,i) );
			//increase y position of each object
			this.yPos = (windowHeight - (windowHeight / 20)) - (i*20);
		}
		else if (r==3){
			this.xPos = (windowWidth/2);
			//increase y position of each object
			this.yPos = (windowHeight - (windowHeight / 20)) - (20*(i+1));
			//print(this.yPos);
		}

		//print(this.xPos);

		//increase size of each object
		this.size = 20 + (i*15.5);
	}

	display() {
		strokeWeight(3);
		stroke(232, 51, 90);
		fill(232, 51, 90, 50);
		circle(this.xPos, this.yPos, this.size);
	}

}

class TriangleOb{ //third sketch class
	constructor(){
	this.x1 = 0;
	this.x2 = 15;
	this.x3 = -15;
	this.y1 = 13;
	this.y2 = -13;
	this.y3 = -13;
		
	}
	
	grow(x){
		this.x1 = this.x1;
		this.x2 = this.x2 - (x*20);
		this.x3 = this.x3 + (x*20);
		this.y1 = this.y1 - (x*20);
		this.y2 = this.y2 + (x*20);
		this.y3 = this.y3 + (x*20);
	}
	display(){
		strokeWeight(4);
		stroke(random(100,200), random(100,200), random(200,255));
		fill(150, 25);
		triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
		
	}
}

function sketch4(obj){
	if(growCount<5){
		applyMatrix();
		angleMode(DEGREES);
		translate(windowWidth/2, windowHeight/2);
		rotate(47*numOfTri);
		obj.grow(growCount);
		obj.display();
		resetMatrix();
		growCount++;
	}
	else{
		growCount=0;
		//print(growCount);
		numOfTri++;
	}
	
}
class thinTriangle{
	
	constructor(){
	this.x1 = 0;
	this.x2 = 10;
	this.x3 = -10;
	this.y1 = 0;
	this.y2 = 40;
	this.y3 = 40;
		
	}
	
	grow(i){
		this.x2 = this.x2 *(2*i);
		this.x3 = this.x3 /(2*i);
		this.y2 = this.y2 *(2*i);
		this.y3 = this.y3 *(2*i);
	}

	display(){
		strokeWeight(4);
		stroke(random(100,200), random(100,200), random(200,255));
		fill(150, 25);
		triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
		
	}
}


