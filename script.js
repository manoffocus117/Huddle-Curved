const submit_button = document.getElementById("submit");
const message = document.getElementById("message");

submit_button.addEventListener("click", (event) => {
      event.preventDefault();
      const email = document.getElementById("email");

      if (email.value === "") {
            message.innerText = "Email address is required";
            email.style.border = "2px solid red";
      } else if (!email.value.includes("@")) {
            message.innerText = "Invalid email address";
            email.style.border = "2px solid red";
      }

      if (email.value && email.value.includes("@")) {
            message.innerText = "";
            email.style.border = "none";
      }
});
