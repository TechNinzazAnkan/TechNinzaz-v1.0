<?php

	// Sample Code to Connect with Local Database

	/*$servername = "localhost";
	$username = "root";
	$password = "password";
	$dbname = "ninzaz_db";

	$con = mysql_connect($servername, $username, $password) or die("Connection Error");
	mysql_select_db($dbname, $con);	*/

	// Production Setup

	$db_username = 'techninz_root';
	$db_password = 'rootuser';
	$db_host = 'localhost';
	$db_database = 'techninz_website';

	$con = mysql_connect($db_host, $db_username, $db_password) or die("Connection Error");
	mysql_select_db($db_database, $con);	
	

	if(isset($_POST['func'])&& $_POST['func'] == 'contactUs')
	{	
		$name = mysql_real_escape_string($_POST["name"]);
		$email = mysql_real_escape_string($_POST["email"]);
		$subject = mysql_real_escape_string($_POST["subject"]);
		$question = mysql_real_escape_string($_POST["question"]);

		$q1 = mysql_query("insert into contactus(id,name,email,subject,question) values('','$name','$email','$subject','$question')");
		//echo ("insert into contactus(id,name,email,subject,question) values('','$name','$email','$subject','$question')");

	}
	else if(isset($_POST['func'])&& $_POST['func'] == 'register') {
		//print_r($_POST);
		$name = mysql_real_escape_string($_POST["name"]);
		$email = mysql_real_escape_string($_POST["email"]);
		$pwd = md5($_POST["password"]);
		$mobileNum = mysql_real_escape_string($_POST["mobilenumber"]);
		$collegeDetails = mysql_real_escape_string($_POST["collegeName"]);
		$coursePursuing = mysql_real_escape_string($_POST["pursuingCourse"]);	


		$q1 = mysql_query("insert into register(id,name,email,password,mobileNo,collegeName,coursePursue) values('','$name','$email','$pwd','$mobileNum','$collegeDetails','$coursePursuing')");
		//echo ("insert into register(id,name,email,password,mobileNo,collegeName,coursePursue) values('','$name','$email','$pwd','$mobileNum','$collegeDetails','$coursePursuing')");
	} 

	else if(isset($_POST['func'])&& $_POST['func'] == 'seminarRegistration') {
		//print_r($_POST);
		$name = mysql_real_escape_string($_POST["name"]);
		$mobileNum = mysql_real_escape_string($_POST["mobilenumber"]);
		$collegeDetails = mysql_real_escape_string($_POST["collegeName"]);
		$department = mysql_real_escape_string($_POST["department"]);	


		$q1 = mysql_query("insert into seminarRegistration(id,name,mobileNum,collegeDetails,department) values('','$name','$mobileNum','$collegeDetails','$department')");
		//echo ("insert into register(id,name,email,password,mobileNo,collegeName,coursePursue) values('','$name','$email','$pwd','$mobileNum','$collegeDetails','$coursePursuing')");

		$to = "techninzazrohit@gmail.com";
		$subject = "New Registration for Seminar";
		$txt = "Checkout the New Registration in your Page!!!!!!!!!                            Name: ".$name."<br>"."Mobile Number: ".$mobileNum;
		$headers = "From: contact@techninzaz.com" . "\r\n" .
		"CC: ankan.mukhopadhyay@techninzaz.com";
		mail($to,$subject,$txt,$headers);
	}

?>