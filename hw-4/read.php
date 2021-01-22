<?php
    require 'database_include.php';

    $result = $db->query('SELECT * FROM listmovies');
    $array_movies = [];
    $counter = 0;

    foreach($result as $row) {
        $array_movies[$counter] = array('Movie_title' => $row['Movie_title'],'Movie_description' => $row['Movie_description'], 'Movie_genre' => $row['Movie_genre'],
            'Movie_screenwriter' => $row['Movie_screenwriter'], 'Movie_director' => $row['Movie_director'],
            'Movie_studio' => $row['Movie_studio'], 'Movie_actors' => $row['Movie_actors'],
            'Movie_year' => $row['Movie_year'], 'Movie_length' => $row['Movie_length'],
            'Movie_id' => $row['Movie_id'], 'Movie_poster' => $row['Movie_poster']);
        $counter += 1;
    }

    echo json_encode($array_movies);
    $db->close();
?>
