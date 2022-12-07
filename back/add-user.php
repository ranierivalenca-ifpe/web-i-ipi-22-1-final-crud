<?php
    require('conn.php');
    
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    $conn->query("INSERT INTO users (username, password) VALUES ('$username', '$password')");
    
    header('Access-Control-Allow-Origin: *');
    http_response_code(201);
?>