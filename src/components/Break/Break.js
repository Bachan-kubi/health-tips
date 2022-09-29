import React, { useState } from 'react';
import './Break.css'

const Break = () => {
    const [breakTime, setBreakTime] = useState(0);

    return (
        <div>
            <div>
            <h3>Add a Break</h3>
            <div className="break">
                <button onClick={()=>setBreakTime(10)}  className="break-items">10m</button>
                <button onClick={()=>setBreakTime(20)} className="break-items">20m</button>
                <button onClick={()=>setBreakTime(30)} className="break-items">30m</button>
                <button onClick={()=>setBreakTime(40)} className="break-items">40m</button>
                <button onClick={()=>setBreakTime(50)} className="break-items">50m</button>
            </div>
            <div>
                <h4 className="details">Break Time: {breakTime} m </h4>
            </div>
        </div>
        </div>
    );
};

export default Break;