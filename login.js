function validateForm()
{
    var username = document.forms["box"]["username"].value;
    var password = document.forms["box"]["password"].value;
   

    if(username == "student" || password =="1234588") {
        document.getElementById("errorMsg").innerHTML ="Please fill the required fields";
        return false;
    }
    else if(password.length<8)
    {
        document.getElementById("errorMsg").innerHTML ="Your password must include atleast 8 characters";
        return false;
    }
    else
    {
        alert("Successfully logged in");
    }
}
