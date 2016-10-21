<?php 

if(!(isset($_GET['regulator']) && isset($_GET['regulated']))) {
	echo "GET variable not set";
	// header("Location: ./");
}

$regulator = $_GET['regulator'];
$regulated = $_GET['regulated'];

// Removing extra (SigA) information from Gene Name
preg_match('/\w+/', $regulated, $regulated);
$regulated = $regulated[0];

//   xcc  
require "./includes/connection.inc.php";

?>

<!DOCTYPE html>
<html>
<head>
<style type="text/css">
	thead {
		font-weight: bold;
		font-size: 16px;
	}
	h1 {
		text-align: center;
	}
</style>
</head>
<body>

<h1>Details</h1>
<hr>

<?php
$results = $conn->query("SELECT * FROM sigma_reg WHERE Regulator = '$regulator' AND Gene_no = '$regulated'");

$num_results = $results->rowCount();
if($num_results == 0) {
	die('Sorry, No direct connection found between chosen group'); 	
}

echo "<table border='1px solid black'>";
echo "<thead>
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
</thead>";
$i = 1;


foreach ($results as $row) {
	echo "<tr>";
	echo "<td>$i</td>";
	echo "<td>$row[0]</td>";
	echo "<td>$row[1]</td>";
	echo "<td>$row[2]</td>";
	echo "<td>$row[3]</td>";
	echo "<td>$row[4]</td>";
	echo "<td>$row[5]</td>";
	echo "<td>$row[6]</td>";
	echo "<td>$row[7]</td>";
	echo "</tr>";
	++$i;
}
echo "</table>";

?>

</body>
</html>