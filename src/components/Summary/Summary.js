import React from "react";
import Break from "../Break/Break";
import './Summary.css'

const Summary = (props) => {
  return (
    <div className="summary">
      <div className="title">
        <h3>Bachan Kubi</h3>
        <h5>Bangladesh</h5>
      </div>
        <div className="personal-info">
            <div>
                <h3>60Kg</h3>
                <p>Weight</p>
            </div>
            <div>
                <h3>5.6</h3>
                <p>Height</p>
            </div>
            <div>
                <h3>40</h3>
                <p>year</p>
            </div>
        </div>
        <div>
            <h3>Exersice Details</h3>
            <h4 className="details">Excersice Time: {props.time} m</h4>
        </div>
        <Break />
        <div>
            <h4 className="completed">Completed!</h4>
        </div>
    </div>
  );
};

export default Summary;
