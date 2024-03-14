import React from 'react'

const Card = (props) => {
    const title = props.title;
    const desc = props.desc;
  return (
    <div>
        <h1>title = {title}</h1>
        <h5>desc = {desc}</h5>
    </div>
  )
}

export default Card
