<?php
session_start();


if(!isset($_GET["query_gene"])) {
	header("Location: ./index.php");
} else {
	$query_gene = $_GET["query_gene"];
}



require "./includes/connection.inc.php";
require "./includes/Node.inc.php";
require "./includes/Graph.inc.php";

$results = $conn->query("SELECT Regulator, Gene_no, Annotation FROM Sigma_Reg");


// Generating all the edges information
$hash = []; // all the edges information
$hash2 = []; 

// iterating over every data entry to store it in hashmap1 and hashmap2
foreach($results as $row) {
	// Removing extra (SigA) information from Gene Name
	// preg_match('/\w+/', $row[0], $regulator);
	// $regulator = $regulator[0];
	$regulator = $row[0];
	$regulated = $row[1] . "(" . ucfirst($row[2]) . ")";

	if(!array_key_exists($regulator, $hash)) {
		array_push($hash, $regulator);
		$hash[$regulator] = [];
		array_push($hash[$regulator], $regulated);
	} else if(!in_array($regulated, $hash[$regulator])){
		array_push($hash[$regulator], $regulated);
	}

	// Reversed hash for reversed graph for reversed search
	// regulated -> regulator
	// regulator -> regulated
	// hash -> hash2
	if(!array_key_exists($regulated, $hash2)) {
		array_push($hash2, $regulated);
		$hash2[$regulated] = [];
		array_push($hash2[$regulated], $regulator);
	} else if(!in_array($regulator, $hash2[$regulated])){
		array_push($hash2[$regulated], $regulator);
	}
}

// Taking every unique gene from the hashmap so generated and storing it in a 1-D array called genes
$genes = []; // all the distinct gene names
foreach($hash as $key => $value) {
	array_push($genes, $key);
	$genes[$key] = [];
	array_push($genes[$key], new Node($key));
	if (is_array($value) || is_object($value)){
		foreach($value as $val) {
				array_push($genes, $val);
				$genes[$val] = [];
				array_push($genes[$val], new Node($val));
		}
	}

}



$graph = new Graph($genes);
$graph->edges = $hash;
$output = $graph->BFStraversal($query_gene);

$graph2 = new Graph($genes);
$graph2->edges = $hash2;
$output2 = $graph2->BFStraversal($query_gene);
?>

<html>
<head>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<style type="text/css">
	thead {
		font-weight: bold;
		font-size: 18px;
	}

	h2 {
		text-align: center;
	}

	p {
		text-align: center;
		margin-right: 16px;
		font-size: 20px;
		border: 3px dashed black;
		padding: 3px;
	}
</style>

<!-- Latest compiled and minified JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
</head>
<body>

<h2><?= $query_gene ?></h2>
<p>Click <a href='./cytoscape/'>here</a> to view map</p>
<br>
<table class="table table-striped">
<thead>
	<tr>
		<td>S.No:</td>
		<td>Regulator</td>
		<td>Regulated</td>
		<td>Details</td>
	</tr>
</thead>
  
<?php
$tags = [];
$i = 1;
// iterating over the graph = $graph and representing them in the order stored
foreach($output["edges"] as $key => $value) {
	array_push($tags, $key);
	if (is_array($value) || is_object($value)){
		foreach($value as $val) {
			array_push($tags, $val);
			echo "<tr>
				<td>$i</td>
			  <td>$key</td>
			  <td>$val</td>
			  <td><a href='./details.php?regulator=$key&regulated=$val''>View Details</a></td>
			</tr>\n";
			$i++;
		}
	}
}


// iterating over the graph = $graph2 and representing them in the reverse order because we have traversed reversely correct but the information we have stored in graph is inverse so we have to reverse them again.
foreach($output2["edges"] as $key => $value) {
	array_push($tags, $key);
	if (is_array($value) || is_object($value)){
		foreach($value as $val) {
			array_push($tags, $val);
			echo "<tr>
				<td>$i</td>
			  <td>$val</td>
			  <td>$key</td>
			  <td><a href='./details.php?regulator=$val&regulated=$key''>View Details</a></td>
			</tr>\n";
			$i++;
		}
	}
}

echo "</table>";

?>

</body>
</html>

<?php

$tags = array_unique($tags);
$_SESSION['search_tags'] = $tags;

include "./includes/writofile.inc.php";
?>