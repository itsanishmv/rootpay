import React, { useState } from 'react';
import AuthLayout from './components/AuthLayout';
import ProgressIndicator from '../../components/global/ProgressIndicator';
import AccountTypeStep from './components/steps/AccountTypeStep';
import PhoneStep from './components/steps/PhoneStep';
import VerificationStep from './components/steps/VerificationStep';
import NameStep from './components/steps/NameStep';
import PasswordStep from './components/steps/PasswordStep';
import SuccessStep from './components/steps/SuccessStep';
import type { User } from './types';

const Onboarding: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState<Partial<User>>({});

    const totalSteps = 5;

    const handleNext = (data: Partial<User>) => {
        setUserData((prev) => ({ ...prev, ...data }));
        setCurrentStep((prev) => Math.min(prev + 1, totalSteps + 1));
    };

    const handleBack = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };

    const renderStep = () => {
        const stepProps = {
            onNext: handleNext,
            onBack: handleBack,
            userData,
            isFirstStep: currentStep === 1,
            isLastStep: currentStep === totalSteps + 1,
        };

        switch (currentStep) {
            case 1:
                return <AccountTypeStep {...stepProps} />;
            case 2:
                return <PhoneStep {...stepProps} />;
            case 3:
                return <VerificationStep {...stepProps} />;
            case 4:
                return <NameStep {...stepProps} />;
            case 5:
                return <PasswordStep {...stepProps} />;
            case 6:
                return <SuccessStep {...stepProps} />;
            default:
                return <AccountTypeStep {...stepProps} />;
        }
    };

    return (
        <AuthLayout>
            {/* Progress Indicator at top */}
            {currentStep <= totalSteps && <ProgressIndicator currentStep={currentStep} totalSteps={totalSteps} />}

            {/* Step Content */}
            <div className="flex flex-col h-full">
                {renderStep()}
            </div>
        </AuthLayout>
    );
};

export default Onboarding;
