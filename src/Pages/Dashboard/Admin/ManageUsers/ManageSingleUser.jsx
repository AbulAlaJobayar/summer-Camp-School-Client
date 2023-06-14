const ManageSingleUser = ({item, i,handleMakeAdmin,handleMakeInstructor}) => {


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
      <td><button onClick={() => handleMakeAdmin(_id)} className="btn btn-primary"  disabled={role === "admin"} >Admin</button> </td>
      <td>
      <button onClick={() => handleMakeInstructor(_id)} className="btn btn-primary"  disabled={role === "instructor"}>Instructor</button> </td>
      
      
    </tr>
  );
};

export default ManageSingleUser;
