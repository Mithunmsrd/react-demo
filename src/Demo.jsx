import { useState } from "react";

const Demo = ({})=>{

  const[state, setState] = useState();
  const [Likes, setLikes] = useState(0);
  const increment = (liked) =>{
    setLikes(Likes+1)
  }
    const colors = ['red','blue','green','yellow','black','white']
  const loggedin = true;
  return(
    <><ul>
    <li>{colors[0]}</li>
    <li>{colors[1]}</li>
  </ul>
  <br></br>
  <ul>
   {colors.map((color)=><li>{color}</li>)} 
  </ul>
 
  <h1>{loggedin?'admin': 'user'}</h1>
  <h1>{loggedin && 'user yy'}</h1>
  <h1>Number of likes:{Likes}</h1>
  {/* <h1>Number of comments:{Name}</h1> */}
  <button style={{fontSize: '40px'}} onClick={increment}>BUTTON</button>
  
  </>
  )
}
export default Demo