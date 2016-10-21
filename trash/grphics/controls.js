var fit = function() {
	console.log('Hello World');
	cy.fit( cy.$('#a, #b') );
}
var reset = function() {
	cy.reset();
}	

var set = function() {
	var posx = document.getElementById('ex').value;
	var posy = document.getElementById('yi').value;
	var posx = Number(posx);
	var posy = Number(posy);
	var data = {
		'x': posx,
		'y': posy
	}
	console.log(data);
	cy.pan(data);
	console.log('pan function' + posx + ' ' + posy);
}

var up = function() {
	console.log('up');
	cy.panBy({
		x: 0,
		y: -10,
	});
}

var down = function() {
	console.log('down');
	cy.panBy({
		x: 0,
		y: 10,
	});
}

var left = function() {
	console.log('left');
	cy.panBy({
		x: -10,
		y: 0,
	});
}

var right = function() {
	console.log('right');
	cy.panBy({
		x: 10,
		y: 0,
	});
}

// var png = function() {
// 	var imgbox = getElementById('img');
// 	var png64 = cy.png()
// 	imgbox.write('<img src=' + png64 + '>')
// }
