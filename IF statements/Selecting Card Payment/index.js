document.getElementById("myButton").onclick = function() {
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");
  
    if (visaBtn.checked) {
      paymentmessage.innerText = "You are paying with a Visa Card";
    } else if (mastercardBtn.checked) {
      paymentmessage.innerText = "You are paying with a Master Card";
    } else if (paypalBtn.checked) {
      paymentmessage.innerText = "You are using PayPal";
    } else {
      paymentmessage.innerText = "You must select a type of ppaymentmessage.innerText";
  };
}
