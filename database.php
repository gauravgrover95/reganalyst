<?php

require "./includes/connection.inc.php"; 
include "./includes/models/unique_nodes.php";
?>

<!DOCTYPE html>
<html>
<head>
	<title>MycoRegDB</title>
	<link rel="stylesheet" type="text/css" href="css/jquery-ui.min.css">
	<style type="text/css">
		thead {
			font-weight: bold;
			font-size: 18px;
		}

		.menu {
			margin-bottom: 8px;
		}

		form {
			display: inline-block;
			width: 350px;
		}

		.map {
			float: right;
		}
	</style>

	<script type="text/javascript" src="js/jquery-3.1.1.min.js"></script>
	<script type="text/javascript" src="js/jquery-ui/jquery-ui.min.js"></script>	

</head>
<body>
	
<?php include "includes/views/header.php"; ?>
<div class="menu">
<form method="GET" action="./search.php">
	<input type="text" id="tags" name="query_gene" placeholder="Enter your query here">
	<input type="submit" name="submit" value="Search">
</form>
<div class="map">Click <a href="./database-map.php">here</a> to view complete map</div>
</div>

<table border='1px solid black'>
<thead>
<tr>
	<td>Serial</td>
	<td>Regulator</td>
	<td>Gene_No</td>
	<td>Annotation</td>
	<td>CDS_position</td>
	<td>Promoter_name</td>
	<td>TSP_CDS_distance</td>
	<td>Pubmed_ID</td>
	<td>Sequence</td>
</tr>
</thead>
<?php
include "./includes/models/all.php";
$i=1;
foreach($results as $row) {
echo "
<tr>
	<td>$i</td>
  <td><a href='./search.php?query_gene=$row[0]'>$row[0]</a></td>
  <td><a href='./search.php?query_gene=$row[1](" . ucfirst($row[2]) . ")'>$row[1]</a></td>
  <td>$row[2]</td>
  <td>$row[3]</td>
  <td>$row[4]</td>
  <td>$row[5]</td>
  <td>$row[6]</td>
  <td>$row[7]</td>
</tr>";
++$i;
}
?>
</table>

<script type="text/javascript">

$( function() {
    var availableTags = [
      <?php foreach ($tags as $tag): ?>
    		<?="'$tag',"?>
      <?php endforeach ?>
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
});

</script>

</body>
<!-- </html> -->
