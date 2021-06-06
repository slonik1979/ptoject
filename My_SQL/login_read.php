<?php

    include 'db_connection.php';
    

        
            
            $query = 'SELECT * FROM users;';
            $query_result = mysqli_query($connect, $query);
            if (!$query_result) {
                die("Ошибка".msqli_error());
            }
  

?>




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
</head>
<body>
    <div class="container">
        <div class="col-md-6">
            <pre>
    <?php
        while ($row = mysqli_fetch_assoc($query_result)) {
        print_r($row);
        }
    ?>
           </pre>
        </div>
    </div>
</body>
</html>