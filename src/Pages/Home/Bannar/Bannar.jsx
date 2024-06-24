import img1 from "../../../assets/images/banner/1.jpg"
import img2 from "../../../assets/images/banner/2.jpg"
import img3 from "../../../assets/images/banner/3.jpg"
import img4 from "../../../assets/images/banner/4.jpg"
import img5 from "../../../assets/images/banner/5.jpg"
import img6 from "../../../assets/images/banner/6.jpg"

const Bannar = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full h-[520px]">
                <img
                    src={img5}
                    className="w-full" />
                    <div className="absolute left-24 w-64 top-32 mt">
                    <h2 className="text-4xl font-bold text-white">
                        Affordable Price For Car Servicing
                        </h2>
                        <p className="mt-4 text-white text-lg">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="mt-4 flex justify-between">
                        <button className="btn btn-active btn-secondary">Discover More</button>
                        <button className="btn btn-outline btn-accent">Latest Project</button>
                        </div>
                    </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-[520px]">
                <img
                    src={img2}
                    className="w-full" />
                    <div className="absolute left-24 w-64 top-32 mt">
                    <h2 className="text-4xl font-bold text-white">
                        Affordable Price For Car Servicing
                        </h2>
                        <p className="mt-4 text-white text-lg">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="mt-4 flex justify-between">
                        <button className="btn btn-active btn-secondary">Discover More</button>
                        <button className="btn btn-outline btn-accent">Latest Project</button>
                        </div>
                    </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-[520px]">
                <img
                   src={img3}
                    className="w-full" />
                    <div className="absolute left-24 w-64 top-32 mt">
                    <h2 className="text-4xl font-bold text-white">
                        Affordable Price For Car Servicing
                        </h2>
                        <p className="mt-4 text-white text-lg">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="mt-4 flex justify-between">
                        <button className="btn btn-active btn-secondary">Discover More</button>
                        <button className="btn btn-outline btn-accent">Latest Project</button>
                        </div>
                    </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full h-[520px]">
                <img
                    src={img4}
                    className="w-full" />
                    <div className="absolute left-24 w-64 top-32 mt">
                    <h2 className="text-4xl font-bold text-white">
                        Affordable Price For Car Servicing
                        </h2>
                        <p className="mt-4 text-white text-lg">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="mt-4 flex justify-between">
                        <button className="btn btn-active btn-secondary">Discover More</button>
                        <button className="btn btn-outline btn-accent">Latest Project</button>
                        </div>
                    </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full h-[520px]">
                <img
                    src={img1}
                    className="w-full" />
                    <div className="absolute left-24 w-64 top-32 mt">
                    <h2 className="text-4xl font-bold text-white">
                        Affordable Price For Car Servicing
                        </h2>
                        <p className="mt-4 text-white text-lg">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="mt-4 flex justify-between">
                        <button className="btn btn-active btn-secondary">Discover More</button>
                        <button className="btn btn-outline btn-accent">Latest Project</button>
                        </div>
                    </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full h-[520px]">
                <img
                    src={img6}
                    className="w-full" />
                    <div className="absolute left-24 w-64 top-32 mt">
                    <h2 className="text-4xl font-bold text-white">
                        Affordable Price For Car Servicing
                        </h2>
                        <p className="mt-4 text-white text-lg">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="mt-4 flex justify-between">
                        <button className="btn btn-active btn-secondary">Discover More</button>
                        <button className="btn btn-outline btn-accent">Latest Project</button>
                        </div>
                    </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Bannar;