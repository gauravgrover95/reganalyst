
var cont = document.getElementById('cy');

var cy = cytoscape({

// ready: function() {
//   $('#cont').cytoscapeNavigator();
// },

container: cont, // container to render in

elements: [ // list of graph elements to start with
{ // node a
  data: { id: 'a' }
},
{ // node b
  data: { id: 'b' }
},
{ // edge ab
  data: { id: 'a.b', source: 'a', target: 'b' }
},
{
  data: {id: 'b.a', source: 'b', target: 'a'}
},
],

style: [
  {
  	selector: 'node',
  	style: {
  		'background-color': 'red',
  		'label': 'data(id)'
  	}
  },
  {
  	selector: 'edge',
  	style: {
  		'width': 3,
  		'line-color': 'black',
  		'target-arrow-color': '#333',
  		'target-arrow-shape': 'triangle'
  	}
  }
],

layout: {
	name: 'grid',
	rows: 1
}
});

cy.panningEnabled(true);

cy.boxSelectionEnabled(true);

cy.autounselectify(true);

cy.navigator({});