<?php
ini_set("display_errors", "0");

include "autoloader.php";

$sku = $_POST['sku'];
$name = $_POST['name'];
$price = $_POST['price'];
$type = $_POST['type'];
$weight = $_POST['weight'] ? $_POST['weight'] : null;
$size = $_POST['size'] ? $_POST['size'] : null;
$height = $_POST['height'] ? $_POST['height'] : null;
$width = $_POST['width'] ? $_POST['width'] : null;
$length = $_POST['length'] ? $_POST['length'] : null;

$controller = new ProductsController;
$controller->addProduct($sku, $name, $price, $type, $weight, $size, $height, $width, $length);
