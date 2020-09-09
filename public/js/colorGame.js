var numsquares=6;
var colors=generaterandomcolor(numsquares);
var squares=document.querySelectorAll(".square");
var pickedcolor=pickcolor();
var colordisplay=document.getElementById("colordisplay");
var massage=document.querySelector("#message");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");


easybtn.addEventListener("click",function(){
easybtn.classList.add("selected");
hardbtn.classList.remove("selected");
numsquares=3;
colors=generaterandomcolor(numsquares);
pickedcolor=pickcolor();
colordisplay.textContent=pickedcolor;
for(var i=0;i<squares.length;i++){
	if(colors[i]){
		squares[i].style.background=colors[i];
	}
	else{
		squares[i].style.background="#232323";
	}
}

});

hardbtn.addEventListener("click",function(){
easybtn.classList.remove("selected");
hardbtn.classList.add("selected");
numsquares=6;
colors=generaterandomcolor(numsquares);
pickedcolor=pickcolor();
colordisplay.textContent=pickedcolor;
for(var i=0;i<squares.length;i++){
		squares[i].style.background=colors[i];
	}

});

reset.addEventListener("click",function(){

colors=generaterandomcolor(numsquares);
pickedcolor=pickcolor();
colordisplay.textContent=pickedcolor;
this.textContent="NEW COLORS"
for(var i=0;i<squares.length;i++){
	squares[i].style.background=colors[i];
}
h1.style.background="steelblue";
massage.textContent=" ";
});
colordisplay.textContent=pickedcolor;
for(var i=0;i<squares.length;i++)
{
	// add initial colors to squares
	squares[i].style.background=colors[i];

	// add click listeners to squares
	squares[i].addEventListener("click",function(){
		// grab color of clicked square
		var clickedcolor=this.style.background;
		// compare color to picked color
		if(clickedcolor==pickedcolor)
		{
		message.textContent="CORRECT";
		reset.textContent="Play Again?"
		changecolors(clickedcolor);	
		h1.style.background=clickedcolor;
		}
		else
		{
			this.style.background="#232323";
			massage.textContent="TRY AGAIN";
		}

	});
}

function changecolors(color){
// loop through all squares
for(var i=0;i<colors.length;i++){
// change each color to match given color
squares[i].style.background=color;
}
}

function pickcolor(){
	// will give the random number from 0 to 5
	var random=Math.floor(Math.random()*colors.length)
	return colors[random];
}

function generaterandomcolor(num){
	// making an array
	// add num random colors to an array
	// return that array
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomcolor());
		// get random colr and push into array

	}


	return arr;
}

function randomcolor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
