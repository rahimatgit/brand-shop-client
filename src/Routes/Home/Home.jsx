import About from "../../Components/About/About";
import Banner from "../../Pages/Banner/Banner";
import Brands from "../../Pages/Brands/Brands";
import Reviews from "../../Pages/Reviews/Reviews";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <Reviews></Reviews>
            <About></About>
        </div>
    );
};

export default Home;