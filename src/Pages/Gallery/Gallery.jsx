

const Gallery = () => {
    return (
        <div className="max-w-6xl mx-auto mt-10 mb-8">
            <h2 className="text-center my-4 text-3xl text-red-500">Photo Gallery</h2>

            <div className="grid lg:grid-cols-4 gap-8" data-aos="fade-up"
                data-aos-duration="3000" >
                <div>
                    <img src="/public/gallery/gallery1.jpg" alt="" />
                </div>
                <div>
                    <img src="/public/gallery/gallery2.jpg" alt="" />
                </div>
                <div>
                    <img src="/public/gallery/gallery3.jpg" alt="" />
                </div>
                <div>
                    <img className="h-40 w-80" src="/public/gallery/gallery4.jpg" alt="" />
                </div>
            </div>
           

        </div>
    );
};

export default Gallery;