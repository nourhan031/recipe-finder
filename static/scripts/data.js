localStorage.clear();

let logged_in_user = localStorage.getItem('loggedUser');
if (logged_in_user === null) {
    logged_in_user = false;
    localStorage.setItem("loggedUser", logged_in_user);
} else {
    logged_in_user = JSON.parse(logged_in_user);
}

let logged_in_admin = localStorage.getItem('loggedAdmin');
if (logged_in_admin === null) {
    logged_in_admin = false;
    localStorage.setItem("loggedAdmin", logged_in_admin);
} else {
    logged_in_admin = JSON.parse(logged_in_admin);
}
