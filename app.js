function getUsers() {
    var users = localStorage.getItem("users");
    if (users) {
        users = JSON.parse(users);
    } else {
        users = [];
    }
    return users;
}

function register() {
    var name = document.getElementById("r-name");
    var email = document.getElementById("r-email");
    var password = document.getElementById("r-password");

    // Email and Password validation regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (name.value === "" || email.value === "" || password.value === "") {
        Swal.fire({
            title: 'Error!',
            text: 'Please fill all the fields',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return;
    }

    if (!emailRegex.test(email.value)) {
        Swal.fire({
            title: 'Error!',
            text: 'Please enter a valid email address',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return;
    }

    if (!passwordRegex.test(password.value)) {
        Swal.fire({
            title: 'Error!',
            text: 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return;
    }

    var users = getUsers();
    var user = {
        name: name.value,
        email: email.value,
        password: password.value
    };

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    name.value = "";
    email.value = "";
    password.value = "";

    Swal.fire({
        title: 'Registration Complete',
        text: 'You have successfully Registered!',
        icon: 'success',
        confirmButtonText: 'Login',
        customClass: {
            confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = 'login.html';
        }
    });
}
