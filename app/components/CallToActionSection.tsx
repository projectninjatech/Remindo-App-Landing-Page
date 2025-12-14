import React from 'react';
import { DownloadCloud, Smartphone } from 'lucide-react';
import Link from 'next/link';

interface CallToActionSectionProps {
  appName: string;
}

const CallToActionSection: React.FC<CallToActionSectionProps> = ({ appName }) => {
  return (
    <section id="cta" className="py-20 md:py-32 bg-purple-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        {/* Decorative SVG pattern or image can go here */}
      </div>
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <Smartphone size={72} className="mx-auto mb-8 text-pink-300 drop-shadow-lg" />
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight">Ready to Take Control of Your Day?</h2>
        <p className="text-xl sm:text-2xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          Download {appName} now and experience the peace of mind that comes with perfect organization and timely reminders.
        </p>
        <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-5 px-12 rounded-xl text-xl sm:text-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 mx-auto">
          <DownloadCloud size={28} />
          <Link href={"https://apps.apple.com/us/app/remindo-task-water-reminder/id6746641151"}>Get {appName} Today</Link>
        </button>
      </div>
    </section>
  );
};

export default CallToActionSection;