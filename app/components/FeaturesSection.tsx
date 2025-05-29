import React from 'react';
import FeatureCard from './FeatureCard'; // Assuming it's in the same components directory

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  appName: string;
  features: Feature[];
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ appName, features }) => {
  return (
    <section id="features" className="py-20 md:py-28 bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-700 mb-5">Why You'll Love {appName}</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {appName} is meticulously designed with features to help you stay organized, productive, and stress-free.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;