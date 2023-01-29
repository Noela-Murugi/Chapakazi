import React from "react";
import Text from "./Text";

function Messages({ message }) {
  return (
    <div className="text-veiw">
      {message.map((msg) => (
        <Text message={msg.message} key={msg.id} />
      ))}
    </div>
  );
}

export default Messages;
