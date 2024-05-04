import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../components/provider/ContextProvider";
import google from '../../assets/social-icon/google.png'
import github from '../../assets/social-icon/github.png'

const Login = () => {
    const { signInUserWithEmailPass } = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUserWithEmailPass(email, password)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error.message);
            })
        // const userInfo = { email, password }
        // console.log(userInfo);

        form.reset()
    }

    return (
        <div className="hero min-h-screen  flex justify-around gap-2 items-center">
            <div className="w-1/5" >
                <img className="w-full" src={login} alt="" />
            </div>
            <div className=" w-[400px] border p-2">
                <h1 className="text-center text-3xl">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6 w-full">
                        <button className="bg-[#ff3811] py-2 px-3 text-white rounded-md">Sign In</button>
                    </div>
                    <p className="text-center">Or Sign in with</p>
                    <div className="flex justify-center items-center gap-3">
                        <button >
                            <img className='w-[50px]' src={google} alt="" />
                        </button>
                        <button >
                            <img className='w-[33px]' src={github} alt="" />
                        </button>
                    </div>
                    <p className="text-center">You have no account? <Link to="/register" className="text-[#ff3811]">Sign Up</Link></p>
                </form>
            </div>
        </div>

    );
};

export default Login;