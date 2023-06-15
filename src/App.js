import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  //generate states of India
 
  const states=["AndhraPradesh", "ArunachalPradesh", "Assam", 'Bihar',
   "Chhattisgarh", "Goa", "Gujarat", "Haryana", "HimachalPradesh", "Karnataka",
    "Kerala", "MadhyaPradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram" ,
    "Nagaland" ,"Odisha" ,"Punjab" ,"Rajasthan" ,"Sikkim" ,"TamilNadu" ,"Telangana"
     ,"Tripura","UttarPradesh","Uttarakhand","WestBengal"]
const[name,setName]=useState("");
const[filteredState,setFilteredState]=useState([])    
function showState(input){
       setName(input)
      const newArr=states.filter((state)=>state.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
      console.log("newarr is ",newArr)
      setFilteredState(newArr)
}     

function result(state){
    setName(state);
    setFilteredState([]);
}
  return (
   <div>
       <input value={name} onChange={(e)=>showState(e.target.value)} placeholder='Enter states of India'></input>
       <div className={name?"box":""}>
        {
          filteredState.map((state,index)=>(
            name&&(<div className='state' onClick={()=>result(state)}>
              {state}
            </div>)
          ))
        }
       </div>
   </div>
  );
}

export default App;
