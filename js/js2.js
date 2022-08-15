function Button_onclick() {
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var emailAddress = document.getElementById("emailAddress").value;
    var pass = document.getElementById("pass").value;
    var pass2 = document.getElementById("pass2").value;

    var patt1 = /[^a-zA-Z" "]/
    var patt2 = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    var patt3 = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    var patt4 = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/

    // if (!patt1.test(firstName))
    // alert("ok")
    // else{
    //     alert("mooooooz")
    // }

    // if (!patt.test(lastName))
    // alert("ok")
    // else{
    //     alert("mooooooz las")
    // }
    
    // if (patt2.test(emailAddress))
    // alert("ok")
    // else{
    //     alert("mooooooz las")
    // }

    // if (patt3.test(phoneNumber))
    // alert("ok")
    // else{
    //     alert("mooooooz las")
    // }

    // if (patt4.test(pass))
    // alert("ok")
    // else{
    //     alert("mooooooz las")
    // }

    // if (pass==pass2)
    //      alert("ok")
    // else{
    // document.getElementById('pass2').style.borderColor = "red";
    // document.getElementById('pass2').style.borderWidth = "3px";
    // }


    if ((((!patt1.test(firstName)) && (!patt1.test(lastName))) && ((patt2.test(emailAddress)) && (patt3.test(phoneNumber)))) && ((patt4.test(pass)) && (pass==pass2))) {
        window.open("./page2/pag2.html");
    }

    if (patt1.test(firstName)){
        document.getElementById('firstName').style.borderColor = "red";
        document.getElementById('firstName').style.borderWidth = "3px";
    }
    else {
        document.getElementById('firstName').style.borderColor = "#ced4da";
        document.getElementById('firstName').style.borderWidth = "1px";
    }

    if (patt1.test(lastName)){
        document.getElementById('lastName').style.borderColor = "red";
        document.getElementById('lastName').style.borderWidth = "3px";
    }
    else {
        document.getElementById('lastName').style.borderColor = "#ced4da";
        document.getElementById('lastName').style.borderWidth = "1px";
    }

    if (!patt2.test(emailAddress)){
        document.getElementById('emailAddress').style.borderColor = "red";
        document.getElementById('emailAddress').style.borderWidth = "3px";
    }
    else {
        document.getElementById('emailAddress').style.borderColor = "#ced4da";
        document.getElementById('emailAddress').style.borderWidth = "1px";
    }
	
    if (!patt3.test(phoneNumber)){
        document.getElementById('phoneNumber').style.borderColor = "red";
        document.getElementById('phoneNumber').style.borderWidth = "3px";
    }
    else {
        document.getElementById('phoneNumber').style.borderColor = "#ced4da";
        document.getElementById('phoneNumber').style.borderWidth = "1px";
    }

    if (!patt4.test(pass)){
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