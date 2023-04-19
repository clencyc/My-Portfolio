const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".submit-bn");
const nameInput = document.querySelector("#user_name");
const emailInput = document.querySelector(".#user_email");
const messageInput = document.querySelector("#message");


const publickey = "bidOxXv27nGKAB1Bc";
const serviceID = "service_e6vkzei";
const templateID = "template_2z4ftsq";

emailjs.init(publickey);

//Add submit eventListener
contactForm.addEventListener("submit", e => {
//prevent form default behaviour
e.preventDefault();
//change button text
submitBtn.innerText = "Just A Moment...";
//Get all input field values
const inputFields = {
name: nameInput.value,
email: emailInput.value,
message: messageInput.value

}

/*send the mail
(add service, template ID and  input field values)*/
emailjs.send(serviceID, templateID, inputFields)
.then(() =>{
//change button text

submitBtn.innerText = "Message Sent Successfully";

nameInput.value = "";
emailInput.value = "";
messageInput.value = "";

}, (error) => {
//console log the error
console.log(error);
//change button text
submitBtn.innerText = "Something went wrong";

}
})

/*
 function sendMail() {
 var params = {
 name: document.getElementById("name").value,
 email: document.getElementById("email").value,
 message: document.getElementById("message").value,
 };

 const serviceID = "service_e6vkzei";
 const templateID = "template_2z4ftsq";

 emailjs
 .send(serviceID, templateID, params)
 .then(res) => {
 document.getElementById("name").value = "";
 document.getElementById("email").value = "";
 document.getElementById("message").value = "";

console.log(res);;
alert("Your message sent successfully");


 })
 .catch((err) => console.log(err));
}

(document).ready(function() :void{

})
*/





