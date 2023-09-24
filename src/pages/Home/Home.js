import React from 'react'
import NavBar from '../../Components/Navigation/NavBar'
import Leftpane from '../../Components/Leftpen/Leftpane'
import RightPane from '../../Components/RightPane/RightPane'
import PostPane from '../../Components/Postpane/PostPane'
import "./home.css"

export default function Home() {
  return (
    <div>
        <NavBar/>
      
     
        <div className="bodycontent">
          <Leftpane/>
          <PostPane/>
          <RightPane/>
          
          </div>
    </div>
    
  )
}
