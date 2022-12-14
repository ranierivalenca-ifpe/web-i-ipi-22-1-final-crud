<?php
    require('conn.php');
    
    $name = $_POST['name'];
    $user_id = $_POST['user_id'];
    
    $conn->query("INSERT INTO products (name, user_id) VALUES ('$name', '$user_id')");
    
    header('Access-Control-Allow-Origin: *');
    http_response_code(201);
?>