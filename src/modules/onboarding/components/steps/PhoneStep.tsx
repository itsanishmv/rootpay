import React, { useState } from 'react';
import type { StepProps } from '../../types';
import Button from '../../../../components/global/Button';

const PhoneStep: React.FC<StepProps> = ({ onNext, onBack, userData }) => {
    const [phoneNumber, setPhoneNumber] = useState(userData.phoneNumber || '');
    const [countryCode, setCountryCode] = useState('+1');
    const [error, setError] = useState('');

    const handlePhoneChange = (value: string) => {
        // Only allow digits
        const digits = value.replace(/\D/g, '');
        setPhoneNumber(digits);
    };

    const validatePhone = (phone: string): boolean => {
        return phone.length === 10;
    };

    const handleNext = () => {
        if (!phoneNumber) {
            setError('Mobile number is required');
            return;
        }
        if (!validatePhone(phoneNumber)) {
            setError('Please enter a valid 10-digit mobile number');
            return;
        }
        setError('');
        onNext({ phoneNumber: `${countryCode} ${phoneNumber}` });
    };

    return (
        <div className="flex flex-col h-full">
            {/* Content */}
            <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                    OTP Verification
                </h2>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mobile Number*
                    </label>
                    <div className="flex gap-3">
                        {/* Country Code Selector */}
                        <div className="relative">
                            <select
                                value={countryCode}
                                onChange={(e) => setCountryCode(e.target.value)}
                                className="h-[54px] pl-3 pr-8 text-sm border border-gray-300 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                            >
                                <option value="+1">🇺🇸 +1</option>
                                <option value="+44">🇬🇧 +44</option>
                                <option value="+91">🇮🇳 +91</option>
                            </select>
                            <svg
                                className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>

                        {/* Phone Number Input */}
                        <input
                            type="tel"
                            value={phoneNumber}
                            onChange={(e) => handlePhoneChange(e.target.value)}
                            placeholder="Enter mobile number"
                            maxLength={10}
                            autoFocus
                            className={`flex-1 h-[54px] px-4 text-sm border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 ${error
                                ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                                : 'border-gray-300'
                                } placeholder:text-gray-400`}
                        />
                    </div>
                    {error && (
                        <p className="mt-2 text-xs text-red-500 flex items-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {error}
                        </p>
                    )}
                </div>
            </div>

            {/* Buttons - Fixed at bottom */}
            <div className="mt-8 pt-6">
                <div className="flex gap-3">
                    <Button onClick={onBack} variant="outline" className="flex-1">
                        Back
                    </Button>
                    <Button onClick={handleNext} className="flex-1">
                        Continue
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default PhoneStep;
