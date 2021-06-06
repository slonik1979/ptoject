<?php
$_POST = json_decode(file_get_contents("php://input"), true);//-- получаем данные из json формата
echo var_dump($_POST);
