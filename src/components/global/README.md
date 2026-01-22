# Global Components

This directory contains reusable components that are shared across multiple modules, along with their TypeScript type definitions.

## Files

**types.ts** - TypeScript interfaces for all global components (ButtonProps, InputFieldProps, ProgressIndicatorProps)

## Components

### Button
A customizable button component with support for:
- Primary and secondary variants
- Full width option
- Disabled state
- Loading state

### InputField
A form input component with:
- Label support
- Error message display
- Required field indicator
- Various input types (text, email, password, etc.)

### ProgressIndicator
A visual progress indicator for multi-step flows:
- Shows current step
- Displays total steps
- Visual progress bar

## Usage

```tsx
import Button from '@/components/global/Button';
import InputField from '@/components/global/InputField';
import ProgressIndicator from '@/components/global/ProgressIndicator';
```

## Guidelines

- Keep components generic and reusable
- Avoid module-specific logic
- Document props and usage examples
- Maintain consistent styling patterns
- All component types are defined in `types.ts`
