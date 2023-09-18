import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import "./Navbar.css"
export default function NavBar() {
  return (
    <div className="NavBarBox">
        <div className="navBarLeft">
            <span className="log">Sahan hasitha</span>
        </div>
        <div className="naveBarCenter">
            <div className="searctBox">
                <SearchIcon className='searchicon'/>
                <input placeholder='Search for your friend' className="searchinput" />
            </div>
        </div>
        <div className="naveBarRight">
          <div className="naBarLinks">
            <span className="nabliks">HomePage</span>
            <span className="nabliks">Profile</span>
          </div>
          <div>
            <div className="navBarIcons">
              <div className="navBaricon">
                     <PersonIcon/>
                     <span className="icontag">3</span>
              </div>
              <div className="navBaricon">
                <EmailIcon/>
                <span className="icontag">5</span>
              </div>
              <div className="navBaricon">
                <NotificationsIcon/>
                <span className="icontag">4</span>
              </div>
              <div className="navBaricon">
                <SettingsIcon/>
              </div>
              <div className="pic">
              <img src="/Image/sahan.jpg" alt="" className="profilepig" />
            </div>
            </div>
           
          </div>

        </div>
    </div>
  )
}
