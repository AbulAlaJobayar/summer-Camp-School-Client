import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext} from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const SignUp = () => {
  const { setLoading, signInWithGoogle, createUser, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { register, handleSubmit,formState: { errors },reset} = useForm();

  const onSubmit = (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const confirm_password = data.confirm_password;
    console.log(name, email, password, confirm_password);

    // img upload
    const image = event.target.image.files[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const imageUrl = imageData.data.display_url;

        createUser(email, password)
          .then((result) => {
            reset()
            console.log(result);
            updateUserProfile(name, imageUrl)
              .then(() => {
                Swal.fire({
                  position: 'top-center',
                  icon: 'success',
                  title: 'Signup successful',
                  showConfirmButton: false,
                  timer: 1500
                })
                
                navigate(from, { replace: true });
              })
              .catch((err) => {
                setLoading(false);
                console.log(err.message);

                Swal.fire({
                  position: 'top-center',
                  icon: 'error',
                  title: (err.message),
                  showConfirmButton: false,
                  timer: 1500
                })
              });
          })
          .catch((err) => {
            setLoading(false);
            console.log(err.message);
            Swal.fire({
              position: 'top-center',
              icon: 'error',
              title: (err.message),
              showConfirmButton: false,
              timer: 1500
            })
          });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        Swal.fire({
          position: 'top-center',
          icon: 'error',
          title: (err.message),
          showConfirmButton: false,
          timer: 1500
        })
      });

    return;
  };

  
  // google signin
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        Swal.fire({
          position: 'top-center',
          icon: 'error',
          title: (err.message),
          showConfirmButton: false,
          timer: 1500
        })
      });
  };
  return (
    <div className="flex justify-center items-center  bg-white">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900 w-3/4">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>

              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Enter your Name"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>

              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Enter your email address"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>

              <input
                className="w-full px-3 py-2 border rounded-md border-gray-300  bg-gray-200 text-gray-900"
                type="password"
                {...register("password", {
                    required: true,
                    minLength: 6,
                    
                    pattern:
                      /(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                  })}
                placeholder="password"
              />
              {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">password must be 6 character</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    password must have one Uppercase one 
                    and One spacial character
                  </p>
                )}
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="Confirm password" className="text-sm mb-2">
                  Confirm password
                </label>
              </div>

              <input
                className="w-full px-3 py-2 border rounded-md border-gray-300  bg-gray-200 text-gray-900"
                type="password"
                {...register("confirm_password", {
                  required: true,
                })}
                placeholder="Confirm password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className=" bg-[#2572ff] w-full rounded-md py-3 text-white"
            >
              Contunie
            </button>
          </div>
        </form>
        <div
          onClick={handleGoogleSignIn}
          className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-rose-500 text-gray-600"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
