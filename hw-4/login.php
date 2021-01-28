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
    $user_name = "";
        
    $result = $db->query('SELECT * FROM listusers');
    
    foreach($result as $row) {
        $usernameData = strtolower($row['User_username']);
        $emailData = strtolower($row['User_email']);
        $passwordData = $row['User_password'];
    
        if($usernameData === strtolower($decoded['User_username']) || $emailData === strtolower($decoded['User_username'])) {
            $isExisting = true;
            $row_found = $row;
            break;
        } 
    
    }
    
    if($isExisting) {
        if($row['User_password'] === $decoded['User_password'])
        {
            $user_existing = true;
            $user_name = $row['User_name'];
            if($row['isAdmin'] === "1")
                $isAdmin = true;
        }
    }
    else {
        $user_existing = false;
        $isAdmin = false;
    }
    
    $user_existing = array('User_existing' => $user_existing, 'User_admin' =>  $isAdmin, 'User_name' => $user_name);
    echo json_encode($user_existing);
    $db->close();
        
?>
