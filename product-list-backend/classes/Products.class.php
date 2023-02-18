<?php

abstract class Products extends DataBaseHost
{
    // Query for products database
    protected function getProducts()
    {
        $sql = "SELECT * FROM products";
        $stmt = $this->connect()->query($sql);
        $result = $stmt->fetchAll();

        return json_encode($result);
    }

    // Query for delete products
    protected function deleteProductsQuery($productsArr)
    {
        $skuToDelete = json_decode($productsArr);
        $arrLength = count($skuToDelete->skuToDeleteList);
        $qMarks = "";

        if ($arrLength > 0) {
            for ($x = 0; $x < $arrLength; $x++) {
                if ($x == 0) {
                    $qMarks .= "?";
                } else {
                    $qMarks .= ",?";
                }
            }

            $sql = "DELETE from products WHERE sku in (" . $qMarks . ")";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute($skuToDelete->skuToDeleteList);
        }
    }

    // Query for add new product
    protected function setProduct($sku, $name, $price, $type, $weight, $size, $height, $width, $length, $id = null)
    {
        $sql = "INSERT INTO `products` (`sku`, `name`, `price`, `type`, `weight`, `size`, `height`, `width`, `length`, `id`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$sku, $name, $price, $type, $weight, $size, $height, $width, $length, $id]);
    }

    //Check if product with such SKU already exsists
    protected function checkSku($sku)
    {
        $sql = "SELECT sku FROM `products` WHERE sku = ?;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$sku]);

        $result = false;

        if (!$stmt->rowCount()) {
            $result = true;
        } else {
            echo json_encode(array("skuError" => "SKU already exist")) . ";";
            $result = false;
        }
        return $result;
    }
}
