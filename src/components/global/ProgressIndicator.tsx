import React from 'react';
import type { ProgressIndicatorProps } from './types';

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ currentStep, totalSteps }) => {
    const progress = (currentStep / totalSteps) * 100;

    return (
        <div className="w-full mb-10">
            {/* Single continuous progress bar */}
            <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                    className="h-full bg-blue-600 rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
};

export default ProgressIndicator;
