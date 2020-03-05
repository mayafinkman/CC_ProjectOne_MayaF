/* project notes
		- make multiple things grow - switch through multiple screens
		- sure, can make shapes bigger, but think about how to create growth in other ways
		- circles getting bigger to heartbeat? bruh
		- lines growing ? squiggly lines
		- i dont know yet but there will be more
		
		second sketch:
			- circles getting higher and smaller, 
			
		third:
			- feels like it gets taller with. background getting lighter

to make multiple sketches: make a counter to add to every time a squiggle is finished
*/
	let randHeight = 0; //how high the line goes, intialized to zero for purpose of becoming random when first begins
	let randWidth; //how wide the line moves
	let randX; //what x val the line goes to
	let x=0;
	let y=0;
	let widthCounter=0;
	let counter = 0; //for switching the screens
	let colorArr= [0,0,0];

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	frameRate(90);
	previousCount = 0;
}

function draw() {
	if(counter<=10){ //first drawing
			image1();	
	}

	else if(counter>10) //second drawing
		{
					image2();
		}	
}

function colorChange(colorArr){
	if (colorArr[2]<255)
	{
		colorArr[2]= colorArr[2]+1;
	}
	else if((colorArr[2]=255) && (colorArr[0]<255))
	{
		colorArr[0]=colorArr[0]+1;
	}
	else if ((colorArr[0]=255) && (colorArr[1]<255))
	{
		colorArr[1]=colorArr[1]+1;
	}
	//print(colorArr[1]);
	return colorArr;
	
	
}

function image1(){ //first sketch
	strokeWeight(10);
		colorArr=colorChange(colorArr); //function to change the color along a scale each time
		stroke(colorArr[0],colorArr[1],colorArr[2],100); //sets stroke to the new change color
		//fill(0);
		if(randHeight <= 0) //checking if the height is zero or less than, because that means it has reached the top so it draws a new one
			{
				randHeight = random(150,windowHeight-100);  
				randWidth = random(1, 30);
				randX= random(windowWidth-30); //this determines what x coord the squiggle is drawn on
				y=0; //resets y to zero 
				colorArr=[0,0,0]; //reseting the rgb color to 000 so it starts with black each time
				counter++; //increases counter after each drawing
			}
			else{
				randHeight--; //decrease the height each time so can keep track of where the height has been drawn, know when gets to zero
				y++; //increases y so that the proper amt can be subtracted from the windowHeight
			}
			if(widthCounter<20){ //if between 0 and 20 then. going forwards
				widthCounter++;
				x++;
			}
			else if(widthCounter>=20 && widthCounter<40){ //if between 20 and 40, goes backwards
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
function image2()
{
	
	
}
