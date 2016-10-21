
var cont = document.getElementById('cy');

var cy = cytoscape({

container: cont, // container to render in

elements: [ // list of graph elements to start with
{ // node Rv2710(SigB)
  data: { id: 'Rv2710(SigB)' }
},
{ // node BCG0248(PckA)
  data: { id: 'BCG0248(PckA)' }
},
{ // node BCG1138c(GreA)
  data: { id: 'BCG1138c(GreA)' }
},
{ // node BCG2716(SigA)
  data: { id: 'BCG2716(SigA)' }
},
{ // node BCG3090(Mmr)
  data: { id: 'BCG3090(Mmr)' }
},
{ // node rrs(16S_rRNA)
  data: { id: 'rrs(16S_rRNA)' }
},
	{// edge Rv2710(SigB).BCG0248(PckA)
  data: { id: 'Rv2710(SigB).BCG0248(PckA)', source: 'Rv2710(SigB)', target: 'BCG0248(PckA)' }
},
	{// edge Rv2710(SigB).BCG1138c(GreA)
  data: { id: 'Rv2710(SigB).BCG1138c(GreA)', source: 'Rv2710(SigB)', target: 'BCG1138c(GreA)' }
},
	{// edge Rv2710(SigB).BCG2716(SigA)
  data: { id: 'Rv2710(SigB).BCG2716(SigA)', source: 'Rv2710(SigB)', target: 'BCG2716(SigA)' }
},
	{// edge Rv2710(SigB).BCG3090(Mmr)
  data: { id: 'Rv2710(SigB).BCG3090(Mmr)', source: 'Rv2710(SigB)', target: 'BCG3090(Mmr)' }
},
	{// edge Rv2710(SigB).rrs(16S_rRNA)
  data: { id: 'Rv2710(SigB).rrs(16S_rRNA)', source: 'Rv2710(SigB)', target: 'rrs(16S_rRNA)' }
},
{ // node Rv2710(SigB)
  data: { id: 'Rv2710(SigB)' }
},
{ // node Rv2703(SigA)
  data: { id: 'Rv2703(SigA)' }
},
{ // node Rv0735(SigL)
  data: { id: 'Rv0735(SigL)' }
},
{ // node Rv1221(SigE)
  data: { id: 'Rv1221(SigE)' }
},
{ // node Rv3223c(SigH)
  data: { id: 'Rv3223c(SigH)' }
},
{ // node Rv3286c(SigF)
  data: { id: 'Rv3286c(SigF)' }
},
{ // node Rv0182c(SigG)
  data: { id: 'Rv0182c(SigG)' }
},
{ // edge Rv2703(SigA).Rv2710(SigB)
  data: { id: 'Rv2703(SigA).Rv2710(SigB)', source: 'Rv2703(SigA)', target: 'Rv2710(SigB)' }
},
{ // edge Rv0735(SigL).Rv2710(SigB)
  data: { id: 'Rv0735(SigL).Rv2710(SigB)', source: 'Rv0735(SigL)', target: 'Rv2710(SigB)' }
},
{ // edge Rv1221(SigE).Rv2710(SigB)
  data: { id: 'Rv1221(SigE).Rv2710(SigB)', source: 'Rv1221(SigE)', target: 'Rv2710(SigB)' }
},
{ // edge Rv3223c(SigH).Rv2710(SigB)
  data: { id: 'Rv3223c(SigH).Rv2710(SigB)', source: 'Rv3223c(SigH)', target: 'Rv2710(SigB)' }
},
{ // edge Rv3286c(SigF).Rv2710(SigB)
  data: { id: 'Rv3286c(SigF).Rv2710(SigB)', source: 'Rv3286c(SigF)', target: 'Rv2710(SigB)' }
},
{ // edge Rv2703(SigA).Rv2703(SigA)
  data: { id: 'Rv2703(SigA).Rv2703(SigA)', source: 'Rv2703(SigA)', target: 'Rv2703(SigA)' }
},
{ // edge Rv0735(SigL).Rv0735(SigL)
  data: { id: 'Rv0735(SigL).Rv0735(SigL)', source: 'Rv0735(SigL)', target: 'Rv0735(SigL)' }
},
{ // edge Rv3223c(SigH).Rv1221(SigE)
  data: { id: 'Rv3223c(SigH).Rv1221(SigE)', source: 'Rv3223c(SigH)', target: 'Rv1221(SigE)' }
},
{ // edge Rv2703(SigA).Rv3223c(SigH)
  data: { id: 'Rv2703(SigA).Rv3223c(SigH)', source: 'Rv2703(SigA)', target: 'Rv3223c(SigH)' }
},
{ // edge Rv0182c(SigG).Rv3223c(SigH)
  data: { id: 'Rv0182c(SigG).Rv3223c(SigH)', source: 'Rv0182c(SigG)', target: 'Rv3223c(SigH)' }
},
{ // edge Rv3223c(SigH).Rv3223c(SigH)
  data: { id: 'Rv3223c(SigH).Rv3223c(SigH)', source: 'Rv3223c(SigH)', target: 'Rv3223c(SigH)' }
},
],

style: [
  {
  	selector: 'node',
  	style: {
  		'background-color': '#10b578',
  		'label': 'data(id)'
  	}
  },
  {
  	selector: 'edge',
  	style: {
  		'width': 3,
  		'line-color': '#ccc',
  		'target-arrow-color': '#ccc',
  		'target-arrow-shape': 'triangle'
  	}
  },
  {
    selector: '.red',
    style: {
      'background-color': 'red',
    }
  },
  {
    selector: '.hide-labels',
    style: {
      'content': '',
    }
  },
],

layout: {
	name: 'cose',
	// rows: 8
}
});

cy.panningEnabled(true);

cy.boxSelectionEnabled(true);

cy.autounselectify(true);


// Script to increase the size of every node in the graph proportional to the number of edges
var f = 25; // factor by which size should increase proportionally
cy.elements('node').forEach(function(ele) {
  var n = ele.neighbourhood('edge').length;
  n = Math.cbrt(n);
  ele.css({
    'height': n*f,
    'width': n*f 
  });
});

// Program to show and hide labels of the nodes
cy.on('zoom', function() {
  console.log(cy.zoom());
  if(cy.zoom() < 0.36) {
    console.log('hide all labels');
    // cy.elements('node').addClass('red');
    cy.elements('node').addClass('hide-labels');
  } else {
    // cy.elements('node').removeClass('red');
    cy.elements('node').removeClass('hide-labels');
  }
});


var defaults = {
    container: ".cytoscape-navigator" // can be a HTML or jQuery element or jQuery selector
  , viewLiveFramerate: 0 // set false to update graph pan only on drag end; set 0 to do it instantly; set a number (frames per second) to update not more than N times per second
  , thumbnailEventFramerate: 30 // max thumbnail's updates per second triggered by graph updates
  , thumbnailLiveFramerate: false // max thumbnail's updates per second. Set false to disable
  , dblClickDelay: 200 // milliseconds
  , removeCustomContainer: false // destroy the container specified by user on plugin destroy
  , rerenderDelay: 100 // ms to throttle rerender updates to the panzoom for performance
};

var nav = cy.navigator( defaults ); // get navigator instance, nav

cy.panzoom({});

