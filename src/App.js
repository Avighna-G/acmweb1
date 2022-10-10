import './App.css';
import React,{useState,useEffect} from 'react'

function App() {
 
  const [data,setData]=useState([]);
  const [teamDesc,setTeam]=useState([]);
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
  const getTeam=()=>{
    fetch('teamDesc.json'
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
        setTeam(myJson)
      });
  }
  useEffect(()=>{
    getTeam()
  },[])
    
  return (
   <div id="bg">
    <div className='container'>
      <div className='mx-auto '>
        <h1 className='p-3 text-center text-justify'><i><strong><u>Volunteers</u></strong></i></h1>
        <p className="intro"><i>Volunteers here at ACM are friendly and ready to help any of the member at any instant. Volunteers literally shoulder all the events conducted by ACM and that too with a lot of determination.</i></p>
      </div>
      {
        teamDesc.map((desc,ind)=><div>
          <h5 className='text-left'>{desc.Team}</h5>
          <p className='intro'>{desc.Desc}</p>

        </div>)
      }
      <p className="intro"><i>Whichever team the volunteers are in at the end of the day they help each other support each other and share their workload. Volunteers of ACM are versatile, whatever is the work they do it with utmost dedication. They always look out to each other and are there for each other.</i></p>
      <table className='table table-bordered mx-auto m-4' >
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
    </div>
  );
}

export default App;
