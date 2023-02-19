<?php

class ProductsController extends Products
{
    public function showProducts(){
        print_r($this->getProducts());
    }

    public function deleteProducts($postData){
        $this->deleteProductsQuery($postData);
    }

    public function addProduct($sku, $name, $price, $type, $weight, $size, $height, $width, $length){
        
        $textArr = [
            array("sku" => $sku),
            array("name" => $name),
            array("type" => $type)
        ];

        $numericArr = [
            array("price" => $price),
            array("weight" => $weight),
            array("size" => $size),
            array("height" => $height),
            array("width" => $width),
            array("length" => $length)
        ];

        if ($this->checkAddedProduct($textArr,$numericArr)) {
            if ($this->checkSku($sku)) {
                $this->setProduct($sku, $name, $price, $type, $weight, $size, $height, $width, $length);
            }
        }
    }

    private function checkAddedProduct($textValues, $numericValues){
        $result = true;

        //Check for proper string values
        foreach ($textValues as $textObj) {
            $key = key($textObj);
            if (!is_string($textObj[$key])) {
                echo json_encode(array($key . "Error" => "Please, provide the data of indicated type.")) . ";";
                $result = false;
            }
        }

        foreach ($numericValues as $numericObj) {
            $key = key($numericObj);
            if (!is_numeric($numericObj[$key])) {
                if ($numericObj[$key] !== null) {
                    echo json_encode(array($key . "Error" => "Please, provide the data of indicated type.")) . ";";
                    $result = false;
                }
            }
        }

        return $result;
    }
}
