import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import SingleClass from "./SingleClass";

const MyClass = () => {
  const [allclass, setAllClass] = useState([]);

  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/postdata/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAllClass(data));
  }, [user.email]);
  return (
    <div className="overflow-x-auto w-full h-full mt-10">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Course Name</th>
            <th>Total Enrolled</th>
            <th>Feadback</th>
            <th>Seats</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {allclass.map((singleClass, i) =><SingleClass key={singleClass._id} singleClass={singleClass} i={i}></SingleClass> )}
        </tbody>
      </table>
    </div>
  );
};

export default MyClass;
