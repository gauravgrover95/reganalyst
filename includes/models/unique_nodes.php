<?php

// This file gives an array(tags) to unique nodes in the database
require "./includes/connection.inc.php";
$tags = [];
$results = $conn->query("SELECT DISTINCT Regulator FROM Sigma_Reg");
foreach ($results as $row) {
array_push($tags, $row[0]);
}
$results = $conn->query("SELECT DISTINCT Gene_No, Annotation FROM Sigma_Reg");
foreach ($results as $row) {
array_push($tags, $row[0] . "(" . ucfirst($row[1] . ")"));

$tags = array_unique($tags);

}