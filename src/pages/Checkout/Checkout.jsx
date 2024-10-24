import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../components/provider/ContextProvider";

const Checkout = () => {
    const loadData = useLoaderData()
    const { price, img, title, _id } = loadData;
    const { user } = useContext(AuthContext)


    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = user?.email;
        const date = form.date.value;

        const order = {
            customerName: name,
            email,
            date,
            img,
            service: title,
            service_id: _id,
            price: price
        }
        console.log(order);
        fetch(`https://car-service-server-ochre.vercel.app/bookings`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert("post successful")
                }
            })
    }

    return (

        <div>
            <div className="hero relative h-[300px] place-items-start items-center my-10 " style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-white ">
                    <h1 className="text-5xl 
                         font-bold ml-10">Check Out</h1>

                </div>
                <div className="">
                    <p className="text-white bg-[#FF3811] rounded-t-full p-4 px-6  absolute bottom-0 right-1/2">Home/Checkout</p>
                </div>
            </div>
            <>
                <div className="bg-[#f3f3f3] p-5">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" defaultValue={user?.displayName} name="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" name="date" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Due amount</span>
                                </label>
                                <input type="text" defaultValue={'$' + price} className="input input-bordered" />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input className="p-3 text-white font-bold bg-[#FF3811] btn-block" type="submit" value="Order Confirm" />
                        </div>
                    </form>
                    <div className="card-body">

                    </div>
                </div>
            </>
        </div>

    );
};

export default Checkout;