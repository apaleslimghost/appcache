setInterval(function() {
	document.querySelector('#date').innerHTML = new Date();
	document.querySelector('#path').innerHTML = location.pathname;
}, 200);
