import  Axios from 'axios';
import { useNavigate} from 'react-router-dom';
import Alert_Delete from './Alert_Delete';
const url="https://65aac77f081bd82e1d97c37a.mockapi.io/students";
export const Get_data=(set_data,navigate)=>{
   
    Axios.get(url).then((response)=>{
        set_data(response.data);
    }).catch((error)=>{navigate('/Error')})
}

export const Delete_record = (id) => {
    
    Axios.delete(`${url}/${id}`)
      .then(() => {
        //display message
        <Alert_Delete/>
      })
      .catch(error => {
        console.error('Error deleting record:', error);
        // Handle the error as needed
      });
  };


export const Update_Data=(id,name,age,email,navigate)=>{
  Axios.put(`${url}/${id}`,{

    name:name,
    age:age,
    mail:email
  }).then(
    navigate('/')
  )
}