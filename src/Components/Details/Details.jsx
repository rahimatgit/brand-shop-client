import { useLoaderData } from "react-router-dom";
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
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";

const Details = () => {

    const {user} = useContext(AuthContext);
    const email = user.email;
    const data = useLoaderData();
    const { image, name, price, description } = data;
    console.log(data);

    const handleCart = () => {
       const data = {image, price, name, email};
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
        <div>
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
                    <Button onClick={handleCart} variant="gradient" className="rounded-full text-green-300">
                        Add to Cart
                    </Button>
                    <Typography className="font-normal">January 10</Typography>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Details;