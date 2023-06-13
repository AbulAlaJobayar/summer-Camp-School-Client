import { useEffect, useState } from "react";
import ManageSingleUser from "./ManageSingleUser";

const ManageUsers = () => {

       const [users, setUsers]=useState([])
       useEffect(()=>{
              fetch('http://localhost:5000/adminmanage')
              .then(res=>res.json())
              .then(data=>setUsers(data))
       },[])
       console.log(users);
       return (
              <div className="overflow-x-auto w-full">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>All Users Name</th>
                    <th>All Users Email</th>
                    <th>Role</th>
                    <th>Make Admin</th>
                    <th>Make Instructor</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {
                    users.map((item,i)=><ManageSingleUser key={item._id} i={i} item={item}></ManageSingleUser>)
                  }
                </tbody>
              </table>
            </div>
       );
};

export default ManageUsers;