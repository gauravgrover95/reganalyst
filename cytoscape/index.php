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


	<div class="scores">
		<p>Score: <span id="perturb">100%</span></p>
	</div>
<!-- This is the div for controls -->
	<div class="controls">  
		<input type="text" name="search-bar" id="search-bar" placeholder="Enter Gene Name"> <button id="search-button">Search</button>
		<br><br>
		<input type="text" name="delete" id="del" placeholder="Enter Gene Name"> <button onclick="deleteNode()">Delete</button>
		<br><br>
		<input type="text" name="restore" id="rest" placeholder="Under Construction"> <button onclick="restoreNode()">Restore</button>
		<br><br>
		<button onclick="undo()" class="btn">Undo</button>
		<button onclick="redo()" class="btn">Redo</button>
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
<script type="text/javascript" src="bower_components/cytoscape.js-undo-redo-master/cytoscape-undo-redo.js"></script>
<script type="text/javascript" src="new.js"></script>
<script type="text/javascript" src="controls.js"></script>

</body>
</html>