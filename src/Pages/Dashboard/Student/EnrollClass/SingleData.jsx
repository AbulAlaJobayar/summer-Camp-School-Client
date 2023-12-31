
const SingleData = ({ item ,i,}) => {
       const {status, photo, instructoremail
        , instructorname, price, date} = item;
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
                  <div className="font-bold">{instructorname}</div>
                </td>
        
                <td>
                  <div className="text-sm opacity-50">
                  {instructoremail}</div>
                </td>
                <td>
                  <h1>${price}</h1>
                </td>
                <td>{date}</td>
                <th>
                 {status}
                </th>
                
              </tr>
            
            </>
       );
};

export default SingleData;