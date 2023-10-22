import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
    Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ProductDetails = ({ product }) => {

    const { _id, brandName, image } = product;

    return (
        <Card className="max-w-[24rem] overflow-hidden">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
            >
                <img
                    src={image}
                    alt="ui/ux review check"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h4" color="blue-gray">
                    UI/UX Review Check
                </Typography>
                <Typography variant="lead" color="gray" className="mt-3 font-normal">
                    Because it&apos;s about motivating the doers. Because I&apos;m here to
                    follow my dreams and inspire others.
                </Typography>
            </CardBody>
            <CardFooter className="flex items-center justify-between">
                <Link to={`/products/${brandName}/${_id}`}>
                    <Button variant="gradient" className="rounded-full text-green-300">
                        Details
                    </Button>
                </Link>
                <Typography className="font-normal">January 10</Typography>
            </CardFooter>
        </Card>
    );
};

export default ProductDetails;