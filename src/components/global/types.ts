// Type definitions for global components
import React from 'react';

export interface InputFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  autoFocus?: boolean;
  maxLength?: number;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
  type?: 'button' | 'submit';
  fullWidth?: boolean;
  className?: string;
}

export interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}
