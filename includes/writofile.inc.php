<?php


include "./includes/colors.inc.php";

$myfile = fopen("./cytoscape/new.js", "w") or die("Unable to open file!");
$txt = <<<EOD

var cont = document.getElementById('cy');

var cy = cytoscape({

container: cont, // container to render in

elements: [ // list of graph elements to start with

EOD;


/////////////////////////////////////////////////
// ** For Output 1
////////////////////////////////////////////////

// code to include the nodes
foreach($output["nodes"] as $node) {

$txt .= "{ // node $node
  data: { id: '$node' },
  classes: 'regulated'
},
";
	
}


// code to include the edges
foreach($output["edges"] as $key => $value) {
	if (is_array($value) || is_object($value)){
		foreach($value as $val) {
		$txt .= "	{// edge $key.$val
  data: { id: '$key.$val', source: '$key', target: '$val' },
  classes: 'regulated-line'
},
";
		}
	}
}



/////////////////////////////////////////////////
// ** For Output 2
////////////////////////////////////////////////

// code to include the nodes
foreach($output2["nodes"] as $node) {

$txt .= "{ // node $node
  data: { id: '$node' },
  classes: 'regulator'
},
";
  
}


// code to include the edges
foreach($output2["edges"] as $key => $value) {

  if (is_array($value) || is_object($value)){
    foreach($value as $val) {
    $txt .= "{ // edge $val.$key
  data: { id: '$val.$key', source: '$val', target: '$key' },
  classes: 'regulator-line'
},
";
    }
  }

}





$txt .= <<<EOD
],

style: [
  {
    selector: 'node',
    style: {
      'background-color': '#935116',
      'label': 'data(id)'
    }
  },
  {
    selector: 'edge',
    style: {
      'width': 4,
      'line-color': '#212F3D',
      'target-arrow-color': '#212F3D',
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
      'line-color': '#AEB6BF',
      'target-arrow-color': '#AEB6BF',
    }
  },
  {
    selector: '.regulator-line',
    style: {
      'line-color': '#AEB6BF',
      'target-arrow-color': '#AEB6BF',
      'line-style': 'dashed'
    }
  },
  {
    selector: '.regulated',
    style: {
      'background-color': '#FF5D56',
      'label': 'data(id)'
    }
  },
  {
    selector: '.regulator',
    style: {
      'background-color': '#FFBD35',
      'label': 'data(id)'
    }
  },
  {
    selector: '.selected',
    style: {
      'background-color': 'brown',
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

var ur = cy.undoRedo();


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


EOD;
fwrite($myfile, $txt);
fclose($myfile);