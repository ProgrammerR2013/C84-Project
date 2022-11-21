canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

img_width = 1000;
img_height = 500;

var img_image;

img_x = 0;
img_y = 0;

function add() {
	img_imgTag = new Image(); 
	img_imgTag.onload = uploadimg; 
	img_imgTag.src = img_image; 
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	console.log("In my keydown")
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		{
			alphabetkey();
			document.getElementById("d1").innerHTML = "You pressed Alphabet key";
			console.log("Alphabet Key")
		}
		else if(keyPressed >= 48 && keyPressed <= 57)
		{
			numberkey();
			document.getElementById("d1").innerHTML = "You pressed Number key";
			console.log("Number key")
		}
		else if(keyPressed >= 37 && keyPressed <= 40)
		{
			arrowkey();
			document.getElementById("d1").innerHTML = "You pressed Arrow key";
			console.log("Arrow key")
		}
		else if(keyPressed == 17 || keyPressed == 18 || keyPressed == 27)
		{
			specialkey();
			document.getElementById("d1").innerHTML = "You pressed Special key";
			console.log("Special key")
		}
		else{
			otherkey()
		}

		
		
		
}

function alphabetkey()
{
	console.log("In alphabet key")
	img_image = "Alpkey.png";
	add();
	uploadImage();

}
function numberkey()
{
	console.log("In number key");
	img_image = "numkey.png";
	add();
	uploadImage();	
}
function arrowkey()
{
	console.log("In arrow key");
	img_image = "Arrkey.png";
	add();
	uploadImage();	
}
function specialkey()
{
	console.log("In special key");
	img_image = "spkey.png";
	add();
	uploadImage();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
