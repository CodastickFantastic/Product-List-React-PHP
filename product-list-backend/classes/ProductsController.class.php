<?php

class ProductsController extends Products
{
    public function showProducts()
    {
        print_r($this->getProducts());
    }

    public function deleteProducts($postBody)
    {
        $this->deleteProductsQuery($postBody);
    }

    public function testConnect(){
        $this->testConnection();
    }
}
