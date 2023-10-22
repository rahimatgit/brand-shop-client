import { useLoaderData } from "react-router-dom";
import ProductDetails from "../ProductsDetails/ProductDetails";
import { Carousel} from "@material-tailwind/react";
import EmptyProduct from "../EmptyProduct/EmptyProduct";

const Products = () => {

    const products = useLoaderData();

    console.log(products);
    return (
        <div>
            <Carousel className="rounded-xl w-full">
                <img
                    src="https://publish.purewow.net/wp-content/uploads/sites/2/2023/04/summer-fashion-trends-2023-UNI.jpg?fit=1025%2C550"
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1708732054.jpg?c=16x9&q=h_720,w_1280,c_fill"
                    alt="image 2"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://stylecaster.com/wp-content/uploads/2023/08/mensfashiontrends.jpg"
                    alt="image 3"
                    className="h-full w-full object-cover"
                />
            </Carousel>
            <h1 className="text-6xl font-extrabold text-center ">Our <span className="text-green-400">Products</span></h1>
            <div className="w-[70%] mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {
                products.map(product => <ProductDetails key={product._id} product={product}></ProductDetails>)
            }
        </div>

        </div>
       
    );
};

export default Products;