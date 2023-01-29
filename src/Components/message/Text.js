import React from "react";

function Text({ message, own }) {
  return (
    <div className="text-info">
      <div className={own ? "text owner" : "text"}>
        <p className={own ? "text-content" : "received-content"}>{message}</p>
      </div>
    </div>
  );
}

export default Text;
