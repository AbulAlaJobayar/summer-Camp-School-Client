const ManageSingleUser = ({item, i}) => {

  // eslint-disable-next-line no-unused-vars
  const {image, email,name,_id,role}=item || []
  return (
    <tr>
      <th>{i + 1}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          
        </div>
      </td>

<td>
            <div className="font-bold">{name}</div>
          
</td>



      <td>
      {email}
      </td>
      <td>{role}</td>
    
      {/* <td>
        <h1
          className={
            status && status === "denied"
              ? " capitalize font-bold  text-red-800   "
              : " capitalize font-bold    text-green-600  "
          }
        >
          {status}
        </h1>
      </td>

      <td>
        <button
          disabled={status == "denied" || status == "approved"}
          onClick={() => handleApproved(_id)}
          className="btn btn-success"
        >
          Approve
        </button>
      </td>
      <td>
        {" "}
        <button
          disabled={status == "denied" || status == "approved"}
          onClick={() => handleDenied(_id)}
          className="btn btn-error"
        >
          Denied
        </button>{" "}
      </td>

      <td>
        {" "}
        <button
          disabled={status == "pending" || status == "approved"}
          onClick={() => setIsOpen(true)}
          className="btn btn-primary"
        >
          Feadback
        </button>{" "}
      </td> */}
    </tr>
  );
};

export default ManageSingleUser;
