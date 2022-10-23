function myFunction(){
	const addH1 = document.createElement("h1")
	let inputValue = document.getElementById("input").value
	addH1.innerHTML = inputValue
	const div = document.getElementsByTagName("div")[0]
	div.appendChild(addH1)
}

function setBGgrey(element) {
	document.getElementsByTagName("body")[0].style.background = "grey"
}

function setBGwhite(element) {
	document.getElementsByTagName("body")[0].style.background = ""
}

function setBGcolor(color) {
	document.getElementsByTagName("body")[0].style.background = color
}