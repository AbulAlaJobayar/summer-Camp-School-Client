import { useEffect, useState } from "react";
import Container from "../../../Shared/Container";
import SingleInstructor from "./SingleInstructor";

const Instructorpage = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/instructor")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  return (
    <div className="h-full bg-slate-100">
      <div>
        <h1 className="text-center mt-14 text-5xl font-bold text-slate-900">
          All Instructor
        </h1>
      </div>
      <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 gap-10">
     {
       datas.map(data=><SingleInstructor key={data._id} data={data}  ></SingleInstructor>
       )}

     </div>

      </Container>
    </div>
  );
};

export default Instructorpage;
