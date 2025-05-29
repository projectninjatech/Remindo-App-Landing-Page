import React from 'react';
import ScreenshotFeature from './ScreenshotFeature'; // Assuming it's in the same components directory

interface ScreenshotFeatureData {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  reverse?: boolean;
}

interface AppShowcaseSectionProps {
  appName: string;
  screenshotFeaturesData: ScreenshotFeatureData[];
}

const AppShowcaseSection: React.FC<AppShowcaseSectionProps> = ({ appName, screenshotFeaturesData }) => {
  return (
    <section id="app-showcase" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-700 mb-5">See {appName} in Action</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore the core functionalities through these snapshots, showcasing the seamless user experience.
          </p>
        </div>
        <div className="space-y-20 md:space-y-28">
          {screenshotFeaturesData.map((item, index) => (
            <ScreenshotFeature
              key={index}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              title={item.title}
              description={item.description}
              icon={item.icon}
              reverse={item.reverse}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppShowcaseSection;