import React, { useState } from 'react'
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faAngleRight,faAngleDown } from '@fortawesome/free-solid-svg-icons'
  import {Link} from 'react-router-dom';
import Buttons from './Buttons';
import Cards from './Cards'

function Component() {
   
   const displayBtnData = () =>{
    <Buttons/>
   
   }
   const displayCardData = () =>{
    <Cards/>
   
   }
    const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
    <a className={`nav-link ${open? "":"collapsed"}`}  data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded={open} aria-controls="collapseTwo" >
        <i className="fas fa-fw fa-cog"></i>
        <span onClick={()=>{setOpen(!open)}}>Components</span> {open ? <FontAwesomeIcon icon={faAngleDown}/> : <FontAwesomeIcon icon={faAngleRight}  />}
    </a>
    
    <div id="collapseTwo" className={`collapse ${open?'show':''}`} aria-labelledby="headingTwo" data-parent="#accordionSidebar">
    <div className="bg-white py-2 collapse-inner rounded"  >
        <h6 className="collapse-header">Custom Components:</h6>
        <Link className="collapse-item" to="/Buttons" onClick={displayBtnData}>Buttons</Link>
        <Link className="collapse-item" to="/Cards" onClick={displayCardData}>Cards</Link>
    </div>
</div>
    
    
</li>
  )
}

export default Component