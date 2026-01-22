import React, { useState } from 'react';
import type { StepProps } from '../../types';
import Button from '../../../../components/global/Button';

const AccountTypeStep: React.FC<StepProps> = ({ onNext, onBack, isFirstStep, userData }) => {
    const [accountType, setAccountType] = useState<'personal' | 'business'>(
        userData.accountType || 'personal'
    );

    const handleNext = () => {
        onNext({ accountType });
    };

    return (
        <div className="flex flex-col h-full">
            {/* Content */}
            <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    To join us tell us <span className="font-bold">what type of account</span> you are opening
                </h2>

                <div className="space-y-4 mt-8">
                    {/* Personal Account Option */}
                    <button
                        onClick={() => setAccountType('personal')}
                        className={`w-full p-5 rounded-xl border-2 transition-all duration-200 text-left ${accountType === 'personal'
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                            }`}
                    >
                        <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center w-6 h-6">
                                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-gray-900">Personal</h3>
                            </div>
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${accountType === 'personal'
                                ? 'border-blue-500'
                                : 'border-gray-300'
                                }`}>
                                {accountType === 'personal' && (
                                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                )}
                            </div>
                        </div>
                    </button>

                    {/* Business Account Option */}
                    <button
                        onClick={() => setAccountType('business')}
                        className={`w-full p-5 rounded-xl border-2 transition-all duration-200 text-left ${accountType === 'business'
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                            }`}
                    >
                        <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center w-6 h-6">
                                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-gray-900">Business</h3>
                            </div>
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${accountType === 'business'
                                ? 'border-blue-500'
                                : 'border-gray-300'
                                }`}>
                                {accountType === 'business' && (
                                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                )}
                            </div>
                        </div>
                    </button>
                </div>
            </div>

            {/* Buttons - Fixed at bottom */}
            <div className="mt-8 pt-6">
                <div className="flex gap-3">
                    {!isFirstStep && (
                        <Button onClick={onBack} variant="outline" className="flex-1">
                            Back
                        </Button>
                    )}
                    <Button onClick={handleNext} fullWidth={isFirstStep} className={!isFirstStep ? 'flex-1' : ''}>
                        Continue
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AccountTypeStep;
