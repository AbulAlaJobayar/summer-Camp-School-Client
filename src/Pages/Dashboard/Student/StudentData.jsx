
import { useState } from "react";
import Payment from "./Payment";

const StudentData = ({ item ,i,handleDelete}) => {
  const { _id, photo, classname, instructorname, price, seat } = item;


  const [isOpen, setIsOpen]=useState(false)
 const closeModal=()=>{
  setIsOpen(false)
}


  return (
    <>
      <tr>
      <td>
       {i+1}
      </td>
        <td>
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photo} alt="" />
            </div>
          </div>
        </td>
        <td>
          <div className="font-bold">{classname}</div>
        </td>

        <td>
          <div className="text-sm opacity-50">{instructorname}</div>
        </td>
        <td>
          <h1>${price}</h1>
        </td>
        <td>{seat}</td>
        <th>
          <button className="btn btn-outline btn-xs" onClick={()=>handleDelete(_id)}>Delete</button>
        </th>
        <th>
        <button className="btn btn-outline btn-xs" onClick={()=>setIsOpen(true)} >Pay</button>
        </th>
      </tr>
      <Payment isOpen={isOpen}  closeModal={closeModal} item={item}></Payment>
    </>
  );
};

export default StudentData;
