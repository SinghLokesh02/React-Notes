import React from "react";
import "./style.css";
import Navbar from "./Components/Navbar";
import { useState, useEffect } from "react";
import Shimmer from "./Components/Shimmer";
import FilterSearch from "./Components/FilterSearch";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { BrowserRouter, Routes, Route } from "react-router";
import ErrorPage from "./Components/ErrorPage";
import RestaurantMenu from "./Components/RestaurantMenu";

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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let json = await data.json();
    // Data 0
    setResData0Title(json?.data?.cards[0]?.card?.card?.header?.title);
    setResData0(
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );
    // Data 1
    setResData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setResDataTitle(json?.data?.cards[1]?.card?.card?.header?.title);

    // Data 4
    setResData4(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setResData4Title(json?.data?.cards[2]?.card?.card?.title);
  };

  // Filter data
  function filterData() {
    let filteredList = resData.filter((element) => element.info.avgRating >= 4);
    setResData(filteredList);
  }

  // Search Data
  let searchData = (e) => {
    if (e.target.value === "") {
      setResData(resData);
      return;
    }
    let searchData = resData.filter((element) =>
      element.info.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setResData(searchData);
  };

  // Sort Data
  function SortData(e) {
    let copyOfRestaurant = [...resData];
    if (e.target.value === "sortByRating") {
      copyOfRestaurant.sort((a, b) => a.info.avgRating - b.info.avgRating);
      setResData(copyOfRestaurant);
    }
    if (e.target.value === "sortByFoodName") {
      copyOfRestaurant.sort((a, b) => {
        if (a.info.name > b.info.name) return 1;
        return -1;
      });
      setResData(copyOfRestaurant);
    }
    if (e.target.value === "sortByNearest") {
      copyOfRestaurant.sort((a, b) => {
        let A = a.info.sla.slaString.slice(0, 2);
        let B = b.info.sla.slaString.slice(0, 2);
        return A - B;
      });
      setResData(copyOfRestaurant);
    }
  }
  return resData.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      {/* <Navbar />
      <FilterSearch
        filterData={filterData}
        SortData={SortData}
        searchData={searchData}
      />
      <Body
        resData0Title={resData0Title}
        resData0={resData0}
        resDataTitle={resDataTitle}
        resData={resData}
        resData4Title={resData4Title}
        resData4={resData4}
      /> */}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Body
                resData0Title={resData0Title}
                resData0={resData0}
                resDataTitle={resDataTitle}
                resData={resData}
                resData4Title={resData4Title}
                resData4={resData4}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/restaurant/:resId" element={<RestaurantMenu />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
