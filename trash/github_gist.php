<?php

class Node {
	public $info;
	public $level;

	public function __construct($info) {
		$this->info = $info;
		$this->level = NULL;
	}

	public function __toString() {
		return "$this->info";
	}
};

class Graph {
	public $nodes;
	public $edges;
	private $next_nodes;

	public function __construct($arr) {
		$this->nodes = $arr;
		$next_nodes = NULL;
	}

	public function BFStraversal($node) {
		$node = $this->nodes[$node];
		$node->level = 1;
		$queue = [$node];
		$current_level = $node->level;
		$output = [];
		while(count($queue) > 0) {
			$current_node = array_shift($queue);

			// STORING INFORMATION ABOUT CURRENT NODE
			if($current_node->level > $current_level) {
				$current_level++;
				array_push($output, "\n");
			}
			array_push($output, $current_node->info." ");

			// ITERATING OVER NEXT NODES AND QUEUEING THEM
			if (array_key_exists($current_node->info, $this->edges)) {
				$this->next_nodes = $this->edges[$current_node->info];
				foreach($this->next_nodes as $next_node) {
					$next_node = $this->nodes[$next_node];

					if($next_node->level == NULL) {
						$next_node->level = $current_level + 1;
						array_push($queue, $next_node);
					} 

					if($next_node->level <= $current_level) {

					}
				}
			}
		}
		return join("", $output);
	}
};

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
	"C" => ['P', 'Q', 'R'],
	// "M" => NULL,
	// "N" => NULL,
	// "O" => NULL,
	// "P" => NULL,
	// "Q" => NULL,
	// "R" => NULL
];


echo $graph->BFStraversal("Z");

