import RQuery from "../../../Component/RQuery";
import StudentData from "./StudentData";

const StudentClass = () => {
  const [studentdata] = RQuery();

  const unpay = studentdata.filter((item) => item.pay == "unpaid");
  console.log(unpay);

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
            <StudentData key={item._id} item={item} i={i}></StudentData>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentClass;
