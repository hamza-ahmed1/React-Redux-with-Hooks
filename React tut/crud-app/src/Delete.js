
import Axios  from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {Delete_record} from './Api'
import Alert_Delete from './Alert_Delete';

export default function Delete({set_data}) {
  let {id}=useParams();
  const navigate=useNavigate();
  const [my_name,setname]=useState("");
  const [my_age,setage]=useState("");
  const [my_email,setmail]=useState("");
  const [deleted, setdelete] = useState(false);
 


  useEffect(()=>{
      setname(localStorage.getItem('name'));
      setage(localStorage.getItem('age'));
      setmail(localStorage.getItem('mail'));
  },[])
  const Handlesubmit=(e)=>{
    e.preventDefault();
    Delete_record(id);
    navigate('/');
    
   
   }



  

return (
  <>
  {deleted ?<Alert_Delete/> :
  <div className='container'>
  <div className='row d-flex justify-content-center pt-5' >
<div className='col-md-6 col-sm-8'>
<div className='display-6 lead bg-secondary text-white p-2 mb-3 '>Are you sure ?</div>
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

<button className='btn btn-warning me-4' onClick={()=>navigate('/')}>Back</button>
<input type='submit' value={'Delete'} className='btn btn-danger'/>
</form>
</div>
</div>

  </div>
}
 
</>
)

}