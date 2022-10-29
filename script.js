// When the user scrolls the page, execute navTop() and scroll()
window.onscroll = function() {navTop(); scroll()};

// stick navbar to the top
const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop; // Get the offset position of the navbar
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navTop() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// back to top button
const topBtn = document.getElementById("topBtn");
// When the user scrolls down 400px from the top of the document, show the button
function scroll() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}
// back to top when click
const topFunction = () => {
 	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const changeBG = (e) => {
	let color = window.getComputedStyle(e).backgroundColor
	document.getElementById('pickBackground').style.background = color
}

const pickBG = (e) => {
	let color = window.getComputedStyle(e).backgroundColor
	document.getElementById('letter').style.background = color
	if (color === 'rgb(2, 49, 94)') {
		document.getElementById('letter').style.color = 'white'
	} else {
		document.getElementById('letter').style.color = 'black'
	}
}

const getText = () => {
	let text =  document.getElementById('inputbox').value;
	text = text.replaceAll('/n','<br>');
	document.getElementById('letterContent').innerHTML = text;
	console.log('work!',text);
}

const size = (size) => {
	let letter =  document.getElementById('letterContent');
	let fontSize = parseInt(window.getComputedStyle(letter).fontSize);
	if (size === 'down'){
		if (fontSize > 13) {
			letter.style.fontSize = (fontSize - 3) + 'px'
		}
	} else if (size === 'up'){
		if (fontSize < 40) {
			letter.style.fontSize = (fontSize + 3) + 'px'
		}
	}
}

// const generateLetter = () => {
// 	alert(document.getElementsByTagName('canvas')[0].getContext())
// }

// function myFunction(){
// 	const addH1 = document.createElement("h1")
// 	let inputValue = document.getElementById("input").value
// 	addH1.innerHTML = inputValue
// 	const div = document.getElementsByTagName("div")[0]
// 	div.appendChild(addH1)
// }

// function setBGgrey(element) {
// 	document.getElementsByTagName("body")[0].style.background = "grey"
// }

// function setBGwhite(element) {
// 	document.getElementsByTagName("body")[0].style.background = ""
// }

// function setBGcolor(color) {
// 	document.getElementsByTagName("body")[0].style.background = color
// }