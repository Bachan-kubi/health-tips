// use local storage to store data
const addToStorage = breakTime => {
    let breakTimeObj = {};
  
    breakTimeObj = breakTime;
    // console.log(breakTimeObj);
    localStorage.setItem('breakTimeObj', JSON.stringify(breakTimeObj));
  };
  
  const getStoredObj = () => {
    let breakTimeObj = 0;
  
    //get the data from local storage
    const storedbreakTimeObj = localStorage.getItem('breakTimeObj');
  
    if (storedbreakTimeObj) {
      breakTimeObj = JSON.parse(storedbreakTimeObj);
    }
  
  
    return breakTimeObj;
  };
  
  export { addToStorage, getStoredObj };