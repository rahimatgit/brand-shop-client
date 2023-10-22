

const SingleCart = ({cart}) => {

    const {name, image} = cart;

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl flex justify-center items-center">
                <figure><img src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCart;