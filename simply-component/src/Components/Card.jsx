import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

const Card = (props) => {
    const title = props.title;
    const desc = props.desc;
    const image = props.image;

  return (
    <div>
      <div className="card my-5">
        <img className='img-fluid' style={{
          borderRadius:"5px 5px 0 0",
        }} src={image} alt="image" />
        <div className="card-body">
        <h2 className='text-center'>{title}</h2>
        <h6>{desc}</h6>
        </div>
      </div>
        
        
    </div>
  )
}

export default Card
