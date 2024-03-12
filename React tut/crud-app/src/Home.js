import  Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import {Get_data} from './Api'


export default function Home() {
    
   
  const navigate= useNavigate();
  const [stu_data,set_data]=useState([]);
  
  const set_data_to_Storage=(name,age,mail)=>{
       
        localStorage.setItem('name',name);
        localStorage.setItem('age',age);
        localStorage.setItem('mail',mail);

  }
  useEffect(()=>{Get_data(set_data,navigate);},[])
  const HandleDelete=(id,name,age,mail)=>{
    set_data_to_Storage(name,age,mail);
    navigate(`/Delete/${id}`);

  }

  const HandleUpdate=(id,name,age,mail)=>{
    set_data_to_Storage(name,age,mail);
    navigate(`/Update/${id}`);
  }
  return (
    <div className='container mt-5'>
    <div className='row'>
    <div className='col-md-4 col-sm-5'>

   <button className='btn btn-outline-dark' onClick={()=>{navigate('/Create')}}>Add New Student</button>
    </div>

    </div>
<div className='row mt-4 justify-content-center '>
    <div className='col-md-8'>
        <table className='table table-border  table-striped table-dark table-hover'>
            <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Delete</th>

                    </tr>

            </thead>
            <tbody>
                {
                    stu_data.map((obj)=>{
                        return(
                            <>
                            <tr key={obj.id}>

                                <td>{obj.id}</td>
                                <td>{obj.name}</td>
                                <td>{obj.age}</td>
                                <td>{obj.mail}</td>
                                <td>
                                    <button className='btn btn-warning' 
                                    set_data={set_data} onClick={()=>{HandleUpdate(obj.id,obj.name,obj.age,obj.mail)}}>
                                        Edit
                                    </button>
                                </td>
                                <td>
                                <button className='btn btn-danger'
                                set_data={set_data} onClick={() => HandleDelete(obj.id,obj.name,obj.age,obj.mail)}>
                                            Delete
                                </button>
                                </td>
                            </tr>

                                
                            </>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
</div>
    </div>
)
}
