import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";

const Login = () => {

    const { signIn, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignIn = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        signIn(email, password)
            .then(userCredential => {
                const currentUser = userCredential.user;
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                const errorMessage = error.message;
                toast.error("Failed to login! Invalid email or password.");
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                const errorMessage = error.message;
                toast.error("Failed to login! Invalid email or password.");
            })
    }

    return (
        <div className="flex justify-center mt-12">
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray" className="text-5xl">
                    Please Login
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Nice to meet you! Enter your details to login.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Name
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Email
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Password
                        </Typography>
                        <Input
                            type="password"
                            size="lg"
                            placeholder="********"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                    </div>
                    <Checkbox
                        label={
                            <Typography
                                variant="small"
                                color="gray"
                                className="flex items-center font-normal"
                            >
                                I agree the
                                <a
                                    href="#"
                                    className="font-medium transition-colors hover:text-gray-900"
                                >
                                    &nbsp;Terms and Conditions
                                </a>
                            </Typography>
                        }
                        containerProps={{ className: "-ml-2.5" }}
                    />
                    <Button className="mt-6" fullWidth>
                        Login
                    </Button>
                    
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Don not have an account?{" "}

                        <Link to="/register">
                            <a href="#" className="font-medium text-gray-900">
                                Register
                            </a>
                        </Link>
                        <p>Sign in with <Link onClick={handleGoogleSignIn} className="text-blue-600 font-semibold mt-6">Google</Link></p>
                    </Typography>
                </form>
            </Card>
        </div>
    );
};

export default Login;