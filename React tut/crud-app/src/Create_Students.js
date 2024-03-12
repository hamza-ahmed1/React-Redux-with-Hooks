import Axios  from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Success_Alert from './Success_Alert'

export default function Create_Students() {
  const [submitted, setSubmitted] = useState(false);
    const [my_name,setname]=useState("");
    const [my_age,setage]=useState("");
    const [my_email,setmail]=useState("");
    const navigate=useNavigate();
    
    const url="https://65aac77f081bd82e1d97c37a.mockapi.io/students";
  
    const Handlesubmit=(e)=>{
      e.preventDefault();
         Axios.post(url,{
         
                name:my_name,
                age:my_age,
                mail:my_email

         }).then(()=>{

           navigate('/')
           
          }).catch(()=>{
          })
          setSubmitted(true);



    }

  return (
      <>
      {submitted ?<Success_Alert/>:
      <div className='container'>
      <div className='row d-flex justify-content-center pt-5' >
    <div className='col-md-6 col-sm-8'>
    <div className='display-5 lead bg-primary text-white p-2 mb-3 '>Create Form</div>
    <form onSubmit={Handlesubmit}>
    <div className='form-group'>
    <label className='lead'>Enter Name  </label><br/>
    <input type='text' placeholder='Name' 
    className='form-control' value={my_name} onChange={(e)=>{setname(e.target.value)}}/>
    </div>

    <div className='form-group'>
    <label className='lead'>Enter Age  </label><br/>
    <input type='number' placeholder='Age' 
    className='form-control' value={my_age} onChange={(e)=>{setage(e.target.value)}}/>
    </div>
    <div className='form-group'>
    <label className='lead'>Enter Email  </label><br/>
    <input type='text' placeholder='Email'
     className='form-control' value={my_email} onChange={(e)=>{setmail((e.target.value))}}/>
    </div>

    <br/>
    <input type='submit' value={'submit'} className='form-control btn btn-primary'/>
    </form>
    </div>
    </div>

      </div>}
      
    
    </>
  )
}
