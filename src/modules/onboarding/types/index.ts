// Type definitions for the onboarding flow
import React from 'react';

export interface User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  accountType?: 'personal' | 'business';
}

export interface FormStep {
  id: number;
  title: string;
  description: string;
  component: React.ComponentType<StepProps>;
}

export interface StepProps {
  onNext: (data: Partial<User>) => void;
  onBack: () => void;
  userData: Partial<User>;
  isFirstStep?: boolean;
  isLastStep?: boolean;
}
