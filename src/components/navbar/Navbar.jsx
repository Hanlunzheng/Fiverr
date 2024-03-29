import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Navbar.scss";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false); //

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "Aaron Fang",
    isSeller: true,
  };
  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <span className="text">fiverr</span>
          </Link>

          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser?.isSeller && <span>Become a seller</span>}
          {!currentUser && <button>Join </button>}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img
                src="https://img.freepik.com/premium-photo/fire-alphabet-letter-isolated-black-background_564276-8929.jpg?w=2000"
                alt=""
              />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link to="/gigs">
                        <span>Product</span>
                      </Link>

                      <Link to="/add">
                        <span>Add New Product</span>
                      </Link>
                    </>
                  )}
                  <Link to="/orders">
                    <span>Orders</span>
                  </Link>

                  <Link to="/message">
                    <span>Messages</span>
                  </Link>

                  <span>Logout</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {active && (
        <>
          <hr />
          <div className="menu">
            <span>Test</span>
            <span>Test2</span>
            <span>Test2</span>
            <span>Test2</span>
            <span>Test2</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
