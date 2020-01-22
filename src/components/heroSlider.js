import React from "react"
import Post from './smallPost'
import postPic from '../images/postPic.jpg'
import postPic2 from '../images/postPic2.jpg'
import postPic3 from '../images/postPic3.jpg'


const Hero = () => (
  <section className="setMaxWidth heroBG d-flex">
    <div className="heroSelector d-flex">
      <Post picSelection={postPic}/>
      <Post picSelection={postPic2}/>
      <Post picSelection={postPic3}/>
    </div>
  </section>
  
)

export default Hero
