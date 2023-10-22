import { useLoaderData } from "react-router-dom";
import SingleCart from "../SingleCart/SingleCart";


const MyCart = () => {

    const carts = useLoaderData();

    return (
        <div className="w-[80%] mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {
                carts.map(cart => <SingleCart key={cart._id} cart={cart}></SingleCart>)
            }
        </div>
    );
};

export default MyCart;