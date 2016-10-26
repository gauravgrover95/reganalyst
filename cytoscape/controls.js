
RegExp.escape = function(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|\s]/g, "\\$&");
};


var reset = function() {
	cy.reset();
}	


var png = function() {
var png64 = cy.png();
window.open(png64,'_blank');
// put the png data in an img tag
// $('#myimg').attr('src', png64);
}

var totalEdges = cy.edges().length;

// function to update the score
function updateScore(score) {
	var id = "#perturb";
	var lastScore = $(id).text();
	$(id).text(score);
	return lastScore;
}

function calculateScore() {
	var edgesLeft = cy.edges().length;
	var perc = edgesLeft/totalEdges*100;
	perc = perc.toFixed(2);
	return perc;
}


// function restoreScore(score) {
// 	var id = "#perturb";
// 	// id = "#" + id;
// 	var lastScore = $(id).text();
// 	$(id).text(score);
// 	return lastScore;
// }

// ur.action('updateScore', updateScore, restoreScore);

// function bound to undo button
function undo() {
	ur.undo();
}

// function bound to redo button
function redo() {
	ur.redo();
}

// function bound to undo button
function undoAll() {
	while(!ur.isUndoStackEmpty()) {
		ur.undo();
	}
}

// function bound to redo button
function redoAll() {
	while(!ur.isRedoStackEmpty()) {
		ur.redo();
	}
}


function captureNodes(input) {
	var id = $('#' + input).val();
	id = RegExp.escape(id);
	var selector = '#' + id;
	ele = cy.nodes(selector);
	return ele;
}

// function deleteLeaves(ele) {
// 	var eles = ele.neighborhood();
// 	eles.forEach(function(ele) {
// 		if(ele.connectedEdges().length == 1) ele.remove();
// 	});
// }

function deleteWithLeaves(ele) {
	var ele = captureNodes('delwl');
	var eles = ele.neighborhood();
	eles.forEach(function(ele) {
		if(ele.connectedEdges().length == 1) ur.do("deleteEles", ele);
	});
	ur.do("deleteEles", ele);
	$('#delwl').val('');
}


// function that canDo full undo and redo of delete with leaves

// function deleteWithLeaves(ele) {
// 	var ele = captureNodes('delwl');
// 	var eles = ele.neighborhood();
// 	var arr = []; // array maintained to restore the information corresponding to the node deleted
// 	eles.forEach(function(ele) {
// 		if(ele.connectedEdges().length == 1) arr.push(ele.remove());
// 	});
// 	arr.push(ele.remove());
// 	return arr;
// }



// function restoreWithLeaves(eles) {
// 	eles.forEach(function(ele) {
// 		ele.restore();
// 	});
// }

// Defining a √function to delete elements
function deleteEles(ele){
   var a = ele.remove();
   var b = calculateScore();
   var c = updateScore(b);
   return [a, c];
}

// defining a function to restore elements
function restoreEles(eles){
	var a = eles[0].restore();
	var c = updateScore(eles[1]);
	return a;
}

// Registering a redo-undo pair for deleting elements
ur.action("deleteEles", deleteEles, restoreEles); // register


function deleteNode() {
	var id = $('#del').val();
	id = RegExp.escape(id);
	var selector = '#' + id;
	ele = cy.nodes(selector);
	ur.do("deleteEles", ele);
	$('#del').val('');
}

// function restoreNode() {
// 	ele.restore();
// }

cy.on('tap', function(e) {
	if(e.cyTarget === cy) {
		var nodes = cy.nodes('.selected');
		nodes.forEach(function(ele) {
			ele.removeClass('selected');
		});
	}
});

cy.minZoom(0.07);
cy.maxZoom(5.0);

// var onTap()  = function(e) {
// 	console.log(e);
// }

// cy.on('zoom', function(e) {
// 	console.log(cy.zoom());
// });

cy.nodes().on('tap', function(e) {
	var id = e.cyTarget.id();
	id = RegExp.escape(id);
	var selector = '#' + id;
	var node = cy.elements(selector);
	// node.select();
	node.addClass('selected');
});

$("#search-button").click(animate);

function animate() {

	var id = $('#search-bar').val();
	var selector = '#' + RegExp.escape(id);

	// cy.elements(selector).animate({
	// 	style: {
	// 		backgroundColor: 'brown'
	// 	}}, {
	// 		duration: 1000
	// });

	cy.nodes(selector).addClass('selected');;


	cy.animate({
	  fit: { 
	  	eles: selector,
	  	padding: 340
	  }
	}, { duration: 700 });

	$('#search-bar').val('');
}

function hide() {
	cy.elements('node').forEach(function(ele) {
		if(!ele.isParent()) console.log('element is not a parent');
	});	
}
