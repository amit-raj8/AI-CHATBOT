const messageInput = document.querySelector(".message-input");

const handleOutgoingMessage = (userMessage) => {
    const messageContent = ` <div class="message-text">
              ${userMessage}
            </div>`}
            createMessageElement(messageContent, "user-message");

messageInput.addEventListener("keydown", () => {
    const userMessage = e.target.value.trim();
    if(e.key === "Enter" && userMessage){
        handleOutgoingMessage(userMessage);
    }
})