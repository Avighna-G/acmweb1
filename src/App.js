import './App.css';
import React,{useState,useEffect} from 'react'

function App() {
 
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('volunteerList.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
    
  return (

    <div className="App">
      <table className='table table-hover mx-auto m-3 w-75'>
        <thead>
        <tr className="p-2 bg-info">
          <th>Name</th>
          <th>Team</th>
          <th>Mail ID</th>
        </tr>
        </thead>
        <tbody>
      
      {
        data.map((item,ind)=><tr key={ind}><td >{item.Name}</td>
                                  <td >{item.Team}</td>  
                                  <td><a href='mailto:${item.Mail}'>{item.Mail}</a></td>
                            </tr>)
      }
      </tbody>
      </table>
    </div>
  );
}

export default App;
