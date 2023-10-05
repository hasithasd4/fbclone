import React from 'react'
import './post.css'

export default function MainPost() {
  return (
    
    <div className="post">
          <div className="postContainer">
            <div className="postTop">
                <img src="/Image/hasitha.jpg" alt=""  className='postimage'/>
                <span className="postUserName">Sahan Hasitha</span>
                <span className="PostTime">10 min ago</span>
            </div>
            <div className="postCenter">
                <div className="postcaption"> Im Alon</div>
                <img src="/Image/hasitha.jpg" alt="" className="postimages" />
            </div>
            <div className="postBotme"> </div>
            
          </div>
    </div>
  )
}
