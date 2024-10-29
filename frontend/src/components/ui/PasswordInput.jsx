import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const PasswordInput = ({ value, onChange, placeholder }) => {
    const [isShowPassword, setIsShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    };

    return (
        <div className='flex items-center bg-cyan-100 px-4 py-2 rounded-md focus-within:ring-2 ring-cyan-400 transition duration-300'>

            <input
                value={value}
                onChange={onChange}
                placeholder={placeholder || "Password"}
                type={isShowPassword ? "text" : "password"}
                className='w-full text-gray-800 text-sm bg-transparent py-2 mr-3 rounded focus:outline-none'
            />

            {isShowPassword ? (
                <FaRegEye
                    size={22}
                    className='text-primary cursor-pointer text-teal-400'
                    onClick={() => toggleShowPassword()}
                />
            ) : (
                <FaRegEyeSlash
                    size={22}
                    className='text-blue-500 cursor-pointer'
                    onClick={() => toggleShowPassword()}
                />
            )}

        </div>
    );
};

export default PasswordInput


