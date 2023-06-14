
import { Link, useRouteError } from 'react-router-dom';
import Lottie from "lottie-react";
import animation from "../../assets/animation.json";


const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <div>
            <div className='w-96 mx-auto '>
                <Lottie animationData={animation} loop={true} />
                <div className='flex items-center flex-col'>
                <h1 className='text-5xl font-bold text-center'>
                    Error <span>{status || 404}</span>
                </h1>
                <p className='text-3xl font-bold text-center'>{error?.message}</p>
                <Link
                    to='/'
                    className='text-center  mx-auto text-xl font-semibold bg-[#2396DC] px-5 py-3 rounded mt-5'
                >
                    Back to homepage
                </Link>
                </div>
            </div>


        </div>
    );
};

export default ErrorPage;