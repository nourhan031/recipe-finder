function signup_redirect() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm_password").value;
  var role = document.getElementById("role").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return false;
  }

  if (role === "admin") {
    window.location.href = "/templates/admin/admin_dashboard.html";
  } else {
    window.location.href = "/templates/base.html";
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
