import React from "react";
import NavigationBar from "../Components/NavigationBar";
import Heroslider from "../Components/Heroslider";
import "./HomePage.css";
import { Data } from "../Data/Data";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <NavigationBar />
      <Heroslider />
      <div className="adds-container">
        <span>" Comfort Zone "</span>
        <p>(a theory, proven by community action)</p>
        <p>
          We help people connect to themselves, community and the Planet.
          #BeOutside
        </p>
      </div>
      <div className="new-container">
        <div className="card-container">
          {Data.slice(0, 4).map((item) => (
            <div className="card" key={item.id}>
              <img
                className="card-image"
                src={item.image}
                alt={`Product ${item.id}`}
              />
              <div className="card-content">
                <h3 className="card-title">{item.brand}</h3>
                <p className="card-price">RS. {item.price}</p>
                <p className="card-size">Size: {item.size}</p>

                <Link to={"/details/${item.id}"} className="cart-button">
                  Add to Cart
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
