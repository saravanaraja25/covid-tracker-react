import React from 'react';
import { Link } from 'react-router-dom'

function StateList({state,keys}) {
    const format = new Intl.NumberFormat();
    return (
        <div className="col mb-4">
            <div className="card testimonial-card">
                <div className="card-up bg-warning lighten-1"></div>
                <div className="avatar mx-auto white">
                </div>
                <div className="card-body">
                <h4 className="card-title">
                    <Link to={`/state/${state.statecode}`} exact>
                        {state.state}
                    </Link>
                </h4>
                <hr />
                <p className="text-center">Total Cases : {format.format(state.confirmed)} <span className="font-weight-normal text-danger"><i className="fas fa-arrow-up"></i>{state.deltaconfirmed === undefined ? "0" : state.deltaconfirmed}</span></p>
                <p className="text-center">Active Cases : {format.format(state.active)}</p>
                <p className="text-center">Recovered : {format.format(state.recovered)} <span className="font-weight-normal text-success"><i className="fas fa-arrow-up"></i>{state.deltarecovered === undefined ? "0" : state.deltarecovered}</span></p>
                <p className="text-center">Total Deaths : {format.format(state.deaths)} <span className="font-weight-normal text-danger"><i className="fas fa-arrow-up"></i>{state.deltadeaths === undefined ? "0" : state.deltadeaths}</span></p>
                <p className="text-center">Last Updated</p><p className="text-center">{state.lastupdatedtime}</p>
                </div>
            </div>
        </div>
    )
}

export default StateList
