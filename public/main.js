const contactForm = document.querySelector("#contact");
const successNotification = document.querySelector("#success_notification");
const errorNotification = document.querySelector("#error_notification");
const successLoader = document.querySelector("#success_loader");
const MAIL_URL = "https://formsubmit.co/ajax/323c0c7ba338f5cf39db0998060a3a60 ";

contactForm.addEventListener("submit", handleSubmit);
successNotification.addEventListener("click", (e) =>
  thisNotification(e, "#success_notification")
);
errorNotification.addEventListener("click", (e) =>
  thisNotification(e, "#error_notification")
);

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

function thisNotification(event, notification) {
  let thisNotification = event.target.closest(notification);
  handleClosed(thisNotification);
}

function handleClosed(notification) {
  notification.classList.toggle("hidden");
}
