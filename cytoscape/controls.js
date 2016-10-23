
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



// function to update the score
function updateScore(id, score) {
	id = "#" + id;
	$(id).text(score + "%");
}

// function bound to undo button
function undo() {
	ur.undo();
}

// function bound to redo button
function redo() {
	ur.redo();
}


// Defining a √function to delete elements
function deleteEles(eles){
   return eles.remove();
}

// defining a function to restore elements
function restoreEles(eles){
	return eles.restore();
}

// Registering a redo-undo pair for deleting elements
ur.action("deleteEles", deleteEles, restoreEles); // register


var totalEdges = cy.edges().length;

function deleteNode() {
	var id = $('#del').val();
	id = RegExp.escape(id);
	var selector = '#' + id;
	// ele = cy.nodes(selector).remove();
	ele = cy.nodes(selector);
	ur.do("deleteEles", ele);

	var edgesLeft = cy.edges().length;

	var perc = edgesLeft/totalEdges*100;
	perc = perc.toFixed(2);
	console.log(perc);
	updateScore('perturb', perc);
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

}

function hide() {
	cy.elements('node').forEach(function(ele) {
		if(!ele.isParent()) console.log('element is not a parent');
	});	
}
