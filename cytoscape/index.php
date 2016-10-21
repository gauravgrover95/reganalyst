<?php
session_start();

$tags = $_SESSION['search_tags'];

?>

<!DOCTYPE html>
<html>
<head>
<title>Cytoscape</title>
<link rel="stylesheet" type="text/css" href="../css/jquery-ui.min.css">
<link rel="stylesheet" type="text/css" href="bower_components/js.cytoscape-navigator/cytoscape.js-navigator.css">

<link href="bower_components/cytoscape-panzoom/cytoscape.js-panzoom.css" rel="stylesheet" type="text/css" />
<link href="bower_components/cytoscape-panzoom/font-awesome-4.0.3/css/font-awesome.min.css" rel="stylesheet" type="text/css" />

<link rel="stylesheet" type="text/css" href="main.css">

<script type="text/javascript" src="jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="../js/jquery-ui/jquery-ui.min.js"></script>
<script type="text/javascript">
		$( function() {
		    var availableTags = [
		    	<?php foreach ($tags as $tag): ?><?="'$tag',"?><?php endforeach ?>"Scheme"
		    ];

		    $( "#del" ).autocomplete({
		      source: availableTags
		    });

		    $("#search-bar").autocomplete({
		      source: availableTags
		    });
		});
</script>


</head>
<body>
<div class="wrapper">
<?php 
	include "../includes/views/header.php";
?>


<!-- This is the div for controls -->
	<div class="controls">  
		<input type="text" name="search-bar" id="search-bar"> <button id="search-button">Search</button>
		<br><br>
		<input type="text" name="delete" id="del"> <button onclick="abc()">Delete</button>
		<br><br>
		<button onclick="reset()" class="btn">Reset</button>
		<button onclick="png()" class="btn">Save as Image</button>
		<button id="hide-ends-button" onclick="hide()">Hide Ends</button>
	</div>

	<div class="console">
		<!-- This is the main div for map -->
		<div id="cy"></div>
		<div class="cytoscape-navigator"></div>
	</div>
</div> <!-- wrapper end -->


<script type="text/javascript" src="bower_components/cytoscape/dist/cytoscape.js"></script> 
<script src="bower_components/cytoscape-panzoom/cytoscape-panzoom.js"></script>
<script type="text/javascript" src="bower_components/js.cytoscape-navigator/cytoscape.js-navigator.js"></script>
<script type="text/javascript" src="new.js"></script>
<script type="text/javascript" src="controls.js"></script>
<script type="text/javascript">

	RegExp.escape = function(text) {
	  return text.replace(/[-[\]{}()*+?.,\\^$|\s]/g, "\\$&");
	};


	// This method is not good it traverses over all the nodes again which is useless
	// ideal will be just select the particular node and use the remove method corresponding to that id
	// for that 1. method is to use the regular expression to escape the brackets in id while using the node id and pass it as selector
	// other is to just remove the concept of brackets from the node ids but to that we need to apply qTip to give Full information about the node while we will just use the Annotation for node Key identifier
	function abc() {
		var name = $('#del').val();

		name = RegExp.escape(name);
		name = '#' + name;
		console.log(name);
		cy.elements(name).remove();

	}


	$("#search-button").click(animate);

	function animate() {

		var name = $('#search-bar').val();
		name = '#' + RegExp.escape(name);
		cy.animate({
		  fit: { 
		  	eles: name,
		  	padding: 200
		  }
		}, { duration: 700 });

		cy.elements(name).animate({
			style: {
				backgroundColor: 'brown'
			}}, {
				duration: 1000
		});
	}

	function hide() {
		cy.elements('node').forEach(function(ele) {
			if(!ele.isParent()) console.log('element is not a parent');
		});	
	}

</script>


</body>
</html>