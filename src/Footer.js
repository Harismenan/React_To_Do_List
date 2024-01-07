import React from "react";

const Footer = ({ length }) => {
  const year = new Date();
  return (
    <footer>
      <p>
        Number of {length === 1 ? "item" : "items"} {length}
      </p>
    </footer>
  );
};

export default Footer;
