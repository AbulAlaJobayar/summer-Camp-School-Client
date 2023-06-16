import { useEffect, useState } from "react";
import ManageSingleClass from "./ManageSingleClass";
import Swal from "sweetalert2";

const ManageClass = () => {
  const [datas, setDatas] = useState([]);
  const [refetch, setRefetch] = useState(false);
  useEffect(() => {
    fetch("https://assinment-12-server-ten.vercel.app/alldata")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, [refetch]);

  const handleApproved = (id) => {
    const updateStatus = { status: "approved" };
    fetch(`https://assinment-12-server-ten.vercel.app/updatedata/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateStatus),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Approved !",
          });
       }
       setRefetch(true);
      });
  };

  const handleDenied = (id) => {
       const updateStatus = { status: "denied" };

    fetch(`https://assinment-12-server-ten.vercel.app/updatedata/${id}`, {
       method: "PUT",
       headers: {
         "content-type": "application/json",
       },
       body: JSON.stringify(updateStatus),
     })
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
         if (data.modifiedCount > 0) {
           Swal.fire({
             icon: "warning",
             title: "Denied",
             text: "Denied !",
           });
       }
       setRefetch(true);
       });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Instructor Info</th>
            <th>Price</th>
            <th>Available Seat</th>
            <th>Status</th>
            <th>Approved</th>
            <th>Denied</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {datas?.map((data, i) => (
            <ManageSingleClass
              key={data._id}
              i={i}
              data={data}
              handleApproved={handleApproved}
              handleDenied={handleDenied}
             
            ></ManageSingleClass>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageClass;
