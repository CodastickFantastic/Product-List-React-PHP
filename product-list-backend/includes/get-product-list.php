<?php

include "../classes/DataBaseHost.class.php";
include "../classes/Products.class.php";
include "../classes/ProductsController.class.php";

$controller = new ProductsController;
$controller->showProducts();
