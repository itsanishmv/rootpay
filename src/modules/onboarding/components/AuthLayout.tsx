import React from 'react';
import Artboard11 from '../../../assets/Artboard11.svg';

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex bg-gray-50 ">
            {/* Left side - Light background with header and illustration */}
            <div className="hidden lg:flex lg:w-1/2 p-16 flex-col justify-start relative px-[80px]">
                {/* Header at top */}
                <div className="mb-auto">
                    <p className="text-base text-gray-600 mb-3">Let's get started</p>
                    <h1 className="text-5xl font-bold text-gray-900 mb-3 leading-tight">
                        Create your account
                    </h1>
                    <p className="text-base text-gray-600">
                        Follow the steps to create your account
                    </p>
                </div>

                {/* Illustration positioned at bottom right */}
                <div className="absolute bottom-30 w-[660px]">
                    <img src={Artboard11} alt="Onboarding illustration" className="w-full h-auto" />
                </div>
            </div>

            {/* Right side - Large white card with precise shadow */}
            <div className="flex-1 lg:w-1/2 flex items-center justify-center p-8 lg:p-12">
                <div
                    className="w-full max-w-[708px] h-[85vh] bg-white rounded-3xl p-10 lg:p-12 flex flex-col"
                    style={{
                        boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.08), 0px 20px 25px -5px rgba(0, 0, 0, 0.06)'
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
