import React from "react"

import postPic from '../images/postPic.jpg'


const LargePost = () => (
  <section className="w-100 d-flex post">
    <img src={postPic} className="postPic"/>
    <div className="postTextLarge">
    <h5 className="postHeading">Assassin Creed</h5>
    <p className="postContent">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    
  </section>
)



export default LargePost
