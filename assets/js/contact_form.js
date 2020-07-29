var myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (e) =>{
  e.preventDefault();

  /**  CHANGE URL FOR PRODUCTION */
  let url = 'http://staffitylab-api-stftylab-api.apps.us-east-1.starter.openshift-online.com/api/contact-form';


  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': 'SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
      },
    body: JSON.stringify({  
      name: myForm.name.value,
      email: myForm.email.value,
      subject: myForm.subject.value,
      message: myForm.message.value
      })
     }).then(response => response.json())
    .then((data) => {
        if (data == "success"){
          myForm.name.value = "";
          myForm.email.value = "";
          myForm.subject.value = "";
          myForm.message.value = "";

          alert("Thank you for your message, we will get back you to you as soon as possible.");
        }
        }).catch((err)=>console.log(err));

});

