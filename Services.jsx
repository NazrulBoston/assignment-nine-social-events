import { Link } from "react-router-dom";
import Navbar from "./src/Shared/Navbar/Navbar";


const Services = () => {
    return (
       <div>
        <Navbar></Navbar>
         <div className="max-w-6xl mx-auto p-6 text-center mt-10 ">
            <h1 className="text-3xl font-bold mb-4">About Our Event Planning Business</h1>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
                <p>
                Welcome to our company's event planning service! For our clientele, we are dedicated about providing unique experiences. Our adventure started in 2020 when Nazrul Islma established the business with the goal of offering an amazing event for an affordable price.</p>
            </div>

          

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Our Services</h2>
                <p>
                Weddings, birthday parties, anniversaries, engagement parties, retirement celebrations, and baby showers are just a few of the occasions we specialize in organizing. Our extensive services guarantee that our clients will have a stress-free and joyful experience.
                    <Link to="/">
                        <div className="mt-4" data-aos="zoom-in">
                            <a href='#card' className="btn bg-blue-600 text-white border-none">Our services</a >
                        </div>
                    </Link>
                </p>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
                <p>
                Have concerns or are you prepared to begin organizing your upcoming event with us? Call us right away!                    <p>Email:dobon.islam@icloud.com</p>
                </p>

            </div>

        </div>
       </div>


    );
};

export default Services;