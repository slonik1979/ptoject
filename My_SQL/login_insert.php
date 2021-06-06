<?php

    include 'db_connection.php';

    if (isset($_POST['submit'])) {
        $email = $_POST['email'];
        $password = $_POST['password'];
        $login = $_POST['login'];
        echo "Ваши данные записаны";

        // echo $email;
        // echo $password;

       

               $user = "INSERT INTO users (login, email, password) VALUES ('$login', '$email', '$password');";

               $user_result = mysqli_query($connect, $user);
               
               if (!$user_result) {
                   die("Ошибка".msqli_error());
               }

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
    <form action="login_insert.php" method="post">
    <div class="mb-3">
        <label for="exampleInputLogin1" class="form-label">Login</label>
        <input type="text" class="form-control" name="login" id="exampleInputLogin1" aria-describedby="emailHelp">
        <div id="loginHelp" class="form-text"></div>
    </div>
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" name="password" id="exampleInputPassword1">
    </div>
    <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary" name="submit">Submit</button>
    </form>
</body>
</html>