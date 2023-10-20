

const Banner = () => {
    return (
        // <div className="w-[80%] mx-auto card lg:card-side bg-base-100 shadow-xl">
        //     <figure><img className="relative" src="https://img.freepik.com/free-photo/image-tourist-checking-out-something-cool-takeoff-sunglasses-say-wow-looking-aside-impressed_1258-159739.jpg?w=1380&t=st=1697713077~exp=1697713677~hmac=383d8d78874da65ea39ef43ad7eb6ce56b85fbb4f675abea7acdf24f918bdefb" alt="Album" /></figure>
        //     <div className="card-body absolute right-32 top-20">
        //         <h2 className="card-title text-4xl">Welcome to <span className="text-6xl  text-white">Elite Fashion!</span> </h2>
        //         <p className="text-center text-white">Discover Elegance, Shop Elite Fashion!</p>

        //     </div>
        // </div>
        <div className="">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/image-tourist-checking-out-something-cool-takeoff-sunglasses-say-wow-looking-aside-impressed_1258-159739.jpg?w=1380&t=st=1697713077~exp=1697713677~hmac=383d8d78874da65ea39ef43ad7eb6ce56b85fbb4f675abea7acdf24f918bdefb)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className=" text-center text-neutral-content">
                    <div className=" flex flex-col items-center justify-end">
                        <h1 className="mb-5 text-5xl font-bold">Elite Fashion</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;