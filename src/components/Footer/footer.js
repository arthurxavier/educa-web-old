import React from "react";

import "./footer.css";

const Footer = () => (
  <footer className="bg-secondary p-3">
    <p className="text-light m-0 text-center">
      contato:{" "}
      <a className="text-light" href="mailto:contato@email.com">
        contato@email.com
      </a>
    </p>
  </footer>
);

export default Footer;
