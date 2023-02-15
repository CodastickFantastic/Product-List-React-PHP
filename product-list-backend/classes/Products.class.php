<?php

abstract class Products extends DataBaseHost{

    protected function getProducts(){
        $sql = "SELECT * FROM products";
        $stmt = $this->connect()->query($sql);
        $result = $stmt->fetchAll();

        return json_encode($result);
    }
}

?>