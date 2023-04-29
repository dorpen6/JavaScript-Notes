//switch makes it easier to write the program like this, instead writing it using if else.

let grade = window.prompt("Enter your grade");

switch(grade){
    case "A":
        console.log("Awasome!");
        break;
    case "b":
        console.log("Good!!");
        break;
    case "C":
        console.log("Okay..");
        break
    case "D":
        console.log("Passed... barely");
        break;
    case "F":
        console.log("You FAILED!");
        break;
    default:
        console.log(grade, "is not a letter grade!");

}



