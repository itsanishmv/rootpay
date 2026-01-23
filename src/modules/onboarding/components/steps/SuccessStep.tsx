import React from 'react';
import type { StepProps } from '../../types';
import Button from '../../../../components/global/Button';

const SuccessStep: React.FC<StepProps> = ({ userData }) => {
    const handleGetStarted = () => {
        console.log('User registered:', userData);
    };

    return (
        <div className="space-y-8 animate-fadeIn text-center">
            <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center animate-scaleIn">
                    <svg
                        className="w-10 h-10 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>
            </div>

            <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    You're all set!
                </h2>
                <p className="text-sm text-gray-500">
                    Here's a quick summary of your account details
                </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 space-y-4 text-left">
                <div>
                    <p className="text-xs text-gray-500 mb-1.5">Account Type</p>
                    <p className="text-sm font-medium text-gray-900 capitalize">
                        {userData.accountType || 'Personal'}
                    </p>
                </div>
                {/* <div>
                    <p className="text-xs text-gray-500 mb-1.5">Email</p>
                    <p className="text-sm font-medium text-gray-900">{userData.email}</p>
                </div> */}
                <div>
                    <p className="text-xs text-gray-500 mb-1.5">Name</p>
                    <p className="text-sm font-medium text-gray-900">
                        {userData.firstName} {userData.lastName}
                    </p>
                </div>
                <div>
                    <p className="text-xs text-gray-500 mb-1.5">Mobile Number</p>
                    <p className="text-sm font-medium text-gray-900">{userData.phoneNumber}</p>
                </div>
            </div>

            <div className="pt-4">
                <Button onClick={handleGetStarted} fullWidth>
                    Go to Dashboard
                </Button>
            </div>
        </div>
    );
};

export default SuccessStep;
