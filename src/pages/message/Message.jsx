import React from "react";

import { Link } from "react-router-dom";

import "./Message.scss";

const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="title">
          <Link to="/messages">MESSAGE </Link> Aaron Fang
        </span>
        <div className="messages">
          <div className="message">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore expedita reprehenderit asperiores ipsum eaque
              temporibus, deserunt, quia tempora nam, earum velit nostrum illum
              qui voluptatum iste nulla facere adipisci fugiat.
            </p>
          </div>
          <div className="message owner">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore expedita reprehenderit asperiores ipsum eaque
              temporibus, deserunt, quia tempora nam, earum velit nostrum illum
              qui voluptatum iste nulla facere adipisci fugiat.
            </p>
          </div>
          <div className="message">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore expedita reprehenderit asperiores ipsum eaque
              temporibus, deserunt, quia tempora nam, earum velit nostrum illum
              qui voluptatum iste nulla facere adipisci fugiat.
            </p>
          </div>
          <div className="message owner">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore expedita reprehenderit asperiores ipsum eaque
              temporibus, deserunt, quia tempora nam, earum velit nostrum illum
              qui voluptatum iste nulla facere adipisci fugiat.
            </p>
          </div>
          <div className="message owner">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore expedita reprehenderit asperiores ipsum eaque
              temporibus, deserunt, quia tempora nam, earum velit nostrum illum
              qui voluptatum iste nulla facere adipisci fugiat.
            </p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea
            name=""
            placeholder="write a message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button>send</button>
        </div>
      </div>
    </div>
  );
};

export default Message;
