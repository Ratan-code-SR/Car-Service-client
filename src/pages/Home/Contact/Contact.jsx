import { FiPhone } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
    return (
        <div>
            <div className="flex items-center justify-center gap-5 bg-black text-white p-10">
                <div className="flex justify-center items-center gap-2">
                    <div className="text-5xl">
                        <span className="text-red-600 text-3xl"><SlCalender /></span>
                    </div>
                    <div>
                        <p>We are open monday-friday</p>
                        <h1 className="text-3xl font-bold">7:00 am - 9:00 pm</h1>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <div className="text-5xl">
                        <span className="text-red-600 text-3xl"><FiPhone /></span>
                    </div>
                    <div>
                        <p>Have a question?</p>
                        <h1 className="text-3xl font-bold">+2546 251 2658</h1>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <div className="text-3xl">
                        <span className="text-red-600 text-3xl"><FaLocationDot /></span>
                    </div>
                    <div>
                        <p>Need a repair? our address</p>
                        <h1 className="text-3xl font-bold">Liza Street, New York</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;