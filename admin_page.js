const default_video_thumbnail_path = './images/video_thumbnail.jpeg'

function populate(ident, signal, content) {
	if (signal == 'add') {
		document.getElementById(ident).innerHTML += content;
	} else if (signal == 'change') {
		document.getElementById(ident).innerHTML = content;
	} else {
		return; 

	}
}