const form = document.querySelector("form");

function getdata(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const message = formData.get("message");

  fetch("http://localhost:8080/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json,",
    },
    body: JSON.stringify({ message }),
  });
}
form.addEventListener("submit", getdata);
