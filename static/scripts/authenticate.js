function signup_redirect() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm_password").value;
  var role = document.getElementById("role").value;
  var username = document.getElementById("username").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return false;
  }

  if (role === "admin") {
    // Save admin credentials in local storage
    localStorage.setItem("admin_username", username);
    localStorage.setItem("admin_password", password); // In a real app, consider hashing this

    if (typeof logged_in_user !== "undefined" && logged_in_user) {
      logged_in_user = !logged_in_user;
      alert("Logged out as user");
    }
    alert("Logged in as admin");
    localStorage.setItem("loggedUser", false);
    localStorage.setItem("loggedAdmin", true);

    window.location.href = "/templates/admin/admin_dashboard.html";
  } else {
    if (typeof logged_in_admin !== "undefined" && logged_in_admin) {
      logged_in_admin = !logged_in_admin;
      alert("Logged out as admin");
    }
    localStorage.setItem("loggedUser", true);
    localStorage.setItem("loggedAdmin", false);
    window.location.href = "/templates/base.html";
    alert("Logged out as user");
  }

  return false;
}

function login_redirect() {
  var role = document.getElementById("role").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (role === "admin") {
    // Check admin credentials in local storage
    var storedAdminUsername = localStorage.getItem("admin_username");
    var storedAdminPassword = localStorage.getItem("admin_password");

    localStorage.setItem("loggedUser", false);
    localStorage.setItem("loggedAdmin", true);
    if (storedAdminUsername === username && storedAdminPassword === password) {
      alert("Admin login successful");
      window.location.href = "/templates/admin/admin_dashboard.html";
    } else {
      alert("Admin login failed");
    }
  } else {
    localStorage.setItem("loggedUser", true);
    localStorage.setItem("loggedAdmin", false);
    window.location.href = "/templates/base.html";
  }
  return false;
}
