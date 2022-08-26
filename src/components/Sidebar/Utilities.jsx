import { useState } from "react";
import React from 'react'
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight,faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Colors from "./Colors";
import Borders from './Borders';
import Animations from './Animations';
import Other from './Other'
  
function Utilities() {
  const displayColorsData = ()=>{
    <Colors/>
  }
  const displayBorderData = ()=>{
    <Borders/>
  }
  const displayAnimationData = ()=>{
    <Animations/>
  }
  const displayOtherData = ()=>{
    <Other/>
  }
    const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
            <a className={`nav-link ${open? "":"collapsed"}`} href="#" data-toggle="collapse" data-target="#collapseUtilities"
                aria-expanded={open} aria-controls="collapseUtilities">
                <i className="fas fa-fw fa-wrench"></i>
                <span onClick={()=>{setOpen(!open)}}>Utilities</span> {open ? <FontAwesomeIcon icon={faAngleDown}/> : <FontAwesomeIcon icon={faAngleRight}  />}
            </a>
            <div id="collapseUtilities" className={`collapse ${open? 'show':''}`} aria-labelledby="headingUtilities"
                data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Custom Utilities:</h6>
                    <Link className="collapse-item" to="/Colors" onClick={displayColorsData}>Colors</Link>
                    <Link className="collapse-item" to="/Borders" onClick={displayBorderData}>Borders</Link>
                    <Link className="collapse-item" to="/Animations" onClick={displayAnimationData}>Animations</Link>
                    <Link className="collapse-item" to="/Other" onClick={displayOtherData}>Other</Link>
                </div>
            </div>
        </li>

  )
}

export default Utilities