
function changeC(ident, val) {
	//Color-changing function
	document.getElementById(ident).style.color = val;
}

function changeBgC(ident, val) {
	//Background-color-changing function
	document.getElementById(ident).style.backgroundColor = val;
}


function populate(ident, signal, content) {
	if (signal == 'add') {
		document.getElementById(ident).innerHTML += content;
	} else if (signal == 'change') {
		document.getElementById(ident).innerHTML = content;
	} else {
		return; 

	}
}

function dePopulate(ident, signal, content) {
	if (signal == 'one') {
		document.getElementById(ident).innerHTML -= content;
	} else if (signal == 'all') {
		document.getElementById(ident).innerHTML = '';
	} else {
		return; 
	}
}

function goHome() {
	window.open("index.html", "_self");
}

function setImageSrc(id, src) {
    document.getElementById(id).src = src;
}