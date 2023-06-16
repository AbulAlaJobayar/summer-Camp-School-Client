

const SinglePayment = ({item,i}) => {
       const {name,email,transactionId,price,photo,date} = item;
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
                  <div className="font-bold">{name}</div>
                </td>
        
                <td>
                  <div className="text-sm opacity-50">
                  {email}</div>
                </td>
                <td>
                  <h1>${price}</h1>
                </td>
                <td>{date}</td>
                <th>
                 {transactionId}
                </th>
                
              </tr>
            
            </>
       );
};

export default SinglePayment;