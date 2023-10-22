import { useLoaderData } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    CardFooter,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";

const Details = () => {

    const { user } = useContext(AuthContext);
    const email = user.email;
    const data = useLoaderData();
    const { image, productName, price, description, type } = data;
    console.log(data);


    const handleCart = () => {
        const data = { image, price, name, email };
        fetch('https://assignment-10-brand-shop-server.vercel.app/carts', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
                ,
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }

    return (
        <div className="w-[80%] mx-auto flex justify-center mt-20">
            <Card className="w-full max-w-[48rem] flex-row">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="m-0 w-2/5 shrink-0 rounded-r-none"
                >
                    <img
                        src={image}
                        alt="card-image"
                        className="h-full w-full object-cover"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h6" color="gray" className="mb-4 uppercase">
                        {type}
                    </Typography>
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        {productName}
                    </Typography>
                    <Typography color="gray" className="mb-8 font-normal">
                        {description}
                    </Typography>
                    <Typography color="gray" className="mb-8 font-normal">
                        {price} $
                    </Typography>
                    <a href="#" className="inline-block">
                        <Button onClick={handleCart} variant="gradient" className="rounded-full text-green-300">
                            Add to Cart
                        </Button>
                    </a>
                </CardBody>
            </Card>
        </div>
    );
};

export default Details;