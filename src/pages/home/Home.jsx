import React from "react";
import "./Home.scss";
import Feature from "../../components/feature/Feature";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import { cards } from "../../data";
import CatCard from "../../components/catCard/CatCard";

const Home = () => {
  return (
    <div>
      <Feature />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard item={card} key={card.id} />
        ))}
      </Slide>

      <div className="feature">
        <div className="container">
          <div className="left">
            <div className="title">
              <h1>A whole world of freelance talent at your fingertips</h1>
              <div className="item">
                <img src="./img/check.png" alt="" />
                <p>The best for every budget</p>
              </div>
              <p>Find the high-quality services at every price point</p>
              <div className="item">
                <img src="./img/check.png" alt="" />
                <p>The best for every budget</p>
              </div>
              <p>Find the high-quality services at every price point</p>

              <div className="item">
                <img src="./img/check.png" alt="" />
                <p>The best for every budget</p>
              </div>
              <p>Find the high-quality services at every price point</p>

              <div className="item">
                <img src="./img/check.png" alt="" />
                <p>The best for every budget</p>
              </div>
              <p>Find the high-quality services at every price point</p>
            </div>
          </div>
          <div className="right">
            <video src="./img/video.mp4" controls />
          </div>
        </div>
      </div>
      <div className="feature-box">
        <div className="feature-container">
          <div className="left">
            <h1>
              Fiverr <i>business</i>
            </h1>
            <h1>
              A business solution designed for <i>teams</i>
            </h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              <p>Connect to freelancers with proven business experience</p>
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              <p>
                Get matched with the perfect talent by a customer success
                manager
              </p>
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              <p>
                Manage teamwork and boost productivity with one powerful
                workspace
              </p>
            </div>
            <button>Explore Liverr Business</button>
          </div>
          <div className="right">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
