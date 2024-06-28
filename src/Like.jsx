import React, { useState } from 'react'

const Like = () => {
    const[state,setState] = useState();
    const[like, setLike] = useState(true);
    const lik = ()=>{
        setLike(!like)
    }
  return (
    <div>
        <h1 >{like?'Liked':'Disliked'}</h1>
      <button style={{fontSize: '40px'}} onClick={lik}>LikeButton</button>
    </div>
  )
}

export default Like
