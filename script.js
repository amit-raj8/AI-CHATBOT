const messageInput = document.querySelector(".message-input");

messageInput.addEventListener("keydown", () => {
    const userMessage = e.target.value.trim();
    if(e.key === "Enter" && userMessage){
        handleOutgoingMessage(userMessage);
    }
})