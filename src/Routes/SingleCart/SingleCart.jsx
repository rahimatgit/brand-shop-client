

const SingleCart = ({cart, carts, setCarts}) => {

    const {productName, image, _id, price, description} = cart;

    const handleDelete = _id => {
        
        fetch(`https://assignment-10-brand-shop-server.vercel.app/carts/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const remaining = carts.filter(cartProduct => cartProduct._id !== _id);
            setCarts(remaining);
        })
    }

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl flex flex-col md:flex-row justify-center items-center">
                <figure><img className="h-[300px] w-full" src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{productName}</h2>
                    <p>{price} $</p>
                    <div className="card-actions justify-end">
                        <button onClick={ () => handleDelete(_id)} className="btn bg-red-600 text-white">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCart;