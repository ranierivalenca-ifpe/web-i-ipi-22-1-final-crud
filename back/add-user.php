<?php
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    $dsn = 'mysql:dbname=web1test;port=3307';
    $conn = new PDO($dsn, 'root', 'root');
    $conn->query("INSERT INTO users (username, password) VALUES ('$username', '$password')");
    
    header('Access-Control-Allow-Origin: *');
    http_response_code(201);
?>