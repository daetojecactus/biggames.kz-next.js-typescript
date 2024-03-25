//Верхний логотип
import React from "react";

export default function LogoTop() {
  return (
    <div className="logo-content">
      <a
        href="https://bi.group/"
        className="logo-link"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/images/bi-logo.svg" alt="Логотип" className="logo-image" />
      </a>
    </div>
  );
}
