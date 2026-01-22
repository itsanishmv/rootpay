import React, { useState } from 'react';
import type { StepProps } from '../../types';
import InputField from '../../../../components/global/InputField';
import Button from '../../../../components/global/Button';

const EmailStep: React.FC<StepProps> = ({ onNext, userData }) => {
    const [email, setEmail] = useState(userData.email || '');
    const [error, setError] = useState('');

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleNext = () => {
        if (!email) {
            setError('Email is required');
            return;
        }
        if (!validateEmail(email)) {
            setError('Please enter a valid email address');
            return;
        }
        setError('');
        onNext({ email });
    };

    return (
        <div className="space-y-6 animate-fadeIn">
            <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-1">
                    What's your email?
                </h2>
                <p className="text-sm text-gray-500">
                    We'll use this to create your account
                </p>
            </div>

            <InputField
                label="Email address"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={setEmail}
                error={error}
                required
                autoFocus
            />

            <Button onClick={handleNext} fullWidth>
                Continue
            </Button>

            <p className="text-xs text-gray-500 text-center">
                Already have an account?{' '}
                <a href="#" className="text-blue-600 font-medium hover:underline">
                    Sign in
                </a>
            </p>
        </div>
    );
};

export default EmailStep;
