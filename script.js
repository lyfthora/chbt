const promptForm = document.querySelector(".prompt-form");
const chatsContainer = document.querySelector(".chats-container");
const promptInput = promptForm.querySelector(".prompt-input");

let userMessage = "";

// Function to create a message element
const createMsgElement = (content, className) => {
  const div = document.createElement("div");
  div.classList.add("message", className);
  div.innerHTML = content;
  return div;
};

// Function to create a message element for the bot
const handleFormSubmit = (e) => {
  e.preventDefault();
  userMessage = promptInput.value.trim();
  if (!userMessage) return;

  // generate user  mssg and add in the chats container
  const userMsgHTML = `<p class="message-text"></p>`;
  const userMsgDiv = createMsgElement(userMsgHTML, "user-message");
  userMsgDiv.querySelector(".message-text").textContent = userMessage;
  chatsContainer.appendChild(userMsgDiv);
};

promptForm.addEventListener("submit", handleFormSubmit);
