import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Rating,
    Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ProductDetails = ({ product }) => {

    const { _id, brandName, image, productName, price, type } = product;

    return (
        <div>
            
            <Card className="max-w-[24rem]  overflow-hidden">
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none"
                >
                    <img
                        className="w-full h-[250px]"
                        src={image}
                        alt="ui/ux review check"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h4" color="blue-gray">
                        {productName}
                    </Typography>
                    <Typography variant="lead" color="gray" className="mt-3 font-normal">
                        {brandName}
                    </Typography>
                    <Typography variant="lead" color="gray" className="mt-3 text-sm">
                        {type}
                    </Typography>
                    <div className="flex justify-between items-center">
                    <Typography variant="lead" color="gray" className="mt-3 font-normal">
                        {price} $
                    </Typography>
                    <Typography variant="lead" color="gray" className="mt-3 font-normal flex items-center gap-4">
                    Rating <Rating value={4} />
                    </Typography>
                    </div>
                    
                </CardBody>
                <CardFooter className="flex items-center justify-between">
                    <Link to={`/products/${brandName}/${_id}`}>
                        <Button variant="gradient" className="rounded-full text-green-300">
                            Details
                        </Button>
                    </Link>
                    <Link to={`/update/${brandName}/${_id}`}>
                        <Button variant="gradient" className="rounded-full text-green-300">
                            Update
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>

    );
};

export default ProductDetails;