function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var message = messageInput.value;
    if (message.trim() !== "") {
        var chatWindow = document.getElementById("chat-window");
        var messageElement = document.createElement("div");
        messageElement.className = "message";
        
        var messageText = document.createElement("span");
        messageText.innerText = message;
        
        var deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.onclick = function() {
            messageElement.remove();
        };
        
        messageElement.appendChild(messageText);
        messageElement.appendChild(deleteButton);
        
        chatWindow.appendChild(messageElement);
        messageInput.value = "";
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
}
