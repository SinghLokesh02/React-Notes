import React from 'react'
import img1 from "../assets/images/img3.jpg";
import img2 from "../assets/images/img1.jpg";
import img3 from "../assets/images/group.jpg";
import "./card.css"
import Card from './Card';

import React from 'react'

const Allcard = () => {
  return (
    <div style={{display:"flex"}}>
      <Card img = {img1} name="Helen" text="Contact Me"/>
      <Card  img = {img2} name="Surendra" text="Call Me"/>
      <Card  img = {img3} name="GeetanJali" text="Email Here"/>
    </div>
  )
}

export default Allcard

