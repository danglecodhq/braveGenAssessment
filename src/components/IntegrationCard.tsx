import React from 'react';

interface IntegrationCardProps {
  image: string;
  title: string;
  description: string;
}

const IntegrationCard: React.FC<IntegrationCardProps> = ({ image, title, description }) => {
  return (
    <div className="flex flex-col gap-3 rounded-lg border bg-gray-50 p-4 shadow-sm transition hover:shadow-md">
      <div className="flex items-center gap-3">
        <img src={image} alt={title} className="h-10 w-10 shrink-0" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
      <button className="w-fit rounded bg-gray-800 px-3 py-2 text-sm text-white hover:bg-gray-700">
        Add Connection
      </button>
    </div>
  );
};

export default IntegrationCard;
