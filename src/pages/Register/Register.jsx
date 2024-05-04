import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg"

const Register = () => {
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const userInfo = { name, email, password }
        console.log(userInfo);
        form.reset()
    }
    return (
        <div className="hero min-h-screen  flex justify-around gap-2 items-center">
            <div className="w-1/5" >
                <img className="w-full" src={login} alt="" />
            </div>
            <div className=" w-[400px] border p-2">
                <h1 className="text-center text-3xl">Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                    </div>
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
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6 w-full">
                        <button className="bg-[#ff3811] py-2 px-3 text-white rounded-md">Sign Up</button>
                    </div>
                    <p className="text-center">Or Sign Up with</p>
                    <div className="flex justify-center items-center gap-3">
                        <button>google</button>
                        <button>github</button>
                    </div>
                    <p className="text-center">You have already account? <Link to="/login" className="text-[#ff3811]">Login</Link></p>
                </form>
            </div>
        </div>

    );
};

export default Register;