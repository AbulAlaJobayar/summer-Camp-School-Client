import { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Fade } from "react-awesome-reveal";

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
     <h1><Fade>Student Dashboard</Fade></h1>
       <li><Link to='/dashboard/myclass'>  <Fade> My Classes</Fade></Link></li>
       <li><Link to='/deshboard/enroll'><Fade> Enrolled Classes</Fade> </Link></li>
       <li><Link to='/deshboard/payment'> <Fade> Payment</Fade></Link></li>

     </>)
  }

{/* Instructor role */}

{
     role && role==='instructor' &&(<>
       <li><Link to='/dashboard/addclass'> <Fade>Add a Class</Fade> </Link></li>
       <li><Link to='/dashboard/instructorclass'> <Fade> My Classes</Fade></Link></li>

     </>)
}


{/* Admin */}
{
     role && role==='admin' &&(<>
       <li><Link to='/dashboard/manageclass'> <Fade>Manage Classes</Fade> </Link></li>
       <li><Link to='/dashboard/manageusers'> <Fade>Manage Users</Fade> </Link></li>

     </>)
}



          
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
