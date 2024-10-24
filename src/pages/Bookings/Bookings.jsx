import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/provider/ContextProvider";
import cartImg from "../../assets/images/checkout/checkout.png"
// import { update } from "firebase/database";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Bookings = () => {
    const [usersBookingsData, setUserBookingsData] = useState([])
    const axiosSecure = useAxiosSecure()
    const { user, loading } = useContext(AuthContext)


    const url = `/bookings?email=${user?.email}`

    useEffect(() => {

        axiosSecure.get(url)
            .then(res => {
                setUserBookingsData(res.data)
            })
    }, [url, axiosSecure])

    const handleDelete = (id) => {
        const proceed = confirm("Are you sure?")
        if (proceed) {
            fetch(`https://car-service-server-ochre.vercel.app/bookings/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert("data delete successful!")
                        const remaining = usersBookingsData.filter(booking => booking._id !== id)
                        setUserBookingsData(remaining)
                    }
                })
        }

    }

    const handleConfirm = (id) => {
        fetch(`https://car-service-server-ochre.vercel.app/bookings/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status: "confirm" })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const remaining = usersBookingsData.filter(booking => booking._id !== id)
                    const updated = usersBookingsData.find(booking => booking._id === id);
                    updated.status = "confirm"
                    const newBookings = [updated, ...remaining]
                    setUserBookingsData(newBookings)
                }
            })
    }

    console.log(usersBookingsData);
    if (loading) {
        return <div className="text-center my-40">
            <span className="loading loading-spinner text-primary"></span>
            <span className="loading loading-spinner text-secondary"></span>
            <span className="loading loading-spinner text-accent"></span>
            <span className="loading loading-spinner text-neutral"></span>
            <span className="loading loading-spinner text-info"></span>
            <span className="loading loading-spinner text-success"></span>
            <span className="loading loading-spinner text-warning"></span>
            <span className="loading loading-spinner text-error"></span>
        </div>
    }
    return (
        <div>
            <div className="hero relative h-[300px] place-items-start items-center my-10 " style={{ backgroundImage: `url(${cartImg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-white ">
                    <h1 className="text-5xl 
                         font-bold ml-10">Cart Details</h1>

                </div>

            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {
                        usersBookingsData.map(data =>
                            <tbody key={data._id}>
                                {/* row 1 */}
                                <tr>
                                    <td>
                                        <button onClick={() => handleDelete(data._id)} className="bg-black text-white flex justify-center rounded-full p-3 w-8 h-8 items-center">X</button>
                                    </td>
                                    <td><img className="w-20 h-20" src={data.img} alt="" /></td>
                                    <td>
                                        <p>{data.service}</p>
                                    </td>
                                    <td>
                                        <p>${data.price}</p>
                                    </td>
                                    <td>
                                        {data.date}
                                    </td>
                                    <td>
                                        {
                                            data.status === "confirm" ? <span className="text-blue-600 font-bold">confirm</span> : <button onClick={() => handleConfirm(data._id)} className="p-2 rounded-md text-white bg-[#FF3811]">Please confirm</button>
                                        }
                                    </td>

                                </tr>

                            </tbody>
                        )
                    }

                </table>
            </div>
        </div>
    );
};

export default Bookings;