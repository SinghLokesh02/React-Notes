import { CDN_LINK } from "../utils/constant";
const Card = (props) => {
    return (
      <div className="card">
        <img src={CDN_LINK + props.resData.info.cloudinaryImageId} alt="logo" className='card-img' />
        <h2>{props.resData.info.name}</h2>
        <p>{props.resData.info.avgRating} .  {props.resData.info.sla.slaString}</p>
        <p>{props.resData.info.cuisines}</p>
        <p>{props.resData.info.areaName}</p>
      </div>
    )
  }
export default Card;