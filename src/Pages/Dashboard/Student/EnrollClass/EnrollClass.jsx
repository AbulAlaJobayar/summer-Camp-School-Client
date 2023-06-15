import RQuery from "../../../../Component/RQuery";
import SingleData from "./SingleData";


const EnrollClass = () => {
       const [studentdata] = RQuery();
       const paid = studentdata.filter((item) => item.pay == "paid");
  console.log(paid);

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
                    <th> status</th>
                  
                  </tr>
                </thead>
                <tbody>
                  {paid?.map((item,i) => (
                     <SingleData key={item._id} item={item} i={i}></SingleData>
                    
                  ))}
                </tbody>
              </table>
            </div>
       );
};

export default EnrollClass;