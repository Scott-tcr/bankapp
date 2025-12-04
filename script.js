const buttons = document.querySelectorAll(".btn");
 
buttons.forEach((btn) => {
  btn.addEventListener("click", function() {
    alert("Je hebt geklikt op: " + btn.textContent);
  }) ;})

  function login() {
  
    const correctUsername = "admin";
    const correctPassword = "1234";

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const notification = document.getElementById("notification");

    if (username === correctUsername && password === correctPassword) {
        notification.innerHTML = "✅ Succesvol ingelogd!";
        notification.style.color = "green";
    } else {
        notification.innerHTML = "❌ Gebruikersnaam of wachtwoord incorrect!";
        notification.style.color = "red";
    }
}