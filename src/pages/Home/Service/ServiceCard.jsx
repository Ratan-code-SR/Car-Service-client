import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; // ES6

const ServiceCard = ({ service }) => {
    // console.log(service._id);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="w-full" src={service.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{service.title}</h2>
                
                <div className="card-actions justify-between items-center text-red-500 ">
                    <p className="font-bold">Price: ${service.price}</p>
                    <Link to={`/checkout/${service._id}`}  ><FaArrowRight/></Link>
                </div>
            </div>
        </div>
    );
};
ServiceCard.propTypes = {
    service: PropTypes.object, 
 };
export default ServiceCard;