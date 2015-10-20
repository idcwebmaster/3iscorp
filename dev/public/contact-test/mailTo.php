<?php
if($_POST["submit"]) {
    $recipient="idcwebmaster@yahoo.com"; //Enter recipient mail address
    $subject="Contact from 3ISCORP Website"; //Subject 
    $sender=$_POST["name"];
    $senderEmail=$_POST["email"];
    $message=$_POST["comments"];
    $mailBody="Name: $sender\nEmail Address: $senderEmail\n\nMessage: $message";
    mail($recipient, $subject, $mailBody);
	sleep(1);
	header("Location:http://3iscorp.com/contact"); // Set here redirect page or destination page
}
?>
