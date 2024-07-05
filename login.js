function getUsers() {
    var users = localStorage.getItem("users");
    if (users) {
        users = JSON.parse(users);
    } else {
        users = [];
    }
    return users;
}

function login() {
    var email = document.getElementById("l-email");
    var password = document.getElementById("l-password");

    if (email.value === "" || password.value === "") {
        Swal.fire({
            title: 'Error!',
            text: 'Please fill all the fields',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return;
    }

    var users = getUsers();
    var saveUser = {};
    for (let i = 0; i < users.length; i++) {
        if (email.value === users[i].email) {
            saveUser = users[i];
            break;
        }
    }

    if (saveUser.email) {
        if (saveUser.password === password.value) {
            Swal.fire({
                title: 'Login Complete',
                text: 'You have successfully Login!',
                icon: 'success',
                confirmButtonText: 'Kanban Board',
                customClass: {
                    confirmButton: 'btn btn-primary'
                },
                buttonsStyling: false
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = 'kanban.html';
                }
            });
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Invalid Password!',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'User not found!',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
}
