import { useEffect } from "react";
import ServiceCard from "./ServiceCard";
import { useState } from "react";


const Service = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch(`https://car-service-server-ochre.vercel.app/services`)
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])
    // console.log(services);
    return (
        <div className="my-5">
            <div className="w-2/5 mx-auto text-center">
                <h1 className="text-xl text-orange-600">Service </h1>
                <h1 className="text-3xl font-bold">Our Service Area</h1>
                <p className="text-sm text-gray-400">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>

            <div className="my-5 grid grid-cols-3 justify-center items-center gap-3">

                {
                    services.map((service) =>
                        <ServiceCard key={service._id} service={service} />
                    )
                }

            </div>
            <button className="flex justify-center mx-auto border border-[#ff3811] py-2 px-3 rounded-md font-bold text-[#ff3811]">More Service</button>
        </div>
    );
};

export default Service;