let temp = window.prompt("enter the temp");
let sunny = true;
if(temp > 10 && temp < 30 && sunny) //when we use and both of the conditions should be true
{
    console.log("the weather is good");
}
else
{
    console.log("the weather is bad");
}



if(temp <= 10 || temp >=30)
{
    console.log("the weather is bad");
}
else
{
    console.log("the weather is good"); 
}