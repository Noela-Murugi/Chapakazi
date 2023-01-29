import React, { useState, useEffect } from "react";
import Chat from "./Chat";
import "./Message.css";

function SideBar() {
  const [texts, setTexts] = useState([]);
  const [handyman, setHandyman] = useState([]);
  const [clicked, setClicked] = useState(false);

  const token = localStorage.getItem("handyman");
  const id = localStorage.getItem("profileId");

  useEffect(() => {
    fetch(`https://chapakazi-server-production.up.railway.app/handymen/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "Application/json",
      },
    },[])
      .then((r) => r.json())
      .then((user) => setHandyman(user));
  }, [token, id]);
  console.log(handyman);
  useEffect(() => {
    fetch("https://chapakazi-server-production.up.railway.app/messages")
      .then((r) => r.json())
      .then((data) => setTexts(data));
  }, []);
  console.log(texts);
  console.log(localStorage.getItem("profileId"));

  const myText = texts?.filter((txt) => {
    return (txt.handyman_id = id);
  });
  const customers = [...new Set(texts?.map((txt) => txt.customer_id))];
  console.log(myText);
  console.log(customers);

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <h1 className="sidebar-header">CHATS</h1>
      </div>
      <div className="chat-div">
        <Chat
          myText={myText}
          customers={customers}
          setClicked={setClicked}
          clicked={clicked}
        />
      </div>
    </div>
  );
}

export default SideBar;
