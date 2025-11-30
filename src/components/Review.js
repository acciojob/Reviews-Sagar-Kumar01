import React, { useState } from 'react'
import data from "../data.js"

function Review() {
    let[c,setc] = useState(0)
  return (
    <div className="review">
      <a className="review-heading">Our Reviews</a>
      <p className='author'><a id={`author-${data[c].id}`}>{data[c].name}</a></p>
      <p className='job'>{data[c].job}</p>
      <p className='info'>{data[c].text}</p>
      <img className='person-img' style={{height:"244px",width:"244px"}}src={data[c].image}/>

      <button className="prev-btn" onClick={()=>setc(c>0?c-1:c)}>Previous</button>
      <button className="next-btn" onClick={()=>setc(c<data.length-1?c+1:c)}>Next</button>
      <button className='random-btn' onClick={()=>setc(parseInt(Math.random()*4))}>surprise me</button>
    </div>
  )
}

export default Review
