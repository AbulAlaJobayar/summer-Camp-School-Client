import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from 'sweetalert2'

const AddaClass = () => {
  const { user } = useContext(AuthContext);

  const handleAddClass = (event) => {
    event.preventDefault();
    const form = event.target;
    const classname = form.classname.value;
    const photo = form.photo.value;
    const instructorname = form.instructorname.value;
    const instructoremail = form.instructoremail.value;
    const seat = form.seat.value;
    const price = form.price.value;
   

    const addClass = {
      classname: classname,
      photo: photo,
      instructorname: instructorname,
      instructoremail: instructoremail,
      price: parseInt(price),
      seat: seat,
      status:"pending"
     
    };

    fetch("https://assinment-12-server-ten.vercel.app/postdata", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addClass),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Added A Class Successfully !",
          });
          form.reset();
        }
      });
  };

  return (
    <div className="w-5/6 mx-auto my-auto ">
      <h1 className="text-5xl font-bold text-center">Add a Class</h1>
      <form onSubmit={handleAddClass} className="mt-10">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Class Name</span>
              </label>
              <input
                type="text"
                name="classname"
                placeholder="Class Name"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">class Image URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Instructor Name</span>
              </label>
              <input
                type="text"
                name="instructorname"
                defaultValue={user?.displayName}
                placeholder="sellername"
                className="input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Instructor Email</span>
              </label>
              <input
                type="email"
                name="instructoremail"
                defaultValue={user?.email}
                placeholder="email"
                className="input input-bordered"
                readOnly
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Available seat</span>
              </label>
              <input
                type="number"
                name="seat"
                placeholder="seat"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="price"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control my-6">
            <input
              type="submit"
              className="btn btn-block  btn-primary"
              value="Add product"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddaClass;
