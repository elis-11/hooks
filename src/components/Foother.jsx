import React from "react";

export const Foother = () => {
  const today = new Date();
  return (
    <foother>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </foother>
  );
};
