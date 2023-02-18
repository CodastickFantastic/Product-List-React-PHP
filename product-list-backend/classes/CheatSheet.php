<?php

class Test extends Dbh {

    //SQL withouth statement
    public function getUsers(){
        $sql = "SELECT * FROM users";
        $stmt = $this->connect()->query($sql);
        while($row = $stmt->fetch()){
            echo $row["users_firstname"]."<br/>";           
        }
    }

    //SQL with statement
    public function getUsersStmt($firstname, $lastname){
        $sql = "SELECT * FROM users WHERE users_firstname = ? AND users_lastname = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$firstname, $lastname]);
        $names = $stmt->fetchAll();
        
        foreach ($names as $name) {
            Print_r($name) ;   
            echo $name["users_firstname"]."<br/>";    
        }
    }

    //SQL add data to database
    public function setUsersStmt($firstname, $lastname, $dateOfBirth){
        $sql = "INSERT INTO users(users_firstname, users_lastname, users_dateofbirth) VALUES (?, ?, ?)";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$firstname, $lastname, $dateOfBirth]);
    }

}