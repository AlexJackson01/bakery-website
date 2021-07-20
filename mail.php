<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent=" From: $name \n Message: $message";
$recipient = "hello@beautbakes.co.uk.test-google-a.com";
$subject = "New Message from beautbakes.co.uk";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
header('Location: contact-thank-you.html');
exit;
?>
