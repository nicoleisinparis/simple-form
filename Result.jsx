import React from "react";
const Result = ({ username, email, password1 }) => {
  return (
    <div>
      <p>
        <strong>Name:</strong> {username}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>password:</strong> {password1}
      </p>
    </div>
  );
};

export default Result;
