<?php

include "../classes/DataBaseHost.class.php";
include "../classes/Products.class.php";
include "../classes/ProductsController.class.php";

$displayProduct = new ProductsController;
$displayProduct->showProducts();

?>