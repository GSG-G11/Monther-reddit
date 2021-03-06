const postInput = document.querySelector("#post-input");
const postForm = document.querySelector(".post-form");
const message = document.querySelector(".message");

postForm.addEventListener("submit", (ele) => {
  ele.preventDefault();

  const { value } = postInput;

  fetch("/addpost", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ value }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));

  postInput.value = "";
  message.textContent = "Post Added";
  message.style.color = "green";

  const clearMessage = setTimeout(() => {
    message.textContent = "";
    location.reload();
  }, 3000);
});
