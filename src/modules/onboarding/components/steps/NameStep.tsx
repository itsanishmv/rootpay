import React, { useState } from 'react';
import type { StepProps } from '../../types';
import InputField from '../../../../components/global/InputField';
import Button from '../../../../components/global/Button';

const NameStep: React.FC<StepProps> = ({ onNext, onBack, userData }) => {
    const [firstName, setFirstName] = useState(userData.firstName || '');
    const [lastName, setLastName] = useState(userData.lastName || '');
    const [email, setEmail] = useState(userData.email || '');
    const [error, setError] = useState('');

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleNext = () => {
        if (!firstName.trim()) {
            setError('First name is required');
            return;
        }
        if (!lastName.trim()) {
            setError('Last name is required');
            return;
        }
        setError('');
        onNext({ firstName: firstName.trim(), lastName: lastName.trim(), email });
    };

    return (
        <div className="flex flex-col h-full">
            {/* Content */}
            <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                    What is your name?
                </h2>

                <div className="space-y-5">
                    <InputField
                        label="First name"
                        placeholder="John"
                        value={firstName}
                        onChange={setFirstName}
                        required
                        autoFocus
                    />

                    <InputField
                        label="Last name"
                        placeholder="Doe"
                        value={lastName}
                        onChange={setLastName}
                        required
                    />

                    {/* <InputField
                        label="Email address"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={setEmail}
                        error={error}
                        required
                    /> */}
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

export default NameStep;
