import React from "react";

const Footer = () => {
  const styles = {
    padding: " 10px 20px",
    textAlign: "center",
    color: "#ccc",
    position: "absolute",
    bottom: "13px",
    left: "50%",
    transform: "translateX(-50%)",
    fontWeight: "bold"
  };

  const paraStyle = {
    color: "rgb(162 162 162)",
    padding: "0 2px",
    textDecoration: 'none',
    fontWeight: "bold"
  };

  return (
    <footer style={styles}>
      <p>
      <a style={paraStyle} href="https://github.com/codeWithTyson/">
          Faisal tariQ
        </a>
        &copy;
        <a style={paraStyle} href="https://devchallenges.io/">
          DevChallenges.io
        </a>
       
      </p>
    </footer>
  );
};

export default Footer;
