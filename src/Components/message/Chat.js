import React, { useEffect, useState } from "react";
import ChatDetails from "./ChatDetails";
import "./Message.css";

function Chat({ customers, clicked, setClicked, myText }) {
  console.log(customers);
  const [customer, setCustomer] = useState([]);
  const token = localStorage.getItem("handyman");
  const [loading, setLoading] = useState("idle");

  useEffect(() => {
    setLoading("loading");
    fetch(`https://chapakazi-server-production.up.railway.app/customers`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "Application/json",
      },
    })
      .then((r) => r.json())
      .then((user) => {
        setCustomer(user);
        setLoading("idle");
      });
  }, [token]);

  function status() {
    if (loading === "loading") {
      return <h1>Loading</h1>;
    } else {
      const data = customers?.map((cust) => {
        return customer?.find((obj) => obj.id === cust);
      });
      const chat = data?.map((dt) => (
        <ChatDetails
          key={dt.id}
          id={dt.id}
          name={dt.username}
          image={dt.image}
          clicked={clicked}
          setClicked={setClicked}
        />
      ));
      return chat;
    }
  }

  console.log(customer);

  console.log(loading);

  console.log(myText);

  return <div>{status()}</div>;
}

export default Chat;
