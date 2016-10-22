
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
  data: { id: 'Rv2710(SigB).BCG0248(PckA)', source: 'Rv2710(SigB)', target: 'BCG0248(PckA)' },
  classes: 'regulated-line'
},
	{// edge Rv2710(SigB).BCG1138c(GreA)
  data: { id: 'Rv2710(SigB).BCG1138c(GreA)', source: 'Rv2710(SigB)', target: 'BCG1138c(GreA)' },
  classes: 'regulated-line'
},
	{// edge Rv2710(SigB).BCG2716(SigA)
  data: { id: 'Rv2710(SigB).BCG2716(SigA)', source: 'Rv2710(SigB)', target: 'BCG2716(SigA)' },
  classes: 'regulated-line'
},
	{// edge Rv2710(SigB).BCG3090(Mmr)
  data: { id: 'Rv2710(SigB).BCG3090(Mmr)', source: 'Rv2710(SigB)', target: 'BCG3090(Mmr)' },
  classes: 'regulated-line'
},
	{// edge Rv2710(SigB).rrs(16S_rRNA)
  data: { id: 'Rv2710(SigB).rrs(16S_rRNA)', source: 'Rv2710(SigB)', target: 'rrs(16S_rRNA)' },
  classes: 'regulated-line'
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
  data: { id: 'Rv2703(SigA).Rv2710(SigB)', source: 'Rv2703(SigA)', target: 'Rv2710(SigB)' },
  classes: 'regulator-line'
},
{ // edge Rv0735(SigL).Rv2710(SigB)
  data: { id: 'Rv0735(SigL).Rv2710(SigB)', source: 'Rv0735(SigL)', target: 'Rv2710(SigB)' },
  classes: 'regulator-line'
},
{ // edge Rv1221(SigE).Rv2710(SigB)
  data: { id: 'Rv1221(SigE).Rv2710(SigB)', source: 'Rv1221(SigE)', target: 'Rv2710(SigB)' },
  classes: 'regulator-line'
},
{ // edge Rv3223c(SigH).Rv2710(SigB)
  data: { id: 'Rv3223c(SigH).Rv2710(SigB)', source: 'Rv3223c(SigH)', target: 'Rv2710(SigB)' },
  classes: 'regulator-line'
},
{ // edge Rv3286c(SigF).Rv2710(SigB)
  data: { id: 'Rv3286c(SigF).Rv2710(SigB)', source: 'Rv3286c(SigF)', target: 'Rv2710(SigB)' },
  classes: 'regulator-line'
},
{ // edge Rv2703(SigA).Rv2703(SigA)
  data: { id: 'Rv2703(SigA).Rv2703(SigA)', source: 'Rv2703(SigA)', target: 'Rv2703(SigA)' },
  classes: 'regulator-line'
},
{ // edge Rv0735(SigL).Rv0735(SigL)
  data: { id: 'Rv0735(SigL).Rv0735(SigL)', source: 'Rv0735(SigL)', target: 'Rv0735(SigL)' },
  classes: 'regulator-line'
},
{ // edge Rv3223c(SigH).Rv1221(SigE)
  data: { id: 'Rv3223c(SigH).Rv1221(SigE)', source: 'Rv3223c(SigH)', target: 'Rv1221(SigE)' },
  classes: 'regulator-line'
},
{ // edge Rv2703(SigA).Rv3223c(SigH)
  data: { id: 'Rv2703(SigA).Rv3223c(SigH)', source: 'Rv2703(SigA)', target: 'Rv3223c(SigH)' },
  classes: 'regulator-line'
},
{ // edge Rv0182c(SigG).Rv3223c(SigH)
  data: { id: 'Rv0182c(SigG).Rv3223c(SigH)', source: 'Rv0182c(SigG)', target: 'Rv3223c(SigH)' },
  classes: 'regulator-line'
},
{ // edge Rv3223c(SigH).Rv3223c(SigH)
  data: { id: 'Rv3223c(SigH).Rv3223c(SigH)', source: 'Rv3223c(SigH)', target: 'Rv3223c(SigH)' },
  classes: 'regulator-line'
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
    selector: '.hide-labels',
    style: {
      'content': '',
    }
  },
  {
    selector: '.regulated-line',
    style: {
      'line-color': '#64a8d6',
      'target-arrow-color': '#64a8d6',
    }
  },
  {
    selector: '.regulator-line',
    style: {
      'line-color': '#60d69d',
      'target-arrow-color': '#60d69d',
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

// Function to range colors green to yellow to red from 0 to 100
function GreenYellowRed(number) {
  number--; // working with 0-99 will be easier

  if (number < 50) {
    // green to yellow
    var r = Math.floor(255 * (number / 50));
    var g = 255;

  } else {
    // yellow to red
    var r = 255;
    var g = Math.floor(255 * ((50-number%50) / 50));
  }
  var b = 0;

  return r + ',' + g + ',' + b;
}

// Script to increase the size of every node in the graph proportional to the number of edges
var f = 25; // factor by which size should increase proportionally
cy.elements('node').forEach(function(ele) {
  // n is the number of edges connected to the current node
  var n = ele.neighbourhood('edge').length;
  n = Math.cbrt(n);
  // c is the neutralized factor n so that it could be used in GreenYellowRed function which ranges on
  // colors from range 0 to 100
  var c = n*20;
  ele.css({
    'height': n*f,
    'width': n*f, 
    'background-color': 'rgb(' + GreenYellowRed(c) + ')'
  });

});

// Program to show and hide labels of the nodes
cy.on('zoom', function() {
  if(cy.zoom() < 0.36) {
    cy.elements('node').addClass('hide-labels');
  } else {
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

