

const PopularClass = ({data}) => {
  const {
    photo,
    classname,
    instructorname,
    instructoremail,
    seat,
    price,
   
  } = data;
  
       return (
        <>
        <div className="card card-side bg-base-100 shadow-xl mb-4">
          <figure className="w-1/2">
            <img className="w-full h-full" src={photo} alt="photo" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{classname}</h2>
         
              <p>Name: {instructorname}</p>
              <p>Email: {instructoremail}</p>
              <div className="flex justify-between">
                <p className="text-[#442e66] text-base font-xl" >price: ${price}</p>
                <p>seat:{seat}</p>
              </div>
          </div>
        </div>
      </>
       );
};

export default PopularClass;