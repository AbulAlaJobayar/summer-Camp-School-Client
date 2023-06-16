import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import Container from "../../Shared/Container";
import { AuthContext } from "../../providers/AuthProvider";

const Class = () => {

const {user} =useContext(AuthContext)
  const [datas, SetDatas] = useState([])
  useEffect(() => {
    fetch("https://assinment-12-server-ten.vercel.app/approvedclass")
      .then((res) => res.json())
      .then((data) => SetDatas(data));
  }, []);
 
const [items,setItems]=useState([])
useEffect(()=>{
  fetch(`https://assinment-12-server-ten.vercel.app/users/${user?.email}`)
  .then(res=>res.json())
  .then(data=>setItems(data))

},[user])

// console.log('from class',items[0]?.role);
const role= items[0]?.role;






  return (
    
      <div className="h-full bg-slate-100"> 
   <div>  
   <h1 className="text-center mt-14 text-5xl font-bold text-slate-900">All Class
   </h1>
    </div>
    <Container>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 gap-10">
     {
       datas.map(data=><Card key={data._id} data={data} role={role} ></Card>)
      }
     </div>
      </Container>
    </div>
  );
};

export default Class;
