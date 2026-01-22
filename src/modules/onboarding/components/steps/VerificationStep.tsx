import React, { useState, useRef, useEffect } from 'react';
import type { StepProps } from '../../types';
import Button from '../../../../components/global/Button';

const VerificationStep: React.FC<StepProps> = ({ onNext, onBack }) => {
    const [code, setCode] = useState(['', '', '', '']);
    const [error, setError] = useState('');
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        inputRefs.current[0]?.focus();
    }, []);

    const handleChange = (index: number, value: string) => {
        if (!/^\d*$/.test(value)) return;

        const newCode = [...code];
        newCode[index] = value.slice(-1);
        setCode(newCode);

        if (value && index < 3) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').replace(/\D/g, '');
        const newCode = [...code];

        for (let i = 0; i < Math.min(pastedData.length, 4); i++) {
            newCode[i] = pastedData[i];
        }

        setCode(newCode);
        const nextIndex = Math.min(pastedData.length, 3);
        inputRefs.current[nextIndex]?.focus();
    };

    const handleNext = () => {
        const verificationCode = code.join('');
        if (verificationCode.length !== 4) {
            setError('Please enter the complete 4-digit code');
            return;
        }
        setError('');
        onNext({});
    };

    const handleResend = () => {
        setCode(['', '', '', '']); // Changed from 6 to 4 digits to match input length
        setError('');
        inputRefs.current[0]?.focus();
    };

    return (
        <div className="flex flex-col h-full">
            {/* Content */}
            <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    OTP Verification
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                    An OTP has been sent to your mobile number
                </p>

                <div>
                    <div className="flex gap-4 justify-center" onPaste={handlePaste}>
                        {code.map((digit, index) => (
                            <input
                                key={index}
                                ref={(el) => { inputRefs.current[index] = el; }}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                className={`w-16 h-16 text-center text-2xl font-semibold rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 ${error
                                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                                    : 'border-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                    {error && (
                        <p className="mt-3 text-xs text-red-500 text-center flex items-center justify-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {error}
                        </p>
                    )}

                    <button
                        onClick={handleResend}
                        className="w-full mt-6 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                        Didn't receive the code? <span className="font-medium">Resend</span>
                    </button>
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

export default VerificationStep;
