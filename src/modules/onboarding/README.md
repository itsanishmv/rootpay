# Onboarding Module

This module contains all the components, logic, and utilities related to the user onboarding flow.

## Structure

```
onboarding/
├── components/
│   ├── steps/           # Individual step components
│   │   ├── AccountTypeStep.tsx
│   │   ├── PhoneStep.tsx
│   │   ├── VerificationStep.tsx
│   │   ├── NameStep.tsx
│   │   ├── PasswordStep.tsx
│   │   └── SuccessStep.tsx
│   └── AuthLayout.tsx   # Layout component for auth pages
├── hooks/               # Module-specific hooks (if needed)
├── utils/               # Module-specific utilities (if needed)
├── types/               # Module-specific TypeScript types
│   └── index.ts         # User, StepProps, FormStep types
├── Onboarding.tsx       # Main module component
└── index.ts             # Module exports
```

## Usage

```tsx
import Onboarding from './modules/onboarding';

function App() {
  return <Onboarding />;
}
```

## Features

- Multi-step registration flow
- Account type selection (Personal/Business)
- Phone verification with OTP
- Email and name collection
- Password creation with validation
- Success confirmation with account summary
