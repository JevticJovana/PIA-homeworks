<?php
    require 'database_include.php';
    header('Content-Type: text/html; charset=utf-8');

    $movie = $_POST['movie'];
    $decoded = json_decode($movie, true);
    $array = array();

    $movie_notFound = true;
    $movie_added = true;
    $result = $db->query('SELECT * FROM listmovies');

    $counter = 1;

    foreach($result as $row) {
        $counter += 1;
        $title = $row['Movie_title'];
        $screenwriter = $row['Movie_screenwriter'];
        $year = $row['Movie_year'];
        $studio = $row['Movie_studio'];
        if(($title == $decoded['Title']) && ($screenwriter == $decoded['Screenwriter']) && ($year == $decoded['Year']) && ($studio == $decoded['Studio'])) {
            $movie_notFound = false;
            break;
        }
    }

    if($movie_notFound) {
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

        $sql = "INSERT INTO listmovies (Movie_title, Movie_description, Movie_genre, Movie_screenwriter, 
        Movie_director, Movie_studio, Movie_actors, Movie_year, Movie_length, Movie_poster) 
        VALUES ('$title', '$description', '$genre', '$screenwriter', '$director', '$studio', '$actors', '$year',
        '$length', '$location')";

        $db->query($sql);

        $result = $db->query('SELECT * FROM listmovies');
        $newCounter = 1;
        foreach($result as $row) {
            $newCounter += 1;
        }

        if($counter === $newCounter) {
            $movie_added = false;
        }
    }
    else {
        $movie_added = false;
    }
    echo json_encode($movie_added);
    $db->close();
?>
