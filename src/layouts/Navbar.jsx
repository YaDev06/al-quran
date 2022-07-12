import React, { useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState("");

  const keyDown = (e) => {
    if (e.key === "Enter") {
      window.location.href = `/corpus/${search}`;
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success py-2">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          THE QURAN
        </a>
        <div className="d-flex justify-content-around">
          <a
            href="https://t.me/YaDev_06"
            className="nav-link active text-white"
          >
            Telegram
          </a>
          <a
            href="https://mail.google.com/mail/u/yahyoxonmuhammadaliyev567@gmail.com"
            className="nav-link active text-white"
          >
            Gmail
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
