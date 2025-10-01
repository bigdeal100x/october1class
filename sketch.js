let dance;

function preload()
{
	dance = loadImage("dance-happy.gif");
}

function setup() 
{
	createCanvas(800, 800);
}

function draw()
{
image(dance, 0, 0);
}
