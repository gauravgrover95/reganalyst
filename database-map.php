<?php

echo "Hello World";

require "./includes/models/unique_nodes.php";
require "./includes/models/all.php";

$myfile = fopen("./cytoscape/new.js", "w") or die("Unable to open file!");

$txt = <<<EOD

var cont = document.getElementById('cy');

var cy = cytoscape({

container: cont, // container to render in

elements: [ // list of graph elements to start with

EOD;

foreach ($tags as $tag) {
	$txt .= "{ // node $tag
  data: { id: '$tag' }
},
";
}

foreach ($results as $row) {
  $row[1] = $row[1] . "(" . ucfirst($row[2]) . ")";
	$txt .= "{// $row[0].$row[1]
  data: { id: '$row[0].$row[1]', source: '$row[0]', target: '$row[1]' }
},
";
}

$txt .= <<<EOD
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
    // 'background-color': 'rgb(' + GreenYellowRed(c) + ')'
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

header("Location: ./cytoscape");