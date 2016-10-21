<?php

$config = [
	'DB_USERNAME' => 'root',
	'DB_PASSWORD' => ''
];

try {
	$conn = new PDO('mysql:host=localhost;dbname=MycoRegDB', $config['DB_USERNAME'], $config['DB_PASSWORD']);
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
	echo "Error: " . $e->getMessage();
}

// echo "connection establishedloca";
