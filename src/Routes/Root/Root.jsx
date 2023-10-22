import { Outlet } from "react-router-dom";
import NavBar from "../../Pages/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";


const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;