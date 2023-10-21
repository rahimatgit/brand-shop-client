import { useLoaderData } from "react-router-dom";
import ProductDetails from "../ProductsDetails/ProductDetails";


const Products = () => {

    const products = useLoaderData();
    console.log(products);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {
                products.map(product => <ProductDetails key={product._id} product={product}></ProductDetails>)
            }
        </div>
    );
};

export default Products;