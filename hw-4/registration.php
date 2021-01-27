<?php

    require 'database_include.php';

    $user = $_POST['user'];
    $decoded = json_decode($user, true);

    $row_found = 0;
    $user_existing = false;
    $isExisting = false;
    $email_Existing = false;
    $username_Existing = false;
    $isAdmin = false;

    $result = $db->query('SELECT * FROM listusers');

    $isExisting = false;
    foreach($result as $row) {
        $usernameData = $row['User_username'];
        $emailData = $row['User_email'];

        if($usernameData === $decoded['User_username']) {
            $username_Existing = true;
            $isExisting = true;
            $row_found = $row;

            if($emailData === $decoded['User_email']) {
                $email_Existing = true;
                break;
            }
        } 
        if($emailData === $decoded['User_email']) {
            $email_Existing = true;
            $isExisting = true;
            $row_found = $row;
            break;
        }
    }

    if($isExisting === false) {
        $fname = $decoded['User_name']; 
        $lname = $decoded['User_lastname'];
        $email = $decoded['User_email'];
        $password = $decoded['User_password'];
        $username = $decoded['User_username'];

        $sql = "INSERT INTO listusers(User_name, User_lastname, User_email, User_username ,User_password) VALUES ('$fname', '$lname', '$email', '$username', '$password')";
        $db->query($sql);

    }

    $array = array('Email_existing' => $email_Existing, 'Username_existing' => $username_Existing, 'User_exists' => $isExisting, 'User_name' => $fname);
    echo json_encode($array);
    $db->close();

?>
