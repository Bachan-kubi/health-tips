import React from "react";
import Break from "../Break/Break";
import './Summary.css';
// import Toast from "../Toast/Toast";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Summary = (props) => {
  const notify = () => toast("Weldone! You have Completed!");
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
        <div className="btn-completed">
            <button onClick={notify} className="completed">Completed!</button>
            <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
             />
        </div>
    </div>
  );
};

export default Summary;
