import { useState } from "react";
import Feadback from "./Feadback";

const ManageSingleClass = ({data,i,handleApproved,handleDenied}) => {

const {classname,instructoremail,instructorname,photo,price,_id,seat,status}=data || []


const [isOpen, setIsOpen]=useState(false)
const closeModal=()=>{
  setIsOpen(false)
}





  return (
    <>
      <tr>
        <th>
         {i+1}
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={photo}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{classname}</div>
            </div>
          </div>
        </td>
        <td>
        {instructorname}
         
          <br />
          <span className="badge badge-ghost badge-sm">
          {instructoremail}
          </span>
        </td>
        <td>{price}</td>
        <td>{seat}</td>
        <td >


          <h1 className={status && status==="denied"?" capitalize font-bold  text-red-800   ":" capitalize font-bold    text-green-600  "}>
          {status}
          </h1>
        </td>

        <td><button disabled={status=="denied" || status=="approved"} onClick={()=>handleApproved(_id)} className="btn btn-success">Approve</button></td>
        <td> <button disabled={status=="denied" || status=="approved"} onClick={()=>handleDenied(_id)} className="btn btn-error">Denied</button> </td>

        <td> <button disabled={status=="pending" || status=="approved"}
         onClick={()=>setIsOpen(true)} className="btn btn-primary">Feadback</button> </td>

        {/* <td> <button disabled={status=="pending" || status=="approved"} onClick={()=>handleFeedback(_id)} className="btn btn-primary">Feadback</button> </td> */}
           
      </tr>
      <Feadback isOpen={isOpen} id={_id} closeModal={closeModal} setIsOpen={setIsOpen} ></Feadback>
    </>
  );
};

export default ManageSingleClass;
