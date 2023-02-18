<?php

class ProductsController extends Products
{
    public function showProducts()
    {
        print_r($this->getProducts());
    }

    public function deleteProducts($postData)
    {
        $this->deleteProductsQuery($postData);
    }

    public function addProduct($sku, $name, $price, $type, $weight, $size, $height, $width, $length)
    {
        if ($this->checkSku($sku)) {
            $this->setProduct($sku, $name, $price, $type, $weight, $size, $height, $width, $length);
        }
    }
}
