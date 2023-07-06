import React, { useState } from 'react'

const Tour = ({id,image,name,info,price, removeTour}) => {
  const [readMore, setReadMore] = useState(false)

  return (
    <article className='single-tour'>
      <img src={image} className='img' alt={name}></img>
      <span className='tour-price'>${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{readMore ? info : `${info.substring(0,200)}...`} 
        <button type="button" onClick={()=>setReadMore(!readMore)} className='info-btn'>{readMore ? 'show less' : 'read more'}</button></p>
        <button type="button" className='btn bton-block delete-btn' onClick={()=>removeTour(id)}>not interested</button>
      </div>
    </article>
  )
}

export default Tour