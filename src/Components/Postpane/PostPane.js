import React from 'react'
import "./Postpane.css"
import Addpost from './Addpost'
import MainPost from '../post/MainPost'

export default function PostPane() {
  return (
    <div className="PostPaneBox">
        <div>
          <Addpost/>
        <MainPost/>

        </div>
        
        </div>
   
  )
}
