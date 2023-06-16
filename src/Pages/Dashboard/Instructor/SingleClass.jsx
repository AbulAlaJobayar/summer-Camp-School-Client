const SingleClass = ({singleClass,i}) => {
const {seat,status}=singleClass

  return (
    <>
      <tr>
        <th>{i + 1}</th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={singleClass.photo}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
          </div>
        </td>
        <td>
          <h1 className="font-bold">{singleClass.classname}</h1>
        </td>
        <td>
          <h1>{singleClass?.enroll ? <>{singleClass?.enroll}</> : <>0</>}</h1>
          <br />
        </td>

        <td>
          <h1 className="text-red-500">
            {singleClass && singleClass?.status === "denied" && (
              <>{singleClass.feadback}</>
            )}
          </h1>
        </td>
        <td>{seat}</td>
        <td><h1 className={status && status==="denied"?" capitalize font-bold  text-red-800   ":" capitalize font-bold    text-green-600  "} >{status}</h1></td>
        <td>
          <button className="btn btn-primary">update</button>
        </td>
      </tr>
      {/* className="capitalize text-base font-semibold rounded py-2 px-4" */}
    </>
  );
};

export default SingleClass;
