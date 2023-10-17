<?php

	$message=$_REQUEST['message'];
	$subject =$_REQUEST['subject'];

	$name=$_REQUEST['name'];

	$email=$_REQUEST['email'];

	$formcontent="This Mail come from Infracommunication website \n\nName: $name \n\nSubject: $subject \n\nEmail: $email \n\n$message";

	$TO1 ="omar@infracom.me"; 	// your mail here
	$TO2 ="obaraket23@gmail.com"; 	// your mail here
	//  Sales@Infracommunication.com

	$send_email=mail($TO1,$subject,$formcontent,"From: ".$name."<".$email.">");
	$send_email=mail($TO2,$subject,$formcontent,"From: ".$name."<".$email.">");

	echo "<script>
	             alert('Message Sent Succesfully'); 
	             window.location.href='http://infracommunication.com/v2/';  

	     </script>";

?>