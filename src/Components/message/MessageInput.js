import React, { useState } from "react";

function MessageInput({ handyid, customerId }) {
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("handyman");

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      customer_id: `${customerId}`,
      handyman_id: `${handyid}`,
      message: `${message}`,
    };
    fetch("https://chapakazi-server-production.up.railway.app/messages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((info) => console.log(info));

    setMessage("");
  }

  return (
    <div className="input">
      <div className="inputdiv">
        <form>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write a message"
            className="message-input"
          />
        </form>
      </div>
      <button onClick={handleSubmit} className="send-button">
        send
      </button>
    </div>
  );
}

export default MessageInput;
