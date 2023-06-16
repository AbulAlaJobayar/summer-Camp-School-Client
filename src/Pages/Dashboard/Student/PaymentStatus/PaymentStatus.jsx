import PaymentData from "../../../../Component/PaymentData";
import SinglePayment from "./SinglePayment";


const PaymentStatus = () => {
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
                    <th>Name</th>
                    <th>Email</th>
                    <th>Price</th>
                    <th>date</th>
                    <th>transactionId</th>
                  
                  </tr>
                </thead>
                <tbody>
                  {paid?.map((item,i) => (
                     <SinglePayment key={item._id} item={item} i={i}></SinglePayment>
                    
                  ))}
                </tbody>
              </table>
            </div>
       );
};

export default PaymentStatus;