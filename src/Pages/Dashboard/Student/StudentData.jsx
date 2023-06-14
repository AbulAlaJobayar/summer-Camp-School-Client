const StudentData = ({ item ,i}) => {
  const { _id, itemid, photo, classname, instructorname, price, seat } = item;

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
          <button className="btn btn-ghost btn-xs">Delete</button>
        </th>
        <th>
          <button className="btn btn-ghost btn-xs">Pay</button>
        </th>
      </tr>
    </>
  );
};

export default StudentData;
