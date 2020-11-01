import React from 'react';
import { useState, useEffect } from 'react';
import State from './StateList';
import Total from './Total'
function Body() {
    const [covid,setCovid]=useState([]);
    useEffect(()=>{
        corona();
    },[]);
    const corona = async ()=>{
        const data = await fetch('https://api.covid19india.org/data.json');
        const res = await data.json();
        setCovid(res.statewise);
    }
    return (
        <div className="container mt-6">
            <h4 className="text-center mb-5 mt-5">India Covid Cases</h4>
            {covid.map((data,i)=>{    
                if(i===0){
                    return (
                        <Total total={data} key={i}/>
                    )
                }
            })}            
            <h4 className="text-center mb-5 mt-5">Statewise List</h4>
            <div className="row-cols-1 row-cols-md-3 row">
                {covid.map((data,i)=>{   
                if(i!==0) 
                    return (
                        <State state={data} key={i} />  
                    )
            })}
            </div>        
        </div>
    )
}

export default Body
