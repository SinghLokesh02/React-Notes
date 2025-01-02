import React from 'react'
import { CDN_LINK } from '../utils/constant'

const Banner = (props) => {
  
  return (
    <div className='banner'>
      <img src={CDN_LINK + props.resData.imageId} alt="" />
    </div>
  )
}

export default Banner
