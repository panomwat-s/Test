document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");


  if (email === "test@example.com" && password === "123456") {
    message.style.color = "green";
    message.innerText = "Login สำเร็จ!";
  } else {
    message.style.color = "red";
    message.innerText = "Email หรือ Password ไม่ถูกต้อง";
  }
});

setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
