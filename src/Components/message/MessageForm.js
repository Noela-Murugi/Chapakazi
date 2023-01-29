import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Message.css";
import MessageInput from "./MessageInput";
import Messages from "./Messages";

function MessageForm() {
  const [customerMessage, setCustomerMessage] = useState([]);
  const [name, setName] = useState([]);

  const handyid = localStorage.getItem("profileId");
  const token = localStorage.getItem("handyman");
  const myId = window.location.pathname;
  const id = myId.slice(-1);

  useEffect(() => {
    fetch(
      `https://chapakazi-server-production.up.railway.app/customers/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "Application/json",
        },
      }
    )
      .then((r) => r.json())
      .then((user) => setName(user))
      .then((user) => setCustomerMessage(user.messages));
  }, [token, id]);
  console.log(customerMessage);
  const filteredMessages = customerMessage?.filter((message) => message.handyman_id === handyid)?.map((message) => message);
  console.log(filteredMessages);
  console.log(handyid);
  console.log(name);

  return (
    <div className="chat">
      <div className="chatbar">
        <Link to={"/messages"}>
          <button className="back-button">back</button>
        </Link>
        <span className="chat-username">{name.username}</span>
      </div>
      <div className="text-message">
        <div>
          <Messages message={filteredMessages} />
        </div>
      </div>
      <MessageInput handyid={handyid} customerId={id} />
    </div>
  );
}

export default MessageForm;
