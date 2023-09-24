import React from 'react'
import "./LeftPane.css"
import MessageIcon from '@mui/icons-material/Message';
import GroupsIcon from '@mui/icons-material/Groups';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function Leftpane() {
  return (
    <div className="leftpaneBox">
        <div className="lefpanecomponet">
          <div className="leftpanemanu">
             <li className='leftpaneMenuitem'>
              <MessageIcon className='leftpaneMenuItem'/>
              <span className='leftpaneMenutext'>Message</span>
             </li>
             <li className='leftpaneMenuitem'>
              <GroupsIcon className='leftpaneMenuItem'/>
              <span className='leftpaneMenutext'>Group</span>
             </li>
             <li className='leftpaneMenuitem'>
              <RssFeedIcon className='leftpaneMenuItem'/>
              <span className='leftpaneMenutext'>Feed</span>
             </li>
             <li className='leftpaneMenuitem'>
              <FlagIcon className='leftpaneMenuItem'/>
              <span className='leftpaneMenutext'>Pages</span>
             </li>
             <li className='leftpaneMenuitem'>
              <CalendarMonthIcon className='leftpaneMenuItem'/>
              <span className='leftpaneMenutext'>Calender</span>
             </li>
             <li className='leftpaneMenuitem'>
              <BuildIcon className='leftpaneMenuItem'/>
              <span className='leftpaneMenutext'>Setting</span>
             </li>
             <li className='leftpaneMenuitem'>
              <SportsEsportsIcon className='leftpaneMenuItem'/>
              <span className='leftpaneMenutext'>Games</span>
             </li>
             <li className='leftpaneMenuitem'>
              <NewspaperIcon className='leftpaneMenuItem'/>
              <span className='leftpaneMenutext'>News</span>
             </li>
             <li className='leftpaneMenuitem'>
              <WorkOutlineIcon className='leftpaneMenuItem'/>
              <span className='leftpaneMenutext'>Job</span>
             </li>
             <li className='leftpaneMenuitem'>
              <AddShoppingCartIcon className='leftpaneMenuItem'/>
              <span className='leftpaneMenutext'>Market</span>
             </li>

             <hr/>
             <div className="pagestouLiked">
            <div className="likepagetitle">
            <span> Page you liked</span>

            </div>
              
              <li className='pageListItem'>
                <img src="/Image/sahan.jpg"  alt='' className='pagepic'></img>
                <span className='pagename'>code with mari</span>
              </li>
              <li className='pageListItem'>
                <img src="/Image/sahan.jpg"  alt='' className='pagepic'></img>
                <span className='pagename'>code with mari</span>
              </li>
              <li className='pageListItem'>
                <img src="/Image/sahan.jpg"  alt='' className='pagepic'></img>
                <span className='pagename'>code with mari</span>
              </li>
              <li className='pageListItem'>
                <img src="/Image/sahan.jpg"  alt='' className='pagepic'></img>
                <span className='pagename'>code with mari</span>
              </li>
              <li className='pageListItem'>
                <img src="/Image/sahan.jpg"  alt='' className='pagepic'></img>
                <span className='pagename'>code with mari</span>
              </li>
              <li className='pageListItem'>
                <img src="/Image/sahan.jpg"  alt='' className='pagepic'></img>
                <span className='pagename'>code with mari</span>
              </li>
             </div>


          </div>
        </div>


    </div>
  )
}
