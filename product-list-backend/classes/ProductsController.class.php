<?php

class ProductsController extends Products{

    public function showProducts(){
        print_r($this->getProducts()); 
    }
}

?>