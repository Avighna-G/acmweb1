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

    <div className='App'>
      <table className='table table-bordered mx-auto m-4 w-75' >
        <thead>
        <tr className='headt'>
          <th>Name</th>
          <th>Team</th>
          <th>Mail ID</th>
        </tr>
        </thead>
        <tbody>
      
      {
        data.map((item,ind)=><tr className='rows' key={ind}><td className='p-3' >{item.Name}</td>
                                  <td className='p-3'>{item.Team}</td>  
                                  <td className='p-3' ><a className='text-dark' href='mailto:${item.Mail}'>{item.Mail}</a></td>
                            </tr>)
      }
      </tbody>
      </table>
    </div>
  );
}

export default App;
