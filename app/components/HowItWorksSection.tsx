import React from 'react';

interface HowItWorksSectionProps {
  appName: string;
}

const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ appName }) => {
  const steps = [
    { step: "1", title: "Download the App", description: `Get ${appName} from the App Store.`, bgColor: "bg-pink-100", textColor: "text-pink-500" },
    { step: "2", title: "Create Your First Reminder", description: "Tap the '+' button, set up your task or event details, and you're set!", bgColor: "bg-blue-100", textColor: "text-blue-500" },
    { step: "3", title: "Stay Organized!", description: "Receive timely notifications and never forget anything important again. Enjoy the peace of mind!", bgColor: "bg-green-100", textColor: "text-green-500" }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-purple-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-700 mb-5">Get Started in 3 Simple Steps</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Managing your reminders has never been easier or more intuitive.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
          {steps.map(item => (
            <div key={item.step} className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className={`${item.bgColor} ${item.textColor} p-4 rounded-full inline-flex items-center justify-center w-20 h-20 mb-6 text-4xl font-bold shadow-md`}>{item.step}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;