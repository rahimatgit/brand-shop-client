

const SingleCart = ({cart, carts, setCarts}) => {

    const {name, image, _id} = cart;

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
            <div className="card card-side bg-base-100 shadow-xl flex justify-center items-center">
                <figure><img src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button onClick={ () => handleDelete(_id)} className="btn bg-red-600 text-white">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCart;