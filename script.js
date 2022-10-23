function myFunction(){
	const addH1 = document.createElement("h1")
	addH1.innerHTML = 'Hi There!'
	const div = document.getElementsByTagName("div")[0]
	div.appendChild(addH1)
}