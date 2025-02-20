import React from 'react'
import Banner from './Banner';
import Card from './Card';
import { Link } from 'react-router';
const Body = ({resData0,resData0Title,resData4,resData4Title,resData,resDataTitle}) => {
  return (
    <>
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
        return <Link to={"/restaurant/" + res.info.id} key={res.info.id}> <Card resData={res} /> </Link>;
      })}
    </div>
    <h1>{resData4Title}</h1>
    <div className="card-container">
      {resData4.map((res) => {
        return <Card resData={res} key={res.info.id} />;
      })}
    </div>
  </div>
  </>
  )
}

export default Body
