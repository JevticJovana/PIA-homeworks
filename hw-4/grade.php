<?php
    require 'database_include.php';

    $user = $_POST['grade'];
    $decoded = json_decode($user, true);

    $movie = $decoded['Id'];
    $result = $db->query("SELECT * FROM listmovies WHERE Movie_id = '$movie'");
    $grade = "";
    $counter = "";
    $done = false;
    $updatedMovie = "";

    foreach($result as $row ) {
        $grade = $row['Movie_grade'] + $decoded['Grade'];
        $counter =  $row['Grade_counter'] + 1;

        $sql = "UPDATE listmovies SET Movie_grade = $grade, Grade_counter = $counter WHERE Movie_id = '$movie'";
        $db->query($sql);

        if($db->affected_rows >= 0)
        {
            $done = true;
            $updatedMovie = array('Movie_title' => $row['Movie_title'],'Movie_description' => $row['Movie_description'], 'Movie_genre' => $row['Movie_genre'],
            'Movie_screenwriter' => $row['Movie_screenwriter'], 'Movie_director' => $row['Movie_director'],
            'Movie_studio' => $row['Movie_studio'], 'Movie_actors' => $row['Movie_actors'],
            'Movie_year' => $row['Movie_year'], 'Movie_length' => $row['Movie_length'],
            'Movie_id' => $row['Movie_id'], 'Movie_poster' => $row['Movie_poster'], 'Movie_grade' => $grade, 'Grade_counter' => $counter);
        }
    }

    $done = array('Grade' => $done, 'Movie' => $updatedMovie);
    echo json_encode($done);
    $db->close();
?>
