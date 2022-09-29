import React from 'react';
import './Tip.css'

const Tip = ({tip, handleAddList}) => {
    const {picture, name, description, time, age} = tip;
    return (
        <div className='info'>
            <img src= {picture} alt="body" />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Age: {age}</p>
            <h4>Time: {time}</h4>
            <div>
                <button onClick={()=>handleAddList(tip)} className='btn-add'>Add To List</button>
            </div>
        </div>
        
    );
};

export default Tip;