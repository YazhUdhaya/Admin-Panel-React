import React from 'react'
import DataList  from './DataList'
import Footer from './Footer'
import IllustraionAndDev from './IllustraionAndDev'
import Projects from './Projects'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faDollarSign,faClipboardList,faComments,faDownload } from '@fortawesome/free-solid-svg-icons'

function Dashboard() {

        
    const Data =[
        {
            earning:"EARNINGS (MONTHLY)",
            salary:'$40,000',
            icon:<FontAwesomeIcon icon={faCalendar} />,
            color:"primary",
            style:"fa-2x text-gray-300"

        },
        {
            earning:"EARNINGS (ANNUAL)",
            salary:"$215,000",
            icon:<FontAwesomeIcon icon={faDollarSign} />,
            color:"success",
            style:"fa-2x text-gray-300"
        },
        {
            earning:"TASKS",
            salary:"50%",
            icon:<FontAwesomeIcon icon={faClipboardList} />,
            color:"info",
            style:"fa-2x text-gray-300"
        },
        {
            earning:"PENDING REQUESTS",
            salary:"18",
            icon:<FontAwesomeIcon icon={faComments} />,
            color:"warning",
            style:"fa-2x text-gray-300"
        }
    ]


  return (
    
  <div className="container-fluid">
  <div className="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
    <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
      <FontAwesomeIcon icon={faDownload} />Generate Report</a>
   </div>
<div className="row">
  {
    Data.map((item,index) =>{
        return <DataList item={item}/>
    })
  }
</div>

{/* <div className="row">

   <EarningOverview/>
   <RevenueResource />
</div> */}


<div className="row">
<Projects />
<IllustraionAndDev />
</div>


</div>

)
}

export default Dashboard;