import React from "react"



const SmallPost = ({picSelection}) => (

  <section className="w-100 d-flex post">
    <img src={picSelection} className="postPic"/>
    <div className="postTextSmall">
    <h5 className="postHeading">Assassin Creed</h5>
    <p className="postContent">The Truth is written in blood all is forgotten but never seen. Assasins 
will come to those that disrespect our laws.</p>
    </div>
  </section>
)



export default SmallPost
