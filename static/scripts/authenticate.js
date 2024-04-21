function signup_redirect() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm_password").value;
  var role = document.getElementById("role").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return false;
  }
  if (role === "admin") {
    if(logged_in_user){
      logged_in_user = !logged_in_user;
      alert('logged out as user');
    }
    alert('logged in as admin');
    logged_in_admin = true;
    window.location.href = "/templates/admin/admin_dashboard.html";
  } else {
    if(logged_in_admin){
      logged_in_admin = !logged_in_admin;
      alert('logged out as admin');
    }
    logged_in_user = true;
    window.location.href = "/templates/base.html";
    alert('logged out as user');
  }
  return false;
}

function login_redirect() {
  var role = document.getElementById("role").value;
  if (role === "admin") {
    window.location.href = "/templates/admin/admin_dashboard.html";
  } else {
    window.location.href = "/templates/base.html";
  }
  return false;
}
