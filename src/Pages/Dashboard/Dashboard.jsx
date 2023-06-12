import { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Dashboard = () => {
       const {user}=useContext(AuthContext)
       const [datas, setDatas]=useState([])
       useEffect(()=>{
              fetch(`http://localhost:5000/users/${user?.email}`).then(res=>res.json()).then(data=>setDatas(data))

       },[user?.email])
      
const role = datas[0]?.role
            
  return (
    <div className="drawer lg:drawer-open bg-slate-100">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}

        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          {/* student role */}
{
     role && role==='student' &&(<>
       <li><Link to='/deshboard/myclass'>My Classes</Link></li>
       <li><Link to='/deshboard/enroll'>Enrolled Classes</Link></li>
       <li><Link to='/deshboard/payment'>Payment</Link></li>

     </>)
}
{/* Instructor role */}

{
     role && role==='instructor' &&(<>
       <li><Link to='/dashboard'>Add a Class</Link></li>
       <li><Link to='/dashboard/instructorclass'>My Classes</Link></li>

     </>)
}


{/* Admin */}
{
     role && role==='admin' &&(<>
       <li><Link to='/deshboard/addaclass'>Manage Classes</Link></li>
       <li><Link to='/deshboard/class'>Manage Users</Link></li>

     </>)
}



          
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
