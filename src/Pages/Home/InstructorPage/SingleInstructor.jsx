

const SingleInstructor = ({data}) => {

       return (
              <>
              <div className="card card-side bg-base-100 shadow-xl mb-10 mx-10 w-96">
                <figure className="w-1/2">
                  <img className="object-cover" src={data.image} alt="photo" />
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