<?php 

// require "connection.inc.php";
require "./includes/Node.inc.php";
require "./includes/Graph.inc.php";

$a = new Node("A");
$b = new Node("B");
$c = new Node("C");
$m = new Node("M");
$n = new Node("N");
$o = new Node("O");
$p = new Node("P");
$q = new Node("Q");
$r = new Node("R");
$z = new Node("Z");

$nodes = [
$a->info => $a, 
'B' => $b,
'C' => $c,
'M' => $m,
'N' => $n,
'O' => $o,
'P' => $p,
'Q' => $q,
'R' => $r,
'Z' => $z
];

$graph = new Graph($nodes);

$graph->edges = [
	"Z" => ['A', 'B', 'C'],
	"A" => ['M', 'N'],
	"B" => ['O'],
	"C" => ['P', 'Q', 'R']
];


$output = $graph->BFStraversal("Z");

// print_r($output);