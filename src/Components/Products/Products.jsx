import { useLoaderData } from "react-router-dom";
import ProductDetails from "../ProductsDetails/ProductDetails";


const Products = () => {

    const products = useLoaderData();
    console.log(typeof products);
    console.log(products);
    return (
        <div className="w-[70%] mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {
                products.map(product => <ProductDetails key={product._id} product={product}></ProductDetails>)
            }
        </div>
    );
};

export default Products;