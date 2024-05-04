import { FaArrowRight } from "react-icons/fa6";


const ServiceCard = ({ service }) => {
    console.log(service);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={service.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{service.title}</h2>
                
                <div className="card-actions justify-between items-center text-red-500 ">
                    <p className="font-bold">Price: ${service.price}</p>
                    <button ><FaArrowRight/></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;