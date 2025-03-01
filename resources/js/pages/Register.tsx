import React from "react";

import FormInput from "../components/FormInput";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full max-w-4xl flex bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="w-full md:w-1/2 p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Register</h2>
                    <form action="#" method="POST">
                        <FormInput label="Name" type="text" name="name" />
                        <FormInput label="Email" type="email" name="email" />
                        <FormInput label="Password" type="password" name="password" />
                        <Button label="Register" />
                    </form>
                    <p className="mt-4 text-sm text-gray-600">
                        Sudah punya akun?{" "}
                        <Link to="/login" className="text-blue-500 hover:underline">
                            Login
                        </Link>
                    </p>
                </div>
                <div className="hidden md:block md:w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fimage-preview-icon-picture-placeholder-vector-31284806&psig=AOvVaw3_8htaP7xvxhLSvKM4T0HV&ust=1740893573381000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKCelI2U6IsDFQAAAAAdAAAAABAE')" }}></div>
            </div>
        </div>
    );
};

export default Register;