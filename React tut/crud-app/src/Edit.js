import Axios  from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Edit() {
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
        console.log(my_name);
        console.log(my_age);

         navigate('/')

       }).catch(()=>{
       })


  }

  return (
    <>
    <div className='container'>
    <div className='row d-flex justify-content-center pt-5' >
  <div className='col-md-6 col-sm-8'>
  <div className='display-5 lead bg-secondary text-white p-2 mb-3 '>Edit</div>
  <form onSubmit={Handlesubmit}>
  <div className='form-group'>
  <label className='lead'>Enter Name  </label><br/>
  <input type='text' placeholder='Name' 
  className='form-control' onChange={(e)=>{setname(e.target.value)}}/>
  </div>

  <div className='form-group'>
  <label className='lead'>Enter Age  </label><br/>
  <input type='number' placeholder='Age' 
  className='form-control'  onChange={(e)=>{setage(e.target.value)}}/>
  </div>
  <div className='form-group'>
  <label className='lead'>Enter Email  </label><br/>
  <input type='text' placeholder='Email'
   className='form-control' onChange={(e)=>{setmail((e.target.value))}}/>
  </div>

  <br/>

  <button className='btn btn-warning me-4'>Back</button>
  <input type='submit' value={'Save Changes'} className='btn btn-primary'/>
  </form>
  </div>
  </div>

    </div>
  
  </>
  )
}
    