import React from "react";
import { useEffect, useState } from "react";
import "./Card.css";

function Card() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadCard = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const apiData = await response.json();

      setData(apiData);
    };
    loadCard();
  }, []);

  return (
    <div className="container">
      {data.map((post) => (
        <div key={post.id} className="card_details">
          <img
            className="profile_img"
            src="https://myrareid.co/wp-content/uploads/2022/05/My-Rare-ID-Sample-Profile.png"
            alt=""
          />
          <h2>{post.username}</h2>
          <div className="icon_container">
            <h3>
              <i className="fas fa-envelope"></i>
              {"  " + post.email}
            </h3>
            <h3>
              <i className="fas fa-phone"></i>
              {"  " + post.phone}
            </h3>
            <h3>
              <i className="fas fa-globe"></i>
              {"  " + post.website}
            </h3>
            <h3>
              <i className="fas fa-map-marker-alt"></i>
              {"  " + post.address.city}
            </h3>
          </div>
          <div className="social_icons">
            <a href="/">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="/">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="/">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
