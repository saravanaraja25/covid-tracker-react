import React,{useEffect,useState} from 'react';
import Total from './Total';
import DistrictList from './DistrictList'

function StateDetail({match}) {
    const [state,setState]=useState([]);
    const [district,setDistrict]=useState([]);
    useEffect(()=>{
        corona();
        window.scrollTo(0, 0);
    },[]);
    const corona = async ()=>{
        const data = await fetch('https://api.covid19india.org/data.json');
        const res = await data.json();
        const districtdata=await fetch('https://api.covid19india.org/state_district_wise.json');
        const dtres=await districtdata.json();
        for (const key in dtres) {
            if (dtres.hasOwnProperty(key)) {
                const element = dtres[key];
                if(element.statecode === match.params.state)
                {
                    setDistrict(element.districtData);
                }                            
            }
        }
        // console.log(res.statewise)
        res.statewise.find((data)=>{
            if(data.statecode === match.params.state){
                setState(data);
            }
        });
    }
    // const dtdata =(object)=>{
    //     for (const key in object) {
    //         if (object.hasOwnProperty(key)) {
    //             const element = object[key];
    //             <DistrictList districts={element} />
                
    //         }
    //     }
    // }
    return (
        <div className="container mt-6">
            <h4 className="text-center mb-5 mt-5">{state.state}</h4>
            <Total total={state} />
            <h4 className="text-center mb-5 mt-5">Districtwise List</h4>
            <div className="row-cols-1 row-cols-md-3 row">
                <DistrictList districts={district} />
            </div>
            
        </div>
    )
    
}

export default StateDetail
