<?php

abstract class Products extends DataBaseHost
{
    protected function getProducts()
    {
        $sql = "SELECT * FROM products";
        $stmt = $this->connect()->query($sql);
        $result = $stmt->fetchAll();

        return json_encode($result);
    }

    protected function deleteProductsQuery($productsArr)
    {
        $x = $this->massDeleteBodyToArr($productsArr);
        print_r($x); 


        $sql = "DELETE from products WHERE sku in (?)";
        $stmt = $this->connect()->prepare($sql);
        // $stmt->execute($this->massDeleteBodyToArr($productsArr));
    }

    private function massDeleteBodyToArr($body)
    {
        $string = preg_replace('/[^A-Za-z0-9\,]/', '', $body);
        $string = explode(",", $string);
        return $string;
        // echo "TYPE: " . gettype($string);
        // var_dump($string);
    }

    protected function testConnection(){
        echo "<h2>TEST CONNECTION</h2>";
        $stmt = $this->connect()->query("SELECT * FROM products");
        $result = $stmt->fetchAll();

        print_r($result);
    }
}
