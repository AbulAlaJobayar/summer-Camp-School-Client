import RQuery from "../../../Component/RQuery";
import StudentData from "./StudentData";
import Swal from 'sweetalert2'

const StudentClass = () => {
  const [studentdata,refetch] = RQuery();

  const unpay = studentdata.filter((item) => item.pay == "unpaid");
  console.log(studentdata);


  const handleDelete=(id)=>{
    console.log(id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
fetch(`http://localhost:5000/coursedelete/${id}`,{
  method: 'DELETE'
}).then(res=>res.json())
.then(data=>{
  console.log(data)
  if(data.deletedCount>0){
    refetch()
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  }
})
}
    })
  }

  return (
    <div className="overflow-x-auto w-full h-full mt-10">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
             #
            </th>
            <th>picture</th>
            <th>Course Name</th>
            <th>Instructor Name</th>
            <th> Price</th>
            <th> Seat</th>
            <th> Action</th>
            <th> Payment</th>
          </tr>
        </thead>
        <tbody>
          {unpay?.map((item,i) => (
            <StudentData key={item._id} item={item} i={i} handleDelete={handleDelete}></StudentData>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentClass;
