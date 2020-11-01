import React from 'react'

function Total({total}) {
    function kFormatter(num) {
        return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
    }    
    return (
        <div className="row-cols-1 row-cols-md-4 row">
            <div className="col mb-4">
                <div className="card testimonial-card">
                    <div className="card-up bg-danger lighten-1"></div>
                    <div className="avatar mx-auto white">
                    </div>
                    <div className="card-body">
                    <h4 className="card-title">Confirmed Cases</h4>
                    <hr />
                    <p className="text-center">{kFormatter(total.confirmed)} <span className="font-weight-normal text-danger"><i className="fas fa-arrow-up"></i>{total.deltaconfirmed === undefined ? "0" : total.deltaconfirmed}</span></p>
                    <p className="text-center">Last Updated</p><p className="text-center">{total.lastupdatedtime}</p>
                    </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="card testimonial-card">
                    <div className="card-up bg-primary lighten-1"></div>
                    <div className="avatar mx-auto white">
                    </div>
                    <div className="card-body">
                    <h4 className="card-title">Active Cases</h4>
                    <hr />
                    <p className="text-center">{kFormatter(total.active)} <span className="font-weight-normal text-primary"><i className="fas fa-arrow-up"></i>{total.deltaactive === undefined ? "0" : total.deltaactive }</span></p>
                    <p className="text-center">Last Updated</p><p className="text-center">{total.lastupdatedtime}</p>
                    </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="card testimonial-card">
                    <div className="card-up bg-grey lighten-1"></div>
                    <div className="avatar mx-auto white">
                    </div>
                    <div className="card-body">
                    <h4 className="card-title">Deaths</h4>
                    <hr />
                    <p className="text-center">{kFormatter(total.deaths)} <span className="font-weight-normal text-danger"><i className="fas fa-arrow-up"></i>{total.deltadeaths === undefined ? "0" : total.deltadeaths}</span></p>
                    <p className="text-center">Last Updated</p><p className="text-center">{total.lastupdatedtime}</p>
                    </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="card testimonial-card">
                    <div className="card-up bg-success lighten-1"></div>
                    <div className="avatar mx-auto white">
                    </div>
                    <div className="card-body">
                    <h4 className="card-title">Recovered</h4>
                    <hr />
                    <p className="text-center">{kFormatter(total.recovered)} <span className="font-weight-normal text-success"><i className="fas fa-arrow-up"></i>{total.deltarecovered === undefined ? "0" : total.deltarecovered}</span></p>
                    <p className="text-center">Last Updated</p><p className="text-center">{total.lastupdatedtime}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Total
