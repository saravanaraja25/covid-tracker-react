import React from 'react'

function DistrictList({districts}) {
    const format = new Intl.NumberFormat();
    return(
        Object.keys(districts).map((data)=>{
            return (        
                <div className="col mb-4">
                    <div className="card testimonial-card">
                        <div className="card-up bg-warning lighten-1"></div>
                        <div className="avatar mx-auto white">
                        </div>
                        <div className="card-body">
                        <h4 className="card-title">
                                {data}
                        </h4>
                        <hr />
                        <p className="text-center">Total Cases : {format.format(districts[data].confirmed)}</p>
                        <p className="text-center">Active Cases : {format.format(districts[data].active)}</p>
                        <p className="text-center">Recovered : {format.format(districts[data].recovered)}</p>
                        <p className="text-center">Total Deaths : {format.format(districts[data].deceased)}</p>
                        </div>
                    </div>
                </div>    
                
            )
            })
    )
    
}

export default DistrictList
