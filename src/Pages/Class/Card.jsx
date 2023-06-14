import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Card = ({ data ,setDisable}) => {
  

const {user} =useContext(AuthContext)      
  console.log(data);
  const {
    photo,
    classname,
    instructorname,
    instructoremail,
    seat,
    price,
   
  } = data;
const handleBooked=()=>{
       const enroll={
              photo:data.photo,
              classname:data.classname,
              instructorname:data.instructorname,
              instructoremail,
              seat:data.seat,
              email:user.email,
              pay:"unpaid"
       }

       fetch("http://localhost:5000/studentdata", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(enroll),
            })
            .then(res=>res.json())
            .then(data=>{
              console.log(data)
              
            })

}

  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl mb-4">
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
          

          <div className="card-actions justify-center ">
            <button onClick={handleBooked} className="btn btn-primary" disabled={instructoremail==user?.email || setDisable(true)}>Purchases</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
