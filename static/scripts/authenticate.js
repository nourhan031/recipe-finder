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

    alert("Logged in as admin");
    localStorage.setItem("loggedUser", false);
    localStorage.setItem("loggedAdmin", true);

    window.location.href = "/templates/admin/admin_dashboard.html";
  } else {
    localStorage.setItem("user_username", username);
    localStorage.setItem("user_password", password);

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

    if (storedAdminUsername === username && storedAdminPassword === password) {
      localStorage.setItem("loggedUser", false);
      localStorage.setItem("loggedAdmin", true);
      alert("Admin login successful");
      window.location.href = "/templates/admin/admin_dashboard.html";
    } else {
      alert("Admin login failed");
    }
  } else if (role == "user") {
    var storedUsername = localStorage.getItem("user_username");
    var storedUserPassword = localStorage.getItem("user_password");

    if (storedUsername === username && storedUserPassword === password) {
      localStorage.setItem("loggedUser", true);
      localStorage.setItem("loggedAdmin", false);
      alert("User login successful");
      window.location.href = "/templates/base.html";
    } else {
      alert("User login failed");
      return false;
    }
  }

  return false;
}
