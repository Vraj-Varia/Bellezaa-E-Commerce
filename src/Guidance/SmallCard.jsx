import React from 'react'
import './SC.css'

const SmallCard = (props) => {
  return (
    <div className='SmallCard'>
        <h1 className="title">{props.title}</h1>
    </div>
  )
}

export default SmallCard