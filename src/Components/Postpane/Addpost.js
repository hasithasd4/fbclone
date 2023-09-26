import React from 'react'
import './AddPost.css'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

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
                <AddAPhotoIcon className='addpoto'/>
                <span className="addpostOptiontxt">Add Photo/Video</span>
             </div>
            
        </div>
    </div>
  )
}
