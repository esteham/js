function validForm() {
  var name1 = document.getElementById("fname").value;
  var name2 = document.getElementById("lname").value;
  var pw = document.getElementById("pw1").value;
  var pw2 = document.getElementById("pw2").value;

  if (name1 == "") {
    document.getElementById("blankmsg").innerHTML = "***Fill the first name";
    return false;
  }

  if (!isNaN(name1)) {
    document.getElementById("blankmsg").innerHTML =
      "***Only Characters are Allowed";
    return false;
  }

  if (!isNaN(name2)) {
    document.getElementById("blankmsg").innerHTML =
      "***Only Characters are Allowed";
    return false;
  }

  if (pw == "") {
    document.getElementById("message1").innerHTML =
      "***Please Enter Your Password";
    return false;
  }

  if (pw2 == "") {
    document.getElementById("message1").innerHTML = "***Confirm Your Passwordd";
    return false;
  }

  if (pw.length < 8) {
    document.getElementById("message1").innerHTML =
      "***Password should be at least 8 characters";
    return false;
  }

  if (pw.length > 15) {
    document.getElementById("message1").innerHTML =
      "***Password should not be more than 15 characters";
    return false;
  }

  if (pw2 != pw) {
    document.getElementById("message2").innerHTML =
      "***Password does not match";
    return false;
  } else {
    document.getElementById("message2").innerHTML = "";
    alert("Your Registration done Successfull");
    document.write("Form data has been submitted");
  }
}
