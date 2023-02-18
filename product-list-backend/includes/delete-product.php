<?php
ini_set("display_errors", "1");

include "../classes/DataBaseHost.class.php";
include "../classes/Products.class.php";
include "../classes/ProductsController.class.php";

$controller = new ProductsController;

$body = file_get_contents("php://input");

$controller->deleteProducts($body);
