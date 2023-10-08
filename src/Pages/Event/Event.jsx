

const Event = ({ event }) => {
    const { title, details, description, image, price } = event;
    return (
        <div className="card  bg-base-100 shadow-xl ">
            <figure><img className="h-60" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p>${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">{details}</button>
                </div>
            </div>
        </div>
    );
};

export default Event;