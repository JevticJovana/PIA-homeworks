<?php
    require 'database_include.php';

    $movie = $_POST['movie'];
    $decoded = json_decode($movie, true);

    $id = $decoded['Id'];

    $sql = "DELETE FROM listmovies WHERE Movie_id=$id";
    $db->query($sql);

    echo json_encode(true);
    $db->close();
?>
