

const SingleInstructor = ({data}) => {

       return (
              <>
              <div className="card card-side bg-base-100 shadow-xl mb-4">
                <figure className="w-1/2">
                  <img className="w-full h-full" src={data.image} alt="photo" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title capitalize">{data.name}</h2>
                    <p>{data.email}</p>
                </div>
              </div>
            </>
       );
};

export default SingleInstructor;