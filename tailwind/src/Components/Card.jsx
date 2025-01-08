import React from 'react'

const Card = (props) => {
    let {img,title,desc} = props;
  return (
    <div className="card w-[300px] my-[10px] border shadow-2xl text-center m-auto ">
    <div className="flex justify-center">
    <img src={img} alt="" className='h-20 w-20 rounded-full' />
    </div>
    <h2 className='text-center text-2xl m-2'>{title}</h2>
    <p className='text-blue-700 font-bold'>{desc}</p>

    <button className='bg-red-500 border p-2 m-2 rounded hover:text-red-500 hover:bg-black'>Know more</button>
  </div>
  )
}

export default Card
