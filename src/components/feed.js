import React from "react"

import Post from './smallPost'
import LargePost from './largePost'
import postPic from '../images/postPic.jpg'

const Feed = () => (
  <section className="setMaxWidth feed">
    <div className="d-flex feedWrapper">
      <div className="col w-33 feedL">
        <div className="feedHeading bg-red"><h3>Life of an Assassin</h3></div>
        <Post picSelection={postPic}/>
        <Post picSelection={postPic}/>
        <Post picSelection={postPic}/>
      </div>
      <div className="col w-66 feedR">
      <div className="feedHeading bg-red"><h3>Life of an Assassin</h3></div>
      <LargePost />
      <LargePost />
      <LargePost />
      </div>
    </div>
  </section>
)



export default Feed
