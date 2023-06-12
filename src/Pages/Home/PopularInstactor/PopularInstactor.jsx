
const PopularInstactor = ({teacher}) => {

       return (
             <div>
                  <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img className="w-full"
                src={teacher.image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">{teacher.name}</h2>
              <p className="text-base font-semibold">{teacher.subject}</p> 
             </div> 
           </div> 
              </div>
       );
};

export default PopularInstactor;