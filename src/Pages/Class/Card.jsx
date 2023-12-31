import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import RQuery from "../../Component/RQuery";

const Card = ({data,role}) => {


const {
  photo,
  classname,
  instructorname,
  instructoremail,
  seat,
  price,
  _id
 
} = data;


const {user} =useContext(AuthContext)      
const navigate=useNavigate();
const location=useLocation();

const [,refetch]=RQuery()
const [btnDis,setBtnDis]=useState(false)



const handleBooked=(item)=>{
  console.log(item);
       const enroll={
              itemid:_id,
              photo,
              classname,
              instructorname,
              instructoremail,
              seat,
              price,
              email:user.email,
              pay:'unpaid'

       }

       if(user && user.email){
        fetch("https://assinment-12-server-ten.vercel.app/studentdata",{
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(enroll),
        }).then(res=>res.json())
        .then(data=>{
          console.log(data);
          if(data.insertedId){
           refetch()
            Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: 'course added on the cart',
              showConfirmButton: false,
              timer: 1500
            })
            setBtnDis(true);

          }


        })

       }

       else{
        Swal.fire({
          title: 'please log in before selecting the course',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'login now!'
        }).then((result) => {
          if (result.isConfirmed) {
              navigate('/login',{state:{from:location}})
            
          }
        })
       }

}

  return (
    <>
      <div className={`card card-side  shadow-xl mb-4 ${seat==='0'?"bg-red-500":"bg-base-100"}`}>
        <figure className="w-1/2">
          <img className="w-full h-full" src={photo} alt="photo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{classname}</h2>
       
            <p>Name: {instructorname}</p>
            <p>Email: {instructoremail}</p>
            <div className="flex justify-between">
              <p className="text-[#442e66] text-base font-xl" >price: ${price}</p>
              <p>seat:{seat}</p>
            </div>
          

          <div className="card-actions justify-center "  onClick={()=>handleBooked(data)}>
            <button className={`btn  ${seat=='0'?"btn-error":"btn-primary"}`} disabled={role==="admin" || role ==="instructor" || seat==='0' ||!user || btnDis}>Purchases</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
