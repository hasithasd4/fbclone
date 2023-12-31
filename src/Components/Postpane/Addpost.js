import React from 'react'
import './AddPost.css'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import LiveTvIcon from '@mui/icons-material/LiveTv';

export default function Addpost() {
  return (
    <div className="Addpost">
        <div className="addpostcontetn">

        </div>
        <div className="addposttoop">
            <img src="" alt="" className='addpostpic' />
            <input type="text" className="addpostinput" placeholder='Whats in your mind' />
        </div>
        <hr className='posthr'></hr>
        <div className="addpostbuttom">
             <div className="PostAction">
              <div className="addphotooptions">
                <div className="addphotooption">
                <AddAPhotoIcon htmlColor='orange' className='addpoto'/>
                <span className="addpostOptiontxt">Add Photo/Video</span>
                </div>

                <div className="addphotooption">
                <AddLocationAltIcon htmlColor='red' className='addpoto'/>
                <span className="addpostOptiontxt">Add Lcation</span>
                </div>

                <div className="addphotooption">
                <FaceRetouchingNaturalIcon htmlColor='blue' className='addpoto'/>
                <span className ="addpostOptiontxt">Tag</span>
                </div>

                <div className="addphotooption">
                <LiveTvIcon htmlColor='tomato' className='addpoto'/>
                <span className="addpostOptiontxt">Go Live</span>
                </div>
              </div>
               
             </div>
             <button className="postbutton">Post</button>
            
        </div>
    </div>
  )
}
