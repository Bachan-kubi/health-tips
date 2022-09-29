import React, { useState } from 'react';
import './Break.css'

const Break = () => {
    const [breakTime, setBreakTime] = useState();
    return (
        <div>
            <div>
            <h3>Add a Break</h3>
            <div className="break">
                <button onClick={()=>setBreakTime(10)}  className="break-items">10s</button>
                <button onClick={()=>setBreakTime(20)} className="break-items">20s</button>
                <button onClick={()=>setBreakTime(30)} className="break-items">30s</button>
                <button onClick={()=>setBreakTime(40)} className="break-items">40s</button>
                <button onClick={()=>setBreakTime(50)} className="break-items">50s</button>
            </div>
            <div>
                <h4 className="details">Break Time: {breakTime} </h4>
            </div>
        </div>
        </div>
    );
};

export default Break;