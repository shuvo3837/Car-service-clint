import { GoArrowRight } from "react-icons/go";

const ServiceCard = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={img}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-red-700 font-bold">price: ${price}</p>
                <div className="card-actions justify-end text-red-700 font-bold">
                <GoArrowRight />
                </div>

            </div>
        </div>
    );
};

export default ServiceCard;