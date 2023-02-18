<?php

include "../classes/DataBaseHost.class.php";
include "../classes/Products.class.php";
include "../classes/ProductsController.class.php";

ini_set("display_errors", "0");

$controller = new ProductsController;

$sku = $_POST['sku'];
$name = $_POST['name'];
$price = $_POST['price'];
$type = $_POST['type'];
$weight = $_POST['weight'] ? $_POST['weight'] : null;
$size = $_POST['size'] ? $_POST['size'] : null;
$height = $_POST['height'] ? $_POST['height'] : null;
$width = $_POST['width'] ? $_POST['width'] : null;
$length = $_POST['length'] ? $_POST['length'] : null;

$controller->addProduct($sku, $name, $price, $type, $weight, $size, $height, $width, $length);
