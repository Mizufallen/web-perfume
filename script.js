// script.js
function buyNow(product){
  // lightweight modal substitute
  const message = `Thanks — you've clicked Buy for "${product}". We'll contact you to complete your order.`;
  alert(message);
}

function moreInfo(product){
  alert(`More info: ${product} is a curated scent. Visit contact@ga-perfumes.example for details.`);
}

function subscribePrompt(){
  const email = prompt("Enter your email to join the waitlist:");
  if(email){
    alert("Thanks — we've added " + email + " to the waitlist!");
  }
}
