<?php

abstract class DataBaseHost
{
    protected function connect()
    {
        try {
            $userName = "product-provider";
            $password = "Products123456!@#";
            $dbh = new PDO("mysql:host=localhost;dbname=scandiweb_test", $userName, $password);
            $dbh->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            return $dbh;
        } catch (PDOException $error) {
            print "Error!: " . $error->getMessage() . "<br/>";
            die();
        }
    }
}
