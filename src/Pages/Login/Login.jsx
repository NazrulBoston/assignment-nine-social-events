import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";


const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location in the location page',location)

    const handleLogin = e => {
        e.preventDefault(); 
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const email = form.get(('email'))
        const password = form.get(('password'))
        console.log(email, password)
        if (password.length < 6) {
            toast.error("Password is less than 6 characters")
            return
        } else if (!/[A-Z]/.test(password)) {
            toast.error('Password do not have a capital letter');
            return
        }  else if (!/[!@#$%^&*]/.test(password)) {
            toast.error('Password do not have a special character');
            return
        }


        signIn(email, password)
        .then(result => {
            console.log(result.user)
            toast.success("Login successfully!")
            navigate(location?.state ? location.state : "/");
        })
        .catch(error => {
            console.error(error)
        })
    
    }

    const handleSocial = (media) => {
        media()
            .then(result => {
                console.log(result.user)
                toast.success("Login Successfully")
                navigate(location?.state ? location.state : "/")

            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-6">
                <h2 className="text-3xl text-center mb-3">Please Login </h2>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                    <form onSubmit={handleLogin} className="card-body">
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
                    <p className="text-center mb-6">Do not have an account <Link to ="/register"><span className="border-2 rounded bg-slate-200 text-blue-600 px-1">Register</span></Link></p>
                    <button onClick={()=> handleSocial(signInWithGoogle)} className="btn btn-outline w-3/4 mx-auto mb-4"> <FaGoogle></FaGoogle>
                   login with google
                </button>
                </div>
            </div>
            
        </div>
    );
};

export default Login;