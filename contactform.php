<?php

 if(isset($_POST['submit'])) {

 	$name = $_POST['Full Name'];
 	$phone = $_POST['Phone Number'];
 	$mailFrom = $_POST['Email'];
 	$subject = $_POST['Subject'];
 	$message = $_POST['Message'];

 	$mailTo = "derek.shigetomi@hotmail.com";
 	$headers = "From: ".$mailFrom;
 	$txt = "You have received an email from ".$name.".\n\n".$message;

 	mail($mailFrom, $subject, $message, $headers);
 	header("Location: index.html?mailsend");

 }

