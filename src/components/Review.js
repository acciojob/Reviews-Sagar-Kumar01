import React, { useState } from 'react'
import data from "../data.js"

function Review() {
  let [c, setc] = useState(0)

  const prev = () => {
    setc((c - 1 + data.length) % data.length)
  }

  const next = () => {
    setc((c + 1) % data.length)
  }

  const random = () => {
    let rand = Math.floor(Math.random() * data.length)
    while (rand === c) {
      rand = Math.floor(Math.random() * data.length)
    }
    setc(rand)
  }

  return (
    <div className="review">
      <p className='author' id={`author-${data[c].id}`}>
        {data[c].name}
      </p>

      <p className='job'>{data[c].job}</p>
      <p className='info'>{data[c].text}</p>
      <img className='person-img' style={{height:"244px", width:"244px"}} src={data[c].image}/>

      <button className="prev-btn" onClick={prev}>Previous</button>
      <button className="next-btn" onClick={next}>Next</button>
      <button className='random-btn' onClick={random}>surprise me</button>
    </div>
  )
}

export default Review
