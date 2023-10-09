import { Link, useLoaderData } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import Event from "../Event/Event";
import Footer from "../../Shared/Footer/Footer";
import Sale from "../Sale/Sale";
import Gallery from "../Gallery/Gallery";


const Home = () => {
    const events = useLoaderData()
    console.log(events)
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Header></Header>
            <div>
                <img className="w-full h-[500px] brightness-50 relative" src="/public/banner.jpg" alt="" />
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md absolute top-1/4 " data-aos="fade-up">
                        
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5m text-2xl mb-2">"Good fortune is what happens when opportunity meets with planning."</p>
                       
                        <Link to ="/register">
                            <button className="btn btn-primary">Get Started</button>
                        </Link>


                    </div>
                </div>
            </div>
            <h3 className="text-center text-4xl mb-8">Our Services</h3>

            {/* events container */}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
                {
                    events.map(event => <Event key={event.id} event={event}></Event>)
                }
            </div>
            <Sale></Sale>
            <Gallery></Gallery>

            <Footer></Footer>
        </div>
    );
};

export default Home;