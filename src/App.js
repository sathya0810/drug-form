import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import formJsonOne from "./assets/drug1.json"
import formJsontwo from "./assets/drug2.json"
import DrugForm from "./components/DrugForm/DrugForm";

function App() {
  // const [formData, setformData] = useState([]);
  // const [formDatatwo, setformDatatwo] = useState([]);

  //console.log(formJsonOne);

  // function fetchData(url){
  //   fetch(url)
  //   .then((res)=>res.json())
  //   .then((data)=> console.log(data))
  // }

  // useEffect(()=>{
  //   fetchData("https://api.npoint.io/25585503424e8badc496");
  //   fetchData("https://api.npoint.io/7b52111d752a24f5e512");
  // },[])


  return (
    <div className="App">
      <h1>Drug form 1</h1>
      <div className='form-one'>
        <DrugForm formData={formJsonOne} />
      </div>
      <h1>Drug form 2</h1>
      <div className='form-two'>
        <DrugForm formData={formJsontwo} />
      </div>
    </div>
  );
}

export default App;
