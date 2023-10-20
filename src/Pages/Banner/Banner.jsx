

const Banner = () => {
    return (

        <div className="">

            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/image-tourist-checking-out-something-cool-takeoff-sunglasses-say-wow-looking-aside-impressed_1258-159739.jpg?w=1380&t=st=1697713077~exp=1697713677~hmac=383d8d78874da65ea39ef43ad7eb6ce56b85fbb4f675abea7acdf24f918bdefb)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">Welcome to</h1>
                        <h1 className="mb-5 text-6xl font-extrabold text-white">Elite <span className="text-green-300">Fashion!</span></h1>
                        <p className="mb-5 text-center text-lg text-white font-bold">Explore our selection today and let your accessories reflect your elite style. Discover the perfect finishing touches for every occasion and make your mark in the world of fashion. 
                        <span className="text-green-300"> Welcome to Elite Fashion – Where Luxury Meets Lifestyle.</span></p>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Banner;