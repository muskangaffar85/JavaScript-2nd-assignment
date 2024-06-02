let input = prompt("Enter your username:"); 
let Valid = false;

for (let i = 0; i < input.length; i++) {
    if (
        input[i] === "@"||
        input[i] === "."|| 
        input[i] === ","||
        input[i] === "!"
    ) 
     {
      alert("please enter a valid username");
      Valid = true;  
    }
}
if (!Valid) {
    alert("Your username is: " + input);
}