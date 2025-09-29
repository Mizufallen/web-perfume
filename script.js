function buyNow(product){
  
  const message = `Thanks — you've clicked Buy for "${product}". We'll contact you to complete your order.`;
  console.log(message);
  alert(message); // Temporary: Will be replaced by a smooth Toast
}

function moreInfo(product){
  
  console.log(`More info: ${product} is a curated scent. Visit contact@Lumé-perfumes.example for details.`);
  alert(`More info: ${product} is a curated scent. Visit contact@Lumé-perfumes.example for details.`); // Temporary
}

function subscribePrompt(){
  
  const email = prompt("Enter your email to join the waitlist:");
  if(email){
    console.log("Thanks — we've added " + email + " to the waitlist!");
    alert("Thanks — we've added " + email + " to the waitlist!"); 
  }
}
