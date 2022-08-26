import React from 'react'
import Component from './Component'
import Utilities from './Utilities'
import '../../App.css';
import {Link} from 'react-router-dom';
import Pages from './Pages'
import Tables from './Tables';

function Sidebar() {

   const displayTableData =() =>{
    <Tables/>
   }

  return (

   
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

       
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
        </a>

     
        <hr className="sidebar-divider my-0"/>

       
        <li className="nav-item active">
            <Link className="nav-link" to="/">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></Link>
        </li>

      
        <hr className="sidebar-divider"/>

    
        <div className="sidebar-heading">
            Interface
        </div>
           
       <Component/>
       <Utilities/>
      
        <hr className="sidebar-divider"/>

       
        <div className="sidebar-heading">
            Addons
        </div>

       
        <Pages/>

       
        <li className="nav-item">
            <a className="nav-link" href="#">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Charts</span></a>
        </li>

        <li className="nav-item">
            <Link className="nav-link" to='/Tables'>
                <i className="fas fa-fw fa-table"></i>
                <span onClick={displayTableData}>Tables</span></Link>
        </li>

        
        <hr className="sidebar-divider d-none d-md-block"/>
        
        <div className="sidebar-card d-none d-lg-flex">
            <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..."/>
            <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
            <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
        </div>

    </ul>
  
    
  )
}

export default Sidebar