const promptForm = document.querySelector(".prompt-form");
const chatsContainer = document.querySelector(".chats-container");
const promptInput = promptForm.querySelector(".prompt-input");

let userMessage = "";

// Function to create a message element
const createMsgElement = (content, ...classes) => {
  const div = document.createElement("div");
  div.classList.add("message", ...classes);
  div.innerHTML = content;
  return div;
};

// Function to create a message element for the bot
const handleFormSubmit = (e) => {
  e.preventDefault();
  userMessage = promptInput.value.trim();
  if (!userMessage) return;

  promptInput.value = "";

  // generate user  mssg and add in the chats container
  const userMsgHTML = `<p class="message-text"></p>`;
  const userMsgDiv = createMsgElement(userMsgHTML, "user-message");
  userMsgDiv.querySelector(".message-text").textContent = userMessage;
  chatsContainer.appendChild(userMsgDiv);

  setTimeout(() => {
    // generate bot  mssg and add in the chats container in 600ms
    const botMsgHTML = `<img src="gemini-chatbot-logo.svg" class="avatar" />
          <p class="message-text">
            Just a sec.....
          </p>`;
    const botMsgDiv = createMsgElement(botMsgHTML, "bot-message", "loading");
    chatsContainer.appendChild(botMsgDiv);
  }, 600);
};

promptForm.addEventListener("submit", handleFormSubmit);
