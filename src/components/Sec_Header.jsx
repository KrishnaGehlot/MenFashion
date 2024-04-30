import React, { useEffect } from 'react'
import { NavLink , useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
 
function Sec_Header() {
 
  const redirect=useNavigate()

  const userlogout=()=>{
    localStorage.removeItem('uid')
    localStorage.removeItem('uname')
    toast.success('Logout is success')
    redirect('/login')
    return false;
  }

  useEffect(()=>{
   const res =  localStorage.getItem('uid')
   console.log(res);
   if(res==null)
   {
   redirect('/login')
   }
  },[])
  return (
    <div className="topbar">
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="full">
        <button
          type="button"
          id="sidebarCollapse"
          className="sidebar_toggle"
        >
          
        <i className="fa-solid fa-bars" style={{color: '#ffffff'}} />

        </button>
        <div className="logo_section">
          <a href="index.html">
            <img
              className="img-responsive"
              src="images/logo/logo.png"
              alt="#"
            />
          </a>
        </div>
        <div className="right_topbar " style={{display:"flex"}} >
         <div style={{marginLeft : "20px"}} >
        
         </div>
          <div className="icon_info">
            <ul>
            </ul>
            <ul className="user_profile_dd">
              <li>
                <a className="dropdown-toggle" data-toggle="dropdown">
                  <img
                    className="img-responsive rounded-circle"
                    src="images/layout_img/user_img.jpg"
                    alt="#"
                  />
                  <span className="name_user">
                  {
                 (localStorage.getItem('uid')) ?
                  
                         <div >
                          <NavLink to="" >
                              <span style={{fontSize : "17px"}} >
                           {localStorage.getItem('uname')}
                              </span>
                          </NavLink>
                        
                          </div> :""
           }
                  </span>
                </a>
                <div className="dropdown-menu">
                  <NavLink className="dropdown-item" to="/profile">
                    My Profile
                  </NavLink>
                    <a className="dropdown-item" href="settings.html">
                    Settings
                  </a>
                  <a className="dropdown-item" href="help.html">
                    Help
                  </a>
                  <NavLink className="dropdown-item" to="/login">
                    <span>Login</span>{" "}
                  </NavLink>
                 <a href="javascript:void(0)" onClick={userlogout}>
                              <span >
                     Logout
                              </span>
                        </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default Sec_Header
