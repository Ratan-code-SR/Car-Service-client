import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 relative">
                    <img src={person} className="w-2/3 rounded-lg shadow-2xl" />
                    <img src={parts} className="absolute w-1/2 right-10 top-1/2 rounded-lg shadow-2xl border-4 border-white" />
                </div>
                <div className="w-1/2">
                    <h3 className="text-[#ff3811] text-2xl">About us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-3">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="text-white bg-[#ff3811] py-2 rounded-md px-3">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;