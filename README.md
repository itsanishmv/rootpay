# RootPay

A modern, user-friendly authentication and onboarding application built with React, TypeScript, and Tailwind CSS.

## Features

- **Multi-step Onboarding Flow**: Guided user registration process with progress tracking
- **Account Type Selection**: Choose between Personal and Business accounts
- **Phone Verification**: OTP-based phone number verification
- **Responsive Design**: Beautiful UI that works seamlessly across all devices
- **Type-Safe**: Built with TypeScript for enhanced code quality and developer experience
- **Modern UI Components**: Reusable components with smooth animations and transitions

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety and better DX
- **Vite** - Fast build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **ESLint** - Code linting and quality

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/itsanishmv/rootpay.git
cd rootpay
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
rootpay/
├── src/
│   ├── components/
│   │   └── global/          # Reusable UI components
│   ├── modules/
│   │   └── onboarding/      # Onboarding flow components
│   ├── assets/              # Static assets (images, SVGs)
│   ├── App.tsx              # Main application component
│   └── main.tsx             # Application entry point
├── public/                  # Public static files
└── package.json
```

## Onboarding Steps

1. **Account Type** - Select Personal or Business account
2. **Phone Number** - Enter phone number with country code
3. **OTP Verification** - Verify with 4-digit OTP
4. **Name & Email** - Provide personal information
5. **Password** - Set account password
6. **Success** - Account creation confirmation

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private and proprietary.

## Author

**Anish MV** - [itsanishmv](https://github.com/itsanishmv)
