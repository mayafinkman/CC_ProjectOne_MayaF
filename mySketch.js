/* project notes
		- make multiple things grow - switch through multiple screens
		- sure, can make shapes bigger, but think about how to create growth in other ways
		- circles getting bigger to heartbeat? bruh
		- lines growing ? squiggly lines
		- i dont know yet but there will be more

to make multiple sketches: make a counter to add to every time a squiggle is finished
*/
	let randHeight = 0; //how high the line goes, intialized to zero for purpose of becoming random when first begins
	let randWidth; //how wide the line moves
	let randX; //what x val the line goes to
	let x=0;
	let y=0;
	let counter=0;
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	let pointX;
	let pointY;
	previousCount = 0;
}

function draw() {
	strokeWeight(5);
			
			/*
			use previous count
			
			previous count is 0, set it to random numbers again
			
			if not, draw again with one less this time
			
			*/
	
		if(randHeight <= 0)
		{
			randHeight = random(0,500);
			randWidth = random(1, 30);
			randX= random(windowWidth-30);
			y=0;
		}
		else{
			randHeight--;
			y++;
		}
		if(counter<10){
			counter++;
			x++;
		}
		else if(counter>=10 && counter<20){
			counter++;
			x--;
		}
	else{
		counter = 0;
		x=0;
	}
		print("x is: " +  x  + " counter is: " + counter);
		print("y is: " +  y  + " randHeight is: " + randHeight);
		point((randX+x),(windowHeight-y));
	}

