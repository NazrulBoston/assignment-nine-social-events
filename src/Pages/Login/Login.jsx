import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";


const Login = () => {
    const handleLogin = e => {
        e.preventDefault(),
            console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        console.log(form.get('password'))
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-3xl mt-7 text-center">Please Login</h2>

                <div>
                    <form onSubmit={handleLogin} className="card-body md:w-3/4, lg:w-1/2 mx-auto">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="text-center mb-6">Do not have an account <Link to="/register"><span className="border-2 rounded bg-slate-200 text-blue-600 px-1">Register</span></Link></p>

                </div>
            </div>
        </div>
    );
};

export default Login;