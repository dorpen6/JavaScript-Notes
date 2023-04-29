
document.getElementById("myButton").onclick = function(){    //so when we click the button, the program will do:
    const myCheckBox = document.getElementById("myCheckBox") //makes it easy to store and use
    if(myCheckBox.checked)
    {
        console.log("Selected");


    }
    else
    {
        console.log("Not Selected");

    }    
}
