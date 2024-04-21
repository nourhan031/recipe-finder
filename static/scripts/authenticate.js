function signup_redirect() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm_password").value;
  var role = document.getElementById("role").value;
  let username = document.getElementById("username").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return false;
  }
  alert("welcome " + username + "!");

  if (role === "admin") {
    logged_in_admin = true;
    localStorage.setItem("loggedAdmin", true);
    localStorage.setItem("loggedUser", false);
    window.location.href = "/templates/admin/admin_dashboard.html";
  } else {
    localStorage.setItem("loggedUser", true);
    localStorage.setItem("loggedAdmin", false);  
    window.location.href = "/templates/base.html";
  }
  return false;
}

function login_redirect() {
  let username = document.getElementById("username").value;
  let role = document.getElementById("role").value;
  alert("welcome " + username + "!");
  if (role === "admin") {
    localStorage.setItem("loggedAdmin", true);
    localStorage.setItem("loggedUser", false);
    window.location.href = "/templates/admin/admin_dashboard.html";
  } else {
    localStorage.setItem("loggedUser", true);
    localStorage.setItem("loggedAdmin", false);
    window.location.href = "/templates/base.html";
  }
  return false;
}
