import React from "react";
import "./style.css";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Banner from "./Components/Banner";
import { useState, useEffect } from "react";

// Swiggy card component
const App = () => {
  const [resData, setResData] = useState([]);
  const [resDataTitle, setResDataTitle] = useState([]);
  const [resData4, setResData4] = useState([]);
  const [resData4Title, setResData4Title] = useState([]);
  // For banner
  const [resData0, setResData0] = useState([]);
  const [resData0Title, setResData0Title] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.6093912&lng=75.1397935&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let json = await data.json();
    // Data 0
    setResData0Title(
      json.data.cards[0].card.card.header.title
    );
    setResData0(
      json.data.cards[0].card.card.gridElements.infoWithStyle.info
    );
    // Data 1
    setResData(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setResDataTitle(
      json.data.cards[1].card.card.header.title
    );

    // Data 4
    setResData4(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setResData4Title(
      json.data.cards[2].card.card.title
    );
  };

  // Filter data
  function filterData() {
    let filteredList = resData.filter((element) => element.info.avgRating >= 4);
    setResData(filteredList);
  }

  // Sort Data
  function SortData(e){
    let copyOfRestaurant = [...resData];
    if(e.target.value === "sortByRating"){
      copyOfRestaurant.sort((a,b) =>  a.info.avgRating - b.info.avgRating)
      setResData(copyOfRestaurant)
    }
    if(e.target.value === "sortByFoodName"){
      copyOfRestaurant.sort((a,b)=> {
        if(a.info.name > b.info.name)return 1;
        return -1;
      })
      setResData(copyOfRestaurant)
    }
    if(e.target.value === "sortByNearest"){
      copyOfRestaurant.sort((a,b)=>{
        let A = a.info.sla.slaString.slice(0,2);
        let B = b.info.sla.slaString.slice(0,2);
        return A - B;
      })
      setResData(copyOfRestaurant)
    }
     
  }
  return (
    <div>
      <Navbar />

      <div className="filter-search">
        <button className="top-restaurants" onClick={filterData}>
          Top Rated Restaurant
        </button>

        <select name="" id="" onChange={SortData}>
          <option disabled="disabled">Select</option>
          <option value="sortByRating">Sort by Rating</option>
          <option value="sortByNearest">Sort by Nearest</option>
          <option value="sortByFoodName">Sort by Food Name</option>
        </select>

        <input type="text" placeholder="Search Restaurants" onInput={(e)=>{
          if(e.target.value === ""){
            setResData(resData);
            return;
          }
          let searchData = resData.filter((element) => element.info.name.toLowerCase().includes(e.target.value.toLowerCase()))
          setResData(searchData);
        }} />
      </div>

      <div className="main">
      <h1>{resData0Title}</h1>
      <div className="banner-container">
        {resData0.map((res) => {
          return <Banner resData={res} key={res.id} />;
        })}
      </div>
      <h1>{resDataTitle}</h1>
      <div className="card-container">
        {resData.map((res) => {
          return <Card resData={res} key={res.info.id} />;
        })}
      </div>
      <h1>{resData4Title}</h1>
      <div className="card-container">
        {resData4.map((res) => {
          return <Card resData={res} key={res.info.id} />;
        })}
      </div>
    </div>
      </div>
  );
};

export default App;
