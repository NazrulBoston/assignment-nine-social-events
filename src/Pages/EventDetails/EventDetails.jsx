import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";


const EventDetails = () => {
    const cards = useLoaderData()
    const { id } = useParams()
    const card = cards.find(card => card.id == id)
    const {title, image, description, price} = card;
    return (
        <div>
            <Navbar></Navbar>
            <div className="text-center my-8 max-w-4xl  mx-auto my-4">
                <h2 className="text-4xl mb-2 text-red-500">Event Details</h2>
                <p className="text-2xl py-3">{title}</p>
                <img className="h-[400px] w-full rounded" src={image} alt="" />
                <p className="mt-2">{description}</p>
                <p className="text-xl text-red-600 mt-2">Price: ${price}</p>
            </div>
        </div>
    );
};

export default EventDetails;