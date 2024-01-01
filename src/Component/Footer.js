import React from "react";

export const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "84vh",
    width: "100%",
  };
  return (
    <>
      <footer
        className="bg-body-tertiary text-center text-lg-start"
        style={footerStyle}
      >
        <div
          className="text-center p-3"
          //   style="background-color: rgba(0, 0, 0, 0.05);"
        >
          © 2020 Copyright:
          <a className="text-body" href="https://mdbootstrap.com/">
            Quiz-Bunch.com
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
