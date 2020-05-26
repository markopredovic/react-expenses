import React from "react";

const InlineMessage = ({ children }) => {
  return <span className="text-danger">{children}</span>;
};

export default InlineMessage;
