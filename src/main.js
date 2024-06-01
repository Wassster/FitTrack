document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost:8080/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error("Invalid credentials");
        }
      })
      .then((data) => {
        window.location.href = "./src/main/web/registeren.html";
      })
      .catch((error) => {
        document.getElementById("message").textContent = error.message;
      });
  });
