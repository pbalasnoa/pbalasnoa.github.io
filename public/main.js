const contactForm = document.querySelector("#contact");
const successNotification = document.querySelector("#success_notification");
const errorNotification = document.querySelector("#error_notification");
const successLoader = document.querySelector("#success_loader");
const MAIL_URL = "https://formsubmit.co/ajax/edfd48625b8768058364c54bd3bd4eba";

contactForm.addEventListener("submit", handleSubmit);
successNotification.addEventListener("click", handleClosed);
errorNotification.addEventListener("click", handleClosed);

function handleSubmit(event) {
  successLoader.classList.replace("hidden", "inline");
  event.preventDefault();
  const formData = new FormData(this);

  fetch(MAIL_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  })
    .then((response) => {
      if (!response.ok) throw Error(response.status);

      return response.json();
    })
    .then(() => {
      this.reset();
      successLoader.classList.replace("inline", "hidden");
      successNotification.classList.toggle("hidden");
    })
    .catch(() => {
      successLoader.classList.replace("inline", "hidden");
      errorNotification.classList.toggle("hidden");
    });
}

function handleClosed(event) {
  event.target.classList.toggle("hidden");
}
