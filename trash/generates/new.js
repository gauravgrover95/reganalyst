
var cont = document.getElementById('cy');

var cy = cytoscape({

// ready: function() {
//   /33 33'#cont').cytoscapeNavigator();
// },

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
	{ // edge Rv2710(SigB).BCG0248(PckA)
  data: { id: 'Rv2710(SigB).BCG0248(PckA)', source: 'Rv2710(SigB)', target: 'BCG0248(PckA)' }
},
	{ // edge Rv2710(SigB).BCG1138c(GreA)
  data: { id: 'Rv2710(SigB).BCG1138c(GreA)', source: 'Rv2710(SigB)', target: 'BCG1138c(GreA)' }
},
	{ // edge Rv2710(SigB).BCG2716(SigA)
  data: { id: 'Rv2710(SigB).BCG2716(SigA)', source: 'Rv2710(SigB)', target: 'BCG2716(SigA)' }
},
	{ // edge Rv2710(SigB).BCG3090(Mmr)
  data: { id: 'Rv2710(SigB).BCG3090(Mmr)', source: 'Rv2710(SigB)', target: 'BCG3090(Mmr)' }
},
	{ // edge Rv2710(SigB).rrs(16S_rRNA)
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
  }
],

layout: {
	name: 'cose',
	// rows: 8
}
});

cy.panningEnabled(true);

cy.boxSelectionEnabled(true);

cy.autounselectify(true);

cy.navigator({});


cy.panzoom({});

