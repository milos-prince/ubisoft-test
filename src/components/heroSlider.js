import React from "react"
import Post from './smallPost'
import postPic from '../images/postPic.jpg'
import postPic2 from '../images/postPic2.jpg'
import postPic3 from '../images/postPic3.jpg'



const Hero = () => (
  <section className="setMaxWidth heroBG d-flex">
   
    <div className="heroSelector d-flex">
      <div className="selectorWrapper"><Post picSelection={postPic}/></div>
      <div className="selectorWrapper"><Post picSelection={postPic2} /></div>
     <div className="selectorWrapper"><Post picSelection={postPic3} /></div> 
    </div>
  </section>
  
)

export default Hero
