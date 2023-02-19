<?php
ini_set("display_errors", "1");

include "autoloader.php";

$body = file_get_contents("php://input");

$controller = new ProductsController;
$controller->deleteProducts($body);
