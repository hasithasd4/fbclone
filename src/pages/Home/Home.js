import React from 'react'
import NavBar from '../../Components/Navigation/NavBar'
import Leftpane from '../../Components/Leftpen/Leftpane'
import RightPane from '../../Components/RightPane/RightPane'
import PostPane from '../../Components/Postpane/PostPane'

export default function Home() {
  return (
    <div>
        <NavBar/>
        <Leftpane/>
        <RightPane/>
        <PostPane/>
    </div>
  )
}
