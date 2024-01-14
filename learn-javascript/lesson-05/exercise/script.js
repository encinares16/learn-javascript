
document.getElementById('submitbtn').onclick = () => {

  let name = document.getElementById('name').value
  let subscribe = document.getElementById('subscribe')
  let gcash = document.getElementById('GCash')
  let paypal = document.getElementById('PayPal')
  let creditcard = document.getElementById('creditCard')

  let subscription;
  if(subscribe.checked){
    subscription = "Premium";
  } else {
    subscription = "Free";
  }

  let modeOfPayment
  switch (true) {
    case gcash.checked:
      modeOfPayment = "GCash"
      break;
    case paypal.checked:
      modeOfPayment = "PayPal"
      break;    
    case creditcard.checked:
      modeOfPayment = "Credit Card"
      break;
    default:
      modeOfPayment = "No selected method selected"
      break;    
  }

  document.getElementById('result').innerHTML = 
  `Name: ${name}` + "<br>" + 
  `Membership: ${subscription}` + "<br>" + 
  `Mode of Payment: ${modeOfPayment}` + "<br>"
}