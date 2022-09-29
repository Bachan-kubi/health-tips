import React, { useState } from 'react';
import './Break.css'

const Break = () => {
    const [breakTime, setBreakTime] = useState()
    const handleBreak = ()=>{
        setBreakTime()
    }
    return (
        <div>
            <div>
            <h3>Add a Break</h3>
            <div className="break">
                <button onClick={(e)=>handleBreak(10)}  className="break-items">10s</button>
                <button className="break-items">20s</button>
                <button className="break-items">30s</button>
                <button className="break-items">40s</button>
                <button className="break-items">50s</button>
            </div>
            <div>
                <h4 className="details">Break Time:{breakTime} </h4>
            </div>
        </div>
        </div>
    );
};

export default Break;