<?php

$connect = mysqli_connect('localhost', 'root', 'root', my_database);
    if ($connect) {
        echo "Связь установлена";
    } else {
        die('Связи нет');
            }
?>