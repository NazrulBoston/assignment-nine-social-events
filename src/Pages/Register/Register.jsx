import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";


const Register = () => {

    const handleRegister = e => {
        e.preventDefault(),
            console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const name = form.get(('name'));
        const photo = form.get(('photo'));
        const email = form.get(('email'));
        const password = form.get(('password'))

        console.log(name, photo, email, password)

    }


    return (
        <div>

            <Navbar></Navbar>
            <div>
                <h2 className="text-3xl mt-7 text-center">Please Register</h2>

                <div>
                    <form onSubmit={handleRegister} className="card-body md:w-3/4, lg:w-1/2 mx-auto">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
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

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className="text-center mb-6">Have an account <Link to="/login"><span className="border-2 rounded bg-slate-200 text-blue-600 px-1">Register</span></Link></p>

                </div>
            </div>
        </div>
    );
};

export default Register;