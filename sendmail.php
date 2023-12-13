<?php

// if($_SERVER["REQUEST_METHOD"]  == "POST") {
	$name = cleanInput($_POST['name']);
    $email = cleanInput($_POST['email']);
    $subject = cleanInput($_POST['subject']);
    $phone = cleanInput($_POST['phone']);
    $message = cleanInput($_POST['message']);

	$message=$_REQUEST['message'];
		$subject =$_REQUEST['subject'];

		$name=$_REQUEST['name'];

		$email=$_REQUEST['email'];

		$formcontent="This Mail come from Infracommunication website \n\nName: $name \n\nSubject: $subject \n\nEmail: $email \n\n$message";

		$TO1 ="omar@infracom.me"; 	// your mail here
		$TO2 ="Sales@Infracommunication.com"; 	// your mail here

		$send_email=mail($TO1,$subject,$formcontent,"From: $name <$email>");
		$send_email=mail($TO2,$subject,$formcontent,"From: $name <$email>");

		if ($send_email) {
			echo "<script>
					alert('Message Sent Successfully');
					window.location.href='http://infracommunication.com/v2/';
				</script>";
		} else {
			echo "<script>
					alert('Failed to send message. Please try again.');
				</script>";
		}
		
	// if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
	// 	ECHO "INVALID EMAIL FORMAT, PLEASE TRY AGAIN"
    //     // Handle invalid email format error
    //     // Redirect or show an error message
    // } else {
        
    // }

	

	function cleanInput($data) {
		$data = trim($data);
		$data = stripslashes($data);
		$data = htmlspecialchars($data);

		return $data;
	}

?>