let loginError;

$(document).ready(function() {
  loginError = $("#loginError");
  loginError.hide();

  $("#loginForm").submit(function(event) {
    event.preventDefault();
    let user = $("#user").val();
    let password = $("#password").val();
  
    if(user == "user" && password == "qwer1234") {
      window.location.href = "home.html";
    } else {
      loginError.show();
    }
    event.preventDefault();
  });
});
