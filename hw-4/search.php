<?php
    require 'database_include.php';
    header('Content-Type: text/html; charset=utf-8');

    $user = $_POST['search'];
    $decoded = json_decode($user, true);

    $search = $decoded['Search'];
    $result = $db->query("SELECT * FROM listmovies WHERE Movie_title LIKE '%$search%'");
    $movie_results = [];
    $counter = 0;
    $length = 0;

    foreach($result as $row) {
        $length += 1;
    }

    if($length != 0) {
        foreach($result as $row) {
            $movie_results[$counter] = array('Movie_title' => $row['Movie_title'],'Movie_description' => $row['Movie_description'], 'Movie_genre' => $row['Movie_genre'],
            'Movie_screenwriter' => $row['Movie_screenwriter'], 'Movie_director' => $row['Movie_director'],
            'Movie_studio' => $row['Movie_studio'], 'Movie_actors' => $row['Movie_actors'],
            'Movie_year' => $row['Movie_year'], 'Movie_length' => $row['Movie_length'],
            'Movie_id' => $row['Movie_id'], 'Movie_poster' => $row['Movie_poster'], 'Movie_grade' => $row['Movie_grade'], 'Grade_counter' => $row['Grade_counter']);
            $counter += 1;
       }
    }

    echo json_encode($movie_results);
    $db->close();
?>
