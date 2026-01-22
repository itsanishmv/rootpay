import React, { useState } from 'react';
import type { StepProps } from '../../types';
import InputField from '../../../../components/global/InputField';
import Button from '../../../../components/global/Button';

const PasswordStep: React.FC<StepProps> = ({ onNext, onBack, userData }) => {
    const [password, setPassword] = useState(userData.password || '');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const validatePassword = (password: string): string | null => {
        if (!password) return 'Password is required';
        if (password.length < 8) return 'Password must be at least 8 characters';
        if (!/[A-Z]/.test(password)) return 'Password must contain an uppercase letter';
        if (!/[a-z]/.test(password)) return 'Password must contain a lowercase letter';
        if (!/[0-9]/.test(password)) return 'Password must contain a number';
        return null;
    };

    const handleNext = () => {
        const validationError = validatePassword(password);
        if (validationError) {
            setError(validationError);
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        setError('');
        onNext({ password });
    };

    const getPasswordStrength = (password: string): { strength: string; color: string } => {
        if (password.length === 0) return { strength: '', color: '' };
        if (password.length < 8) return { strength: 'Weak', color: 'text-red-500' };
        if (validatePassword(password)) return { strength: 'Medium', color: 'text-yellow-600' };
        return { strength: 'Strong', color: 'text-green-600' };
    };

    const { strength, color } = getPasswordStrength(password);

    return (
        <div className="flex flex-col h-full">
            {/* Content */}
            <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                    Create Password for your account
                </h2>

                <div className="space-y-5">
                    <div className="relative">
                        <InputField
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter your password"
                            value={password}
                            onChange={setPassword}
                            required
                            autoFocus
                        />
                        {password && (
                            <p className={`mt-2 text-xs font-medium ${color}`}>
                                {strength}
                            </p>
                        )}
                    </div>

                    <InputField
                        label="Confirm password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Re-enter your password"
                        value={confirmPassword}
                        onChange={setConfirmPassword}
                        error={error}
                        required
                    />

                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={showPassword}
                            onChange={(e) => setShowPassword(e.target.checked)}
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-600">Show password</span>
                    </label>
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

export default PasswordStep;
