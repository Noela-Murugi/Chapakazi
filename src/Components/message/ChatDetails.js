import React from "react";
import { Link } from "react-router-dom";

function ChatDetails({ name, image, id }) {
  return (
    <div>
      <Link to={`${id}`} custid={id}>
        <div className="chat-user">
          <img alt="" className="user-image" src={image} />
          <div className="users">
            <span className="user-name"> {name} </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ChatDetails;
