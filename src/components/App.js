{/* <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
 */}
 import React from 'react'
import Review from './Review'
 
 function App() {
   return (
    <main>
     <section className='container'>
        <a id="review-heading">Our Reviews</a>
        <Review/>
     </section>
     </main>
   )
 }
 
 export default App
 