const SingleClass = ({singleClass,i}) => {
const {seat,enroll}=singleClass
const totatseat= parseFloat(seat)
const totalEnroll=parseFloat(enroll)
const total=totatseat-totalEnroll;
console.log(total);

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
          <h1>
            {singleClass && singleClass?.status === "denied" && (
              <>{singleClass.feadback}</>
            )}
          </h1>
        </td>
        <td>{total}</td>
        <td><button className="capitalize text-base font-semibold border border-slate-800 rounded py-2 px-4">{singleClass.status}</button></td>
      </tr>
    </>
  );
};

export default SingleClass;
