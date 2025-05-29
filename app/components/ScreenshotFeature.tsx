import React from 'react';
import ResponsiveImage from './ResponsiveImage'; // Assuming it's in the same components directory

interface ScreenshotFeatureProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  reverse?: boolean;
}

const ScreenshotFeature: React.FC<ScreenshotFeatureProps> = ({ imageSrc, imageAlt, title, description, icon, reverse = false }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center gap-8 lg:gap-16 py-10 md:py-12 ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-5/12 flex justify-center px-4 md:px-0">
        <ResponsiveImage
          src={imageSrc}
          alt={imageAlt}
          width={360}
          height={780}
          className="rounded-xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-xs lg:max-w-sm h-auto"
          objectFit="contain"
        />
      </div>
      <div className="w-full md:w-1/2 lg:w-7/12 text-center md:text-left px-4 md:px-0">
        <div className="flex items-center justify-center md:justify-start mb-3">
          <span className="text-purple-600 mr-3">{icon}</span>
          <h3 className="text-2xl lg:text-3xl font-bold text-purple-700">{title}</h3>
        </div>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ScreenshotFeature;