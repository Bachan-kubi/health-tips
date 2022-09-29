import React, { useEffect, useState } from "react";
import Narration from "../Narration/Narration";
import Summary from "../Summary/Summary";
import Tip from "../Tip/Tip";
import './Home.css'

const Home = () => {
  const [tips, setTips] = useState([]);
  const [time, setTime] = useState(0);
  
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setTips(data));
  }, []);

  const handleAddList=(tip)=>{
      setTime(time + tip.time);
  }
  
  return (
    <div className="home">
      <div>
        <h2>Watch Todays Exersice: {tips.length}</h2>
        <div className="container">
            {
                tips?.map(tip=><Tip 
                    tip={tip} 
                    handleAddList = {handleAddList}
                    key={tip.id}
                    />)
            }
        </div>
        <div>
          <Narration />
        </div>
      </div>
      <div>
        <Summary time= {time}/>
      </div>
    </div>
  );
};

export default Home;
