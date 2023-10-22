import {
    Card,
    Input,

    Button,
    Typography,
} from "@material-tailwind/react";
import toast, { Toaster } from 'react-hot-toast';
const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const brandName = form.get('brand-name');
        const productName = form.get('product-name');
        const image = form.get('image');
        const type = form.get('type');
        const price = form.get('price');
        const description = form.get('description');
        const newProduct = { brandName, productName, image, type, price, description };

        fetch('https://assignment-10-brand-shop-server-mdxyli8dc-rahims-projects.vercel.app/products', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
                ,
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Your product is added successfully.')
                console.log(data)})
    }




    return (
        <div className="w-full md:w-[40%] mt-12 mx-auto rounded-2xl flex justify-center bg-green-100 px-6 py-12">
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Add Your Product
                </Typography>

                <form onSubmit={handleAddProduct} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Brand Name
                        </Typography>
                        <Input
                            name="brand-name"
                            size="lg"
                            placeholder="brand name"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Product Name
                        </Typography>
                        <Input
                            name="product-name"
                            size="lg"
                            placeholder="product name"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Type
                        </Typography>
                        <Input
                            name="type"
                            size="lg"
                            placeholder="type"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Image
                        </Typography>
                        <Input
                            name="image"
                            size="lg"
                            placeholder="image"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Price
                        </Typography>
                        <Input
                            name="price"
                            size="lg"
                            placeholder="price"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Short Description
                        </Typography>
                        <Input
                            name="description"
                            size="lg"
                            placeholder="short description"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />


                    </div>

                    <Button className="mt-6" fullWidth>
                        <input type="submit" value="Add Product" />
                    </Button>

                </form>
            </Card>
            <Toaster></Toaster>
        </div>
    );
};

export default AddProduct;