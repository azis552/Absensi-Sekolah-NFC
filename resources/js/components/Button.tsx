import React from "react";

interface ButtonProps {
    label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
    return <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">{label}</button>;
};

export default Button;