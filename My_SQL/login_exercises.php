<?php
include 'db_connection.php';

$query = "SELECT * FROM users WHERE email = 'sakhmotors@yandex.ru';";
    $query_result = mysqli_query($connect, $query);
    if (!$query_result) {
        die("Query failed".mysqli_error($connect));
    }


?>