
document.getElementById("myButton").onclick = function(){    //so when we click the button, the program will do:
    const myCheckBox = document.getElementById("myCheckBox") //makes it easy to store and use
    const visaBtn = document.getElementById("visaBtn")
    const mastercardBtn = document.getElementById("mastercardBtn")
    const paypalBtn = document.getElementById("paypalBtn")


    if(visaBtn.checked)
    {
        console.log("You are paying with a Visa Card")
    }
    else if(mastercardBtn.checked)
    {
        console.log("You are paying with a Master Card")
    }
    else if(paypalBtn.checked)
    {
        console.log("You are using PayPal")
    }
    else
    {
        console.log("You must select a type of payment")
    }    
}