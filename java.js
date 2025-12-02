const buttons = document.querySelectorAll(".btn");
 
buttons.forEach((btn) => {
  btn.addEventListener("click", function() {
    alert("Je hebt geklikt op: " + btn.textContent);
  });
});
 function login() {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");
    const user = users.find(
        u => u.username === usernameInput && u.password === passwordInput
    );

    if (user) {
        localStorage.setItem("loggedInUser", user.username);
        window.location.href = "dashboard.html";
    } else {
        errorMessage.textContent = "Onjuiste gebruikersnaam of wachtwoord!";
    }
}