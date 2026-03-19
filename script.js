const chatBox = document.getElementById("chat-box");
const emojiPicker = document.getElementById("emoji-picker");
const messageInput = document.getElementById("message");

// Toggle emoji picker
function toggleEmoji() {
  emojiPicker.style.display =
    emojiPicker.style.display === "none" ? "block" : "none";
}

// Add emoji to input
emojiPicker.addEventListener("emoji-click", event => {
  messageInput.value += event.detail.unicode;
});

// Send message
function sendMessage() {
  let username = document.getElementById("username").value;
  let message = messageInput.value;

  if (username === "" || message === "") {
    alert("Enter name and message");
    return;
  }

  let msgDiv = document.createElement("div");
  msgDiv.className = "message";
  msgDiv.innerText = username + ": " + message;

  chatBox.appendChild(msgDiv);

  messageInput.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}