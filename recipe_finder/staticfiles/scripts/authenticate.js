function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      // Check if the cookie starts with the name we are looking for
      if (cookie.substring(0, name.length + 1) === name + "=") {
        // Extract and decode the cookie value
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

function signup_redirect() {
  var password = document.getElementById("id_password1").value;
  var confirmPassword = document.getElementById("id_password2").value;
  var role = document.getElementById("id_role").value;
  var email = document.getElementById("id_email").value;
  var username = document.getElementById("id_username").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return false;
  }

  // Prepare form data for submission
  var formData = new FormData();
  formData.append("username", username);
  formData.append("password1", password);
  formData.append("password2", confirmPassword);
  formData.append("email", email);
  formData.append("role", role);

  // Perform AJAX request to Django view for signup
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/signup/", true);
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  xhr.setRequestHeader("X-CSRFToken", getCookie("csrftoken"));

  xhr.onload = function () {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      if (response.success) {
        if (role === "admin") {
          // Save admin credentials in local storage (consider more secure methods in production)
          localStorage.setItem("admin_username", username);
          localStorage.setItem("admin_password", password);

          alert("Sign-Up successfull, Logged in as admin");
          localStorage.setItem("loggedUser", false);
          localStorage.setItem("loggedAdmin", true);

          window.location.href = "/admins/";
        } else {
          localStorage.setItem("user_username", username);
          localStorage.setItem("user_password", password);

          localStorage.setItem("loggedUser", true);
          localStorage.setItem("loggedAdmin", false);
          window.location.href = "/";
          alert("Sign-Up successfull, Logged in as user");
        }
      } else {
        alert("Signup failed: " + response.message);
      }
    } else {
      alert("Request failed. Status: " + xhr.status);
    }
  };

  xhr.onerror = function () {
    alert("Request error.");
  };

  xhr.send(formData);

  return false; // Prevent default form submission
}

function login_redirect() {
  var role = document.getElementById("id_role").value;
  var username = document.getElementById("id_username").value;
  var password = document.getElementById("id_password").value;

  var formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);
  formData.append("role", role);

  // Perform AJAX request to Django view for login
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/login/", true);
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  xhr.setRequestHeader("X-CSRFToken", getCookie("csrftoken"));

  xhr.onload = function () {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      if (response.success) {
        if (role === "admin") {
          localStorage.setItem("loggedUser", false);
          localStorage.setItem("loggedAdmin", true);
          alert("Admin login successful");
          window.location.href = "/admins/";
        } else {
          localStorage.setItem("loggedUser", true);
          localStorage.setItem("loggedAdmin", false);
          alert("User login successful");
          window.location.href = "/";
        }
      } else {
        alert("Login failed: " + response.message);
      }
    } else {
      alert("Request failed. Status: " + xhr.status);
    }
  };

  xhr.onerror = function () {
    alert("Request error.");
  };

  xhr.send(formData);

  return false;
}
