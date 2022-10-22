//----------- Variables ------------
let color = ""
let img = ""
let name = "" 
let label = ""
let body = document.getElementById("body")
let container = document.getElementById("container")
let chooseMode = document.getElementById("choose-mode")
let modeName = document.getElementById("mode-name")
let modeImg = document.getElementById("mode-image")
let lightModeButton = document.getElementById("light-mode-btn")
let darkModeButton = document.getElementById("dark-mode-btn")

//----------- Light Mode ------------
function sublight() {
	color = "light"
	img = "light.png"
	name = "Light"
	label = "light"
				
	body.style.background = "#eeeeee"

    container.style.color = "black"
	container.style.background = "white"
	container.style.border = "2px solid blue"

	chooseMode.style.color = "black"

	lightModeButton.style.color = "blue"
	lightModeButton.style.border = "solid 2px blue"
	lightModeButton.style.background = "none"

	darkModeButton.style.color = "blue"
	darkModeButton.style.border = "solid 2px blue"
	darkModeButton.style.background = "none"

	modeName.textContent = name + " mode is ON"
	modeName.style.visibility = "visible"

	modeImg.innerHTML = "<img src=\"" + img + "\" width=\"100px\" height=\"100px\">"

	document.getElementById("footer").style.color = "black"
}


//----------- Dark Mode ------------
function subdark() {
    label = "dark"
    color = "dark"
    img = "dark.png"
    name = "Dark"
				
	body.style.background = "black"

	container.style.color = "white"
	container.style.background = "#181818"
	container.style.border = "2px solid blue"
	chooseMode.style.color = "white"

	lightModeButton.style.color = "white"
	lightModeButton.style.border = "solid 2px white"
	lightModeButton.style.background = "none"

	darkModeButton.style.color = "white"
	darkModeButton.style.border = "solid 2px white"
	darkModeButton.style.background = "none"

	modeName.textContent = name + " mode is ON"
	modeName.style.visibility = "visible"

	modeImg.innerHTML = "<img src=\"" + img + "\" width=\"100px\" height=\"100px\">"

	document.getElementById("footer").style.color = "white"
}

			
		