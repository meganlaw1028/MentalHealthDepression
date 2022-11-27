<?php

if (isset($_POST['save_data']))
{
    $lastname = $_POST["lastname"];
    $email = $_POST["email"];

    $lastname_no = array_combine($lastname, $email);

    $con = mysqli_connect ("localhost:3306", "root", "", "php_minipro");
        if(!$con)
            echo "con not established";

foreach ($lastname_no as $lastname => $email) {
    echo "$lastname -› $email";
$res=mysqli_query ($con, "insert into MailingList_Info(lastname, email) values ('$lastname', '$email')") ;
    if(!$res)
        echo "Record not inserted";
    else 
        echo "--------INSERTED";
        ?><br/><?php
}
    mysqli_close($con);
}
?>

