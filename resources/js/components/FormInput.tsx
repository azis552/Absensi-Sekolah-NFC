import React from "react";

interface FormInputProps {
    label: string;
    type: string;
    name: string;
    placeholder?: string;
}

const FormInput: React.FC<FormInputProps> = ({ label, type, name, placeholder }) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">{label}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
        </div>
    );
};

export default FormInput;