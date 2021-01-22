<?php
    define('MYSQL_HOST', 'localhost');
    define('MYSQL_USER', 'admin');
    define('MYSQL_PASSWORD', 'adminkida123');
    define('MYSQL_DATABASE', 'users');

    $db = new mysqli(MYSQL_HOST,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DATABASE);

    if($db -> connect_errno) {
        echo "Ne može se povezati sa bazom: " .$db -> connect_error;
        exit();
    }
?>
