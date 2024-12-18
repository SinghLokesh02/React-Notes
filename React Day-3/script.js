import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const title = ["Console", "Playground", "Adventure"];
const para = (
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia qui nisi
    eligendi esse aliquam sed eaque magnam voluptate. Atque fuga iusto eligendi
    asperiores nostrum obcaecati exercitationem ipsa optio consequatur nulla.
  </p>
);

const img = [
  "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg",
  "https://png.pngtree.com/thumb_back/fw800/background/20240610/pngtree-computer-of-a-programmer-with-lines-code-of-software-image_15746003.jpg",
  "https://t4.ftcdn.net/jpg/05/57/30/45/360_F_557304508_4HiGABGRGUvzfS1XQkKYVmH45TGhUVOn.jpg",
];

let arr = img.map((element, index) => {
  return (
    <div className="card">
      <div className="img">
        <img src={element} alt="" />
      </div>
      <h1>{title[index]}</h1>
      <div className="desc">{para}</div>

      <button>Go Anywhere</button>
    </div>
  );
});

let Container = <div className="container">{arr}</div>

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Container);
