import React from 'react';

interface ActionModalProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonColor: string; // Tailwind class for background
  secondaryButtonText: string;
  secondaryButtonColor: string; // Tailwind class for border/bg
  onPrimaryAction: () => void;
  onSecondaryAction: () => void;
  onClose: () => void;
}

const ActionModal: React.FC<ActionModalProps> = ({
  icon,
  title,
  description,
  primaryButtonText,
  primaryButtonColor,
  secondaryButtonText,
  secondaryButtonColor,
  onPrimaryAction,
  onSecondaryAction,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[450px] relative">
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        {/* Icon Above Text */}
        <div className="mb-4">{icon}</div>

        {/* Title */}
        <h2 className="text-lg font-semibold mb-2">{title}</h2>

        {/* Description */}
        <p className="text-gray-600 mb-6">{description}</p>

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={onSecondaryAction}
            className={`px-6 py-2 rounded border ${secondaryButtonColor}`}
          >
            {secondaryButtonText}
          </button>
          <button
            onClick={onPrimaryAction}
            className={`px-6 py-2 rounded text-white ${primaryButtonColor}`}
          >
            {primaryButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionModal;
