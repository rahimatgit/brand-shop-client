import { useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,

    Typography

} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Brands = () => {

    const [brands, setBrands] = useState([]);

    fetch('brands.json')
        .then(res => res.json())
        .then(data => setBrands(data))

    return (
        <div className="w-[80%] mx-auto">
            <h2 className="text-3xl md:text-6xl font-extrabold my-12 text-center">Our <span className="text-green-400">Featured Brands</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                brands.map(brand => <Link  key={brand.id}>
                <Card  className="w-96">
                <CardHeader floated={false} className="h-80">
                    <img src={brand.image} alt="profile-picture" />
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        {brand.name}
                    </Typography>
                </CardBody>
            </Card></Link>)
            }
            </div>
        </div>
    );
};

export default Brands;