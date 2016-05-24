$(document).ready(function(){

	// Call the Google Code Prettify
	if (typeof prettyPrint === 'function') {
		prettyPrint();
	}

	$("#contactSubmission").click(function(e){
		if($("#ur_name").val() == null || $("#ur_name").val() == '' && $("#ur_email").val() == null || $("#ur_email").val() == '' && $("#ur_subject").val() == null || $("#ur_subject").val() == ''){
			alert("All the fields are Mandatory");
		} else {
			alert("We have Received your Request");
			$.ajax({
				url     : "http://www.techninzaz.com/php/sendmail.php",
				type    : "POST",
				data    : {
							"name" : $("#ur_name").val(),
							"email" : $("#ur_email").val(),
							"subject" : $("#ur_subject").val(),
							"question" : $("#ur_query").val(),
							"func" : 'contactUs'
						},
				success : function (data){
					//alert("We have Received your Request");
					//console.log(data);
					$("input[type=text],[type=email], textarea").val("");
				},
				error : function(e){
					console.log(e.responseText);
				}
			});
			$("input[type='text'],[type='email'], textarea").val("");
			e.preventDefault();
		}
	});

	$("#registerPost").click(function(e){
		if($("#ur_name").val() == null || $("#ur_name").val() == '' && $("#ur_email").val() == null || $("#ur_email").val() == '' && $("#ur_number").val() == null || $("#ur_number").val() == '' && $("#ur_college").val() == null || $("#ur_college").val() == '' && $("#ur_password").val() == null || $("#ur_password").val() == ''){
			alert("All the fields are Mandatory");
		} else{
			alert("Form Submitted Successfully");
			$.ajax({
				url     : "http://www.techninzaz.com/php/sendmail.php",
				type    : "POST",
				data    : {
							"name" : $("#ur_name").val(),
							"email" : $("#ur_email").val(),
							"password" : $("#ur_password").val(),
							"mobilenumber" : $("#ur_number").val(),
							"collegeName" : $("#ur_college").val(),
							"pursuingCourse" : $("#ur_pursuingCourse").val(),
							"func" : 'register'
						},
				success : function (e){
					//alert("Form Submitted Successfully");
					$("input[type='text'],[type='email'],[type='password'],[type='number']").val("");
					//console.log(e);
				},
				error : function(e){
					console.log("Error "+ e);
				}
			});
			$("input[type='text'],[type='email'],[type='password'],[type='number']").val("");
			e.preventDefault();
		}
	});

	$("#seminarRegistration").click(function(e){
		if($("#firstName").val() == null || $("#firstName").val() == '' && $("#ur_number").val() == null || $("#ur_number").val() == '' && $("#collegeName").val() == null || $("#collegeName").val() == '' && $("#department").val() == null || $("#department").val() == ''){
			alert("All the fields are Mandatory");
		} else{
			alert("Form Submitted Successfully");
			$.ajax({
				url     : "http://www.techninzaz.com/php/sendmail.php",
				type    : "POST",
				data    : {
							"name" : $("#firstName").val(),
							"mobilenumber" : $("#ur_number").val(),
							"collegeName" : $("#collegeName").val(),
							"department" : $("#department").val(),
							"func" : 'seminarRegistration'
						},
				success : function (e){
					//alert("Form Submitted Successfully");
					$("input[type='text'],[type='number']").val("");
					//console.log(e);
				},
				error : function(e){
					console.log("Error "+ e);
				}
			});
			$("input[type='text'],[type='number']").val("");
			e.preventDefault();
		}
	});	
	

});
