import { useParams } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";


const EventDetails = () => {
    const { id } = useParams();
    return (
        <div>
            <Navbar></Navbar>
            <div className="text-center my-8">
                <h2 className="text-4xl">Event Details</h2>
                <p>{id}</p>
            </div>
        </div>
    );
};

export default EventDetails;