import { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Fade } from "react-awesome-reveal";

const Dashboard = () => {
       const {user}=useContext(AuthContext)
       const [datas, setDatas]=useState([])
       useEffect(()=>{
              fetch(`https://assinment-12-server-ten.vercel.app/users/${user?.email}`).then(res=>res.json()).then(data=>setDatas(data))

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
     <h1 className="text-3xl font-bold mt-5"><Fade delay={1e3} cascade damping={1e-1}>Student Dashboard</Fade></h1>
     <hr />
       <li><Link to='/dashboard/myclass'>  <Fade delay={1e3} cascade damping={1e-1}> My Classes</Fade ></Link></li>
       <li><Link to='/dashboard/enrollclass'><Fade delay={1e3} cascade damping={1e-1}> Enrolled Classes</Fade> </Link></li>
       <li><Link to='/dashboard/payment'> <Fade delay={1e3} cascade damping={1e-1}> Payment</Fade></Link></li>

     </>)
  }

{/* Instructor role */}

{
     role && role==='instructor' &&(<>
     <h1 className="text-3xl font-bold mt-5"><Fade delay={1e3} cascade damping={1e-1}>Instructor Dashboard</Fade></h1>
     <hr />
       <li><Link to='/dashboard/addclass'> <Fade delay={1e3} cascade damping={1e-1}>Add a Class</Fade> </Link></li>
       <li><Link to='/dashboard/instructorclass'> <Fade delay={1e3} cascade damping={1e-1}> My Classes</Fade></Link></li>

     </>)
}


{/* Admin */}
{
     role && role==='admin' &&(<>
      <h1 className="text-3xl font-bold mt-5"><Fade delay={1e3} cascade damping={1e-1}>Admin Dashboard</Fade></h1>
     <hr />
       <li><Link to='/dashboard/manageclass'> <Fade delay={1e3} cascade damping={1e-1}>Manage Classes</Fade> </Link></li>
       <li><Link to='/dashboard/manageusers'> <Fade delay={1e3} cascade damping={1e-1}>Manage Users</Fade> </Link></li>

     </>)
}



          
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
