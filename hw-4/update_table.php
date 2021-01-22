<?php
    require 'database_include.php';

    $movie = $_POST['movie'];
    $decoded = json_decode($movie, true);

    $movie_updated = false;

    $title = $decoded['Title'];
    $description = $decoded['Description'];
    $genre = $decoded['Genre'];
    $screenwriter = $decoded['Screenwriter'];
    $director = $decoded['Director'];
    $studio = $decoded['Studio'];
    $actors = $decoded['Actors'];
    $year = $decoded['Year'];
    $length = $decoded['Length'];
    $location = $decoded['Location'];
    $id = $decoded['Id'];

    $sql = "UPDATE listmovies SET Movie_title = '$title',
    Movie_description = '$description', Movie_genre = '$genre', 
    Movie_screenwriter = '$screenwriter', Movie_director = '$director',
    Movie_studio = '$studio', Movie_actors = '$actors', 
    Movie_year = '$year', Movie_length = '$length', 
    Movie_poster = '$location' WHERE Movie_id = $id";
    $db->query($sql);
    
    if($db->affected_rows >= 0)
    {
        $movie_updated = true;
    }
    else {
        $movie_updated = false;
    }

    echo json_encode($movie_updated);
    $db->close();
?>
