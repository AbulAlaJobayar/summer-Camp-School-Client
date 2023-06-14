import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineEye,AiTwotoneEyeInvisible} from "react-icons/ai";
import Swal from 'sweetalert2'
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

import { useForm } from "react-hook-form";
import { saveUser } from "../../Component/auth";

const Login = () => {
  const {signIn, signInWithGoogle } =useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { register, handleSubmit } = useForm();

  const [changePassword, setChangePassword] = useState(true);
  const changeIcon = changePassword === true ? false : true;

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Login success',
          showConfirmButton: false,
          timer: 1500
        })
        navigate(from, { replace: true });
      })
      .catch((err) => {
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

  // google signin
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Login success',
          showConfirmButton: false,
          timer: 1500
        })
        saveUser(result.user)
        navigate(from, { replace: true });
      })
      .catch((err) => {
        
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
    <div className="flex justify-center items-center min-h-[calc(100vh-100px)]">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900 ">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Log In</h1>
          <p className="text-sm text-gray-400">Sign in to your account</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
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
                className="w-full px-3 py-2 border rounded-md border-gray-300  bg-gray-200 text-gray-900 relative"
                type={changePassword ? "password" : "text"}
                {...register("password", {
                  required: true,
                })}
                placeholder="password"
              />
               <span className="icon absolute -ml-10 mt-3 "
                 onClick={() => {
                    setChangePassword(changeIcon);
                 }}
              >
                 {changeIcon ? <AiOutlineEye></AiOutlineEye> : <AiTwotoneEyeInvisible  />}
              </span>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#2572ff] w-full rounded-md py-3 text-white"
            >
              Continue
            </button>
          </div>
        </form>
        <div className="space-y-1">
          <button className="text-xs hover:underline hover:text-red-500 text-gray-400">
            Forgot password?
          </button>
        </div>

        <div
          onClick={handleGoogleSignIn}
          className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Do not have an account yet?{" "}
          <Link
            to="/signup"
            className="hover:underline hover:text-red-500 text-gray-600"
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;

// import { useForm } from "react-hook-form";

// const Login = () => {
//   const { register, handleSubmit } = useForm();
//   const loading =true

//   const onSubmit = (data) => {
//     console.log(data);
//   };
//   return (
//     <div className="flex justify-center items-center min-h-screen">
//       <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
//         <div className="mb-8 text-center">
//           <h1 className="my-3 text-4xl font-bold">Log In</h1>
//           <p className="text-sm text-gray-400">Sign in to your account</p>
//         </div>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="space-y-4">
//             <div>
//               <label htmlFor="email" className="block mb-2 text-sm">
//                 Email address
//               </label>
//               <input
//                 type="email"
//                 {...register("email", { required: true })}
//                 placeholder="Enter your email address"
//                 className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#2572ff] bg-gray-200 text-gray-900"
//                 data-temp-mail-org="0"
//               />
//             </div>
//             <div className="flex justify-between">
//               <label htmlFor="password" className="text-sm mb-2">
//                 Password
//               </label>
//             </div>

//             <input
//               className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
//               type="password"
//               {...register("password", {
//                 required: true,
//               })}
//               placeholder="password"
//             />
//           <div>
//             <button
//               type="submit"
//               className="bg-rose-500 w-full rounded-md py-3 text-white" >

//                 Continue

//             </button>
//           </div>
//           </div>

//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
