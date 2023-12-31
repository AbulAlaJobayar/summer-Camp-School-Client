import PaymentData from "../../../../Component/PaymentData";
import SingleData from "./SingleData";


const EnrollClass = () => {
  
       const [payment]=PaymentData()
     const paid=payment
       console.log(payment);
      

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
                    <th>Instructor Name</th>
                    <th>Instructor Email</th>
                    <th> Price</th>
                    <th> date</th>
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