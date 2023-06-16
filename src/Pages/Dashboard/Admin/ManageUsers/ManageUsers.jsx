import { useEffect, useState } from "react";
import ManageSingleUser from "./ManageSingleUser";
import Swal from "sweetalert2";

const ManageUsers = () => {

       const [users, setUsers]=useState([])
       const [refetch, setRefetch] = useState(false);

       useEffect(()=>{
              fetch('https://assinment-12-server-ten.vercel.app/adminmanage')
              .then(res=>res.json())
              .then(data=>setUsers(data))
       },[refetch])

const handleMakeAdmin=(id)=>{
  const updateStatus = { role:"admin" };
  fetch(`https://assinment-12-server-ten.vercel.app/updaterole/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(updateStatus),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Role changed successfully !",
        });
     }
     setRefetch(true);
    });
};
const handleMakeInstructor=(id)=>{
  const updateStatus = { role:"instructor" };
  fetch(`https://assinment-12-server-ten.vercel.app/updaterole/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(updateStatus),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Role changed successfully !",
        });
     }
     setRefetch(true);
    });
};




       return (
              <div className="overflow-x-auto w-full h-full">
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
                    users.map((item,i)=><ManageSingleUser key={item._id} i={i} item={item} handleMakeAdmin={handleMakeAdmin} handleMakeInstructor={handleMakeInstructor}></ManageSingleUser>)
                  }
                </tbody>
              </table>
            </div>
       );
};

export default ManageUsers;