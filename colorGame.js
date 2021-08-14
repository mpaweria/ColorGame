var numColor = 9;
var colors = makeRandomColors(numColor);
var msg = document.querySelector("#msg")
var col = document.querySelectorAll(".circle");
var colorPicked = colorPick();
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.getElementById("easy");
var medium = document.getElementById("medium");
var hard = document.getElementById("hard");


document.getElementById("color").textContent = colorPicked;

easy.addEventListener("click", function(){
	easy.classList.add("selected");
	medium.classList.remove("selected");
	hard.classList.remove("selected");
	numColor = 3;
	colors = makeRandomColors(numColor);
	colorPicked = colorPick();
	document.getElementById("color").textContent = colorPicked;
	for(i=0; i<col.length; i++){
		if(colors[i])
		{
			col[i].style.backgroundColor = colors[i];
		}else{
			col[i].style.display = "none";
		}	
	}
	reset.textContent = "New Colors";
	msg.textContent = "";
	h1.style.backgroundColor = "steelblue";
});

medium.addEventListener("click", function(){
	medium.classList.add("selected");
	easy.classList.remove("selected");
	hard.classList.remove("selected");
	numColor = 6;
	colors = makeRandomColors(numColor);
	colorPicked = colorPick();
	document.getElementById("color").textContent = colorPicked;
	for(i=0; i<col.length; i++){
		if(colors[i])
		{
			col[i].style.backgroundColor = colors[i];
			col[i].style.display = "block";
		}else{
			col[i].style.display = "none";
		}	
	}
	reset.textContent = "New Colors";
	msg.textContent = "";
	h1.style.backgroundColor = "steelblue";
});

hard.addEventListener("click", function(){
	hard.classList.add("selected");
	medium.classList.remove("selected");
	easy.classList.remove("selected");
	numColor = 9;
	colors = makeRandomColors(numColor);
	colorPicked = colorPick();
	document.getElementById("color").textContent = colorPicked;
	for(i=0; i<col.length; i++)
	{
		col[i].style.backgroundColor = colors[i];
		col[i].style.display = "block";			
	}
	reset.textContent = "New Colors";
	msg.textContent = "";
	h1.style.backgroundColor = "steelblue";
});

for(var i=0; i<colors.length; i++)
{
	col[i].style.backgroundColor = colors[i];

	col[i].addEventListener("click", function(){
		var colorClicked = this.style.backgroundColor;

		if(colorClicked === colorPicked)
		{
			msg.textContent = "CORRECT ANSWER!";
			changeColor(colorClicked);
			h1.style.backgroundColor = colorClicked;
			reset.textContent = "Play Again?";
		}
		else{
			this.style.backgroundColor = "#232323";
			msg.textContent = "TRY AGAIN :(";
		}
	});
}

reset.addEventListener("click", function(){
	colors = makeRandomColors(numColor);
	colorPicked = colorPick();
	document.getElementById("color").textContent = colorPicked;
	for(i=0; i<col.length; i++){
		col[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	reset.textContent = "New Colors";
	msg.textContent = "";
})

function changeColor(color)
{
	for(var i=0; i<col.length; i++)
	{
		col[i].style.backgroundColor = color;
	}
}
function colorPick()
{
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function makeRandomColors(num)
{
	var arr = [];
	for(var i=0; i<num; i++)
	{
		arr.push(randomColors());
	}
	return arr;
}

function randomColors()
{
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}
