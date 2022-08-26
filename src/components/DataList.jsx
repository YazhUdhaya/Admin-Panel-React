import React from 'react'
import ProgressBar from './ProgressBar';

function DataList({item}) {
return (
    <div className="col-xl-3 col-md-6 mb-4">
    <div className={`card border-left-${item.color} shadow h-100 py-2`}>
        <div className="card-body">
            <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                    <div className={`text-xs font-weight-bold  text-${item.color} text-uppercase mb-1`}>
                        {item.earning}</div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">{item.salary}</div>
                </div>
                {
                    item.earning === "TASKS" ? <ProgressBar /> :``
                }
                <div className={`col-auto ${item.style}`}>
                    {item.icon}
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default DataList;