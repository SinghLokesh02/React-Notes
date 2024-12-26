import React from "react";
import "./style.css";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import resList from "./utils/mockdata";

// Swiggy card component
function Hello(){
  alert("Hello!");
}
const App = () => {
  return (
    <div>
      <Navbar />

      <button className="top-restaurants" onClick={Hello}>Top Rated Restaurant</button>
      <div className="card-container">
        {resList.map((res) => {
          return <Card resData={res} />;
        })}
      </div>
    </div>
  );
};

export default App;
