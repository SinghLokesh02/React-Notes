import React from "react";
import "./style.css";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import { useState, useEffect } from "react";

// Swiggy card component
const App = () => {
  const [resData, setResData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.6093912&lng=75.1397935&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let json = await data.json();
    console.log(json);
    setResData(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  // Filter data
  function Hello() {
    let filteredList = resData.filter((element) => element.info.avgRating >= 4);
    setResData(filteredList);
  }
  return (
    <div>
      <Navbar />

      <div className="filter-search">
        <button className="top-restaurants" onClick={Hello}>
          Top Rated Restaurant
        </button>
        <input type="text" placeholder="Search Restaurants" />
      </div>

      <div className="card-container">
        {resData.map((res) => {
          return <Card resData={res} key={res.info.id} />;
        })}
      </div>
    </div>
  );
};

export default App;
