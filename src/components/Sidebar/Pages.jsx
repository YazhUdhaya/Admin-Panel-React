import React from 'react'
import {useState} from 'react'

function Pages() {

    const [open , setOpen] = useState(false);

  return (
    <li className="nav-item">
            <a className={`nav-link ${open ? 'collapsed':""}`}href="#" data-toggle="collapse" data-target="#collapsePages"
                aria-expanded={open} aria-controls="collapsePages">
                <i className="fas fa-fw fa-folder"></i>
                <span onClick={()=>{setOpen(!open)}}>Pages</span>
            </a>
            <div id="collapsePages" className={`collapse ${open ? "show" :""}`} aria-labelledby="headingPages" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Login Screens:</h6>
                    <a className="collapse-item" href="login.html">Login</a>
                    <a className="collapse-item" href="register.html">Register</a>
                    <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                    <div className="collapse-divider"></div>
                    <h6 className="collapse-header">Other Pages:</h6>
                    <a className="collapse-item" href="404.html">404 Page</a>
                    <a className="collapse-item" href="blank.html">Blank Page</a>
                </div>
            </div>
        </li>
  )
}

export default Pages