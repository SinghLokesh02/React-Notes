const Card = ({name,img,text}) => {
    return (
      <div className='card'>
        <img src= {img} alt="" />
        <h1>{name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam molestiae eaque blanditiis quibusdam maiores voluptates quo earum pariatur architecto impedit fugiat enim repellat debitis nulla, perspiciatis facere rerum laudantium consequuntur!</p>
        <button>{text}</button>
      </div>
    )
  }
  
  export default Card