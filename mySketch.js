function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	let pointX;
	let pointY;
	let randHeight; //how high the line goes
	let randWidth; //how wide the line moves
	let randX; //what x val the line goes to
	frameRate(5);
}

function draw() {
	strokeWeight(5);
		randHeight = random(800);
		randWidth = random(1, 30);
		randX= random(windowWidth-30);
		for (let y=0; y<randHeight; y++){ //loop for height of line
			let x=0;
			//print(x);
			/*
			struggling to get the line to wave back and forth when drawing with points, how do i continue to let it draw up while going sideways,
			then go in the opposite direction?
			if(x==randWidth){
				for(let i=0; i<randWidth;i++)
				{
					point((x+randX),(windowHeight-y));
				}
			}
			else{
				for(let i=0; i<randWidth;i++)
				{
					point((randX-x),(windowHeight-y));
				}
			}
			//print(x);
			*/
			
		}
	}