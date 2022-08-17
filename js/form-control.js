function Button_onclick() {
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var emailAddress = document.getElementById("emailAddress").value;
    var pass = document.getElementById("pass").value;
    var pass2 = document.getElementById("pass2").value;

    var name_control = /[^a-zA-Z" "]/
    var mail_control = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    var phon_control = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    var pass_control = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@/#$%^&*]{6,16}$/;


    if ((!name_control.test(firstName)) && (!name_control.test(lastName)) && (mail_control.test(emailAddress)) && (phon_control.test(phoneNumber)) && (pass_control.test(pass)) && (pass==pass2)) {
        window.open("./page2/pag2.html");
    }

    if (name_control.test(firstName)){
        document.getElementById('firstName').style.borderColor = "red";
        document.getElementById('firstName').style.borderWidth = "3px";
    }
    else {
        document.getElementById('firstName').style.borderColor = "#ced4da";
        document.getElementById('firstName').style.borderWidth = "1px";
    }

    if (name_control.test(lastName)){
        document.getElementById('lastName').style.borderColor = "red";
        document.getElementById('lastName').style.borderWidth = "3px";
    }
    else {
        document.getElementById('lastName').style.borderColor = "#ced4da";
        document.getElementById('lastName').style.borderWidth = "1px";
    }

    if (!mail_control.test(emailAddress)){
        document.getElementById('emailAddress').style.borderColor = "red";
        document.getElementById('emailAddress').style.borderWidth = "3px";
    }
    else {
        document.getElementById('emailAddress').style.borderColor = "#ced4da";
        document.getElementById('emailAddress').style.borderWidth = "1px";
    }
	
    if (!phon_control.test(phoneNumber)){
        document.getElementById('phoneNumber').style.borderColor = "red";
        document.getElementById('phoneNumber').style.borderWidth = "3px";
    }
    else {
        document.getElementById('phoneNumber').style.borderColor = "#ced4da";
        document.getElementById('phoneNumber').style.borderWidth = "1px";
    }

    if (!pass_control.test(pass)){
        document.getElementById('pass').style.borderColor = "red";
        document.getElementById('pass').style.borderWidth = "3px";
    }
    else {
        document.getElementById('pass').style.borderColor = "#ced4da";
        document.getElementById('pass').style.borderWidth = "1px";
    }

    if (!(pass==pass2)){
        document.getElementById('pass2').style.borderColor = "red";
        document.getElementById('pass2').style.borderWidth = "3px";
    }
    else {
        document.getElementById('pass2').style.borderColor = "#ced4da";
        document.getElementById('pass2').style.borderWidth = "1px";
    }
    
}