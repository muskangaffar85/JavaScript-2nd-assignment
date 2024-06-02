let password = prompt("Enter your password");
for (let i = 0; i < password.length; i++) {
    if (
        (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 122) ||
    (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 57)
) {
    if (password.length <= 6) {
        if (
            Number(password.slice(0,1))> 0 &&
            Number(password.slice(0,1))<= 9
        ) {
           document.write("<h1> Password should not start with a number</h1> ");
           break; 
        }else{
            document.write(
                "<h1> Congratulation ! Your password is " + password + "</h1>");
                break;
        }
    } else {
        document.write("<h1> password must be 6 characters long</h1>");
    break;
    }
  } else {
    document.write("<h1> Enter a valid password </h1>");
    break;
  }
}