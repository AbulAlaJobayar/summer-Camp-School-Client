import { useEffect, useState } from "react";
import Card from "./Card";
import Container from "../../Shared/Container";

const Class = () => {
  const [datas, SetDatas] = useState([]);
  const [disable,setDisable]=useState(false)
  useEffect(() => {
    fetch("http://localhost:5000/approvedclass")
      .then((res) => res.json())
      .then((data) => SetDatas(data));
  }, [disable]);
  console.log(datas);
  return (
    
      <div className="h-full bg-slate-100"> 
   <div>  
   <h1 className="text-center mt-14 text-5xl font-bold text-slate-900">All Class
   </h1>
    </div>
    <Container>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 gap-10">
     {
       datas.map(data=><Card key={data._id} data={data} setDisable={setDisable}></Card>)
      }
     </div>
      </Container>
    </div>
  );
};

export default Class;
