let dance;

function preload()
{
	dance = loadImage("dance-happy.gif");
}

function setup() 
{
	createCanvas(400, 400);
}

function draw()
{
image(dance, 0, 0);
}
