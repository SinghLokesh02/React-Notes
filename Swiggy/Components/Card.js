import { CDN_LINK } from "../utils/constant";
const Card = (props) => {
  let {cloudinaryImageId,name,avgRating,cuisines,areaName,sla} = props.resData.info;
    return (
      <div className="card">
        <img src={CDN_LINK +  cloudinaryImageId} alt="logo" className='card-img' />
        <h2>{name}</h2>
        <p>{avgRating} .  {sla.slaString}</p>
        <p>{cuisines}</p>
        <p>{areaName}</p>
      </div>
    )
  }
export default Card;