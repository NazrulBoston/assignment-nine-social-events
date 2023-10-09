import { Link } from "react-router-dom";


const Event = ({ event }) => {
    const { title, details, description, image, price, id } = event;
    return (
        <div className="card  bg-base-100 shadow-xl " data-aos="fade-up">
            <figure><img className="h-60" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>

                {
                    description.length > 100
                        ? <p>{description.slice(0, 100)} <Link
                            to={`/event/${id}`}

                            className="text-blue-600">Read more..</Link></p>
                        : <p>{description}</p>
                }

                <p className="text-red-600 text-lg">Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/event/${id}`}>
                        <button className="btn btn-primary">{details}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Event;