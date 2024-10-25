import image1 from "../../../assets/images/banner/1.jpg"
import image2 from "../../../assets/images/banner/2.jpg"
import image3 from "../../../assets/images/banner/3.jpg"
import image4 from "../../../assets/images/banner/4.jpg"

const Banner = () => {
    return (

        <div>
            <div className="carousel w-full h-[500px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={image1} className="w-full" />
                    <div className="absolute flex items-center transform  bottom-0 left-0 top-0 bg-gradient-to-r from-[#000000b3] to-[rgba(21, 21, 21, 0)] h-full">
                        <div className="text-white space-y-7 pl-12 w-1/2">
                            <h1 className="text-6xl font-bold">Affordable Price For Car Servicing </h1>
                            <p className="text-white">There are many variations of passages of available, but the majority have suffered alteration in some form </p>
                            <div className="flex gap-2">
                                <button className="btn btn-secondary">discover more</button>
                                <button className="btn btn-outline btn-warning">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={image2} className="w-full" />
                    <div className="absolute flex items-center transform  bottom-0 left-0 top-0 bg-gradient-to-r from-[#000000b3] to-[rgba(21, 21, 21, 0)] h-full">
                        <div className="text-white space-y-7 pl-12 w-1/2">
                            <h1 className="text-6xl font-bold">Affordable Price For Car Servicing </h1>
                            <p className="text-white">There are many variations of passages of available, but the majority have suffered alteration in some form </p>
                            <div className="flex gap-2">
                                <button className="btn btn-secondary">discover more</button>
                                <button className="btn btn-outline btn-warning">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={image3} className="w-full" />
                    <div className="absolute flex items-center transform  bottom-0 left-0 top-0 bg-gradient-to-r from-[#000000b3] to-[rgba(21, 21, 21, 0)] h-full">
                        <div className="text-white space-y-7 pl-12 w-1/2">
                            <h1 className="text-6xl font-bold">Affordable Price For Car Servicing </h1>
                            <p className="text-white">There are many variations of passages of available, but the majority have suffered alteration in some form </p>
                            <div className="flex gap-2">
                                <button className="btn btn-secondary">discover more</button>
                                <button className="btn btn-outline btn-warning">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={image4} className="w-full" />
                    <div className="absolute flex items-center transform  bottom-0 left-0 top-0 bg-gradient-to-r from-[#000000b3] to-[rgba(21, 21, 21, 0)] h-full">
                        <div className="text-white space-y-7 pl-12 w-1/2">
                            <h1 className="text-6xl font-bold">Affordable Price For Car Servicing </h1>
                            <p className="text-white">There are many variations of passages of available, but the majority have suffered alteration in some form </p>
                            <div className="flex gap-2">
                                <button className="btn btn-secondary">discover more</button>
                                <button className="btn btn-outline btn-warning">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;