/* =========================
   LOGIN SYSTEM (simple demo)
========================= */

document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("login-form");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if (username === "admin" && password === "admin") {
                localStorage.setItem("checkyAuth", "true");
                window.location.href = "dashboard/dashboard.html";
            } else {
                alert("Invalid credentials");
            }
        });
    }

    /* =========================
       AUTH CHECK
    ========================= */

    const isDashboard = window.location.pathname.includes("dashboard");

    if (isDashboard) {
        const auth = localStorage.getItem("checkyAuth");

        if (!auth) {
            window.location.href = "../index.html";
        }
    }

    /* =========================
       LOGOUT
    ========================= */

    const logout = document.getElementById("logout-link");

    if (logout) {
        logout.addEventListener("click", function () {
            localStorage.removeItem("checkyAuth");
            window.location.href = "../index.html";
        });
    }

});