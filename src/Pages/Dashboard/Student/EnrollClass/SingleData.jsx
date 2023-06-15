
const SingleData = ({ item ,i,}) => {
       const {pay, photo, classname, instructorname, price, seat } = item;
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
                 {pay}
                </th>
                
              </tr>
            
            </>
       );
};

export default SingleData;