import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { BellRing, Mail, Send } from 'lucide-react'; // Changed MapPin to Send
import Image from 'next/image';

export default function ContactUsPage() {
  const appName = "Remindo";
  // Removed companyAddress variable
  const companyName = "PNT Apps"; // Directly set company name as per previous context

  return (
    <>
      <Head>
        <title>{appName} - Contact Us</title>
        <meta name="description" content={`Contact ${appName} support. We're here to help!`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
        {/* Header */}
        <header className="bg-white shadow-md py-4">
          <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
            <a href="#home" className="flex items-center space-x-2">
              {/* Replaced BellRing with Image component */}
              <Image
                src="/assets/logo.png" // Path to your logo image
                alt={`${appName} Logo`} // Alt text for accessibility
                width={50} // Desired width of the logo
                height={50} // Desired height of the logo (adjust as needed for aspect ratio)
                className="rounded-full" // Add styling like rounded corners if your logo is circular
              />
              {/* <h1 className="text-2xl font-bold text-purple-700">{appName}</h1> */}
            </a>
            <nav>
              <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium">
                Back to Home
              </Link>
            </nav>
          </div>
        </header>

        {/* Contact Us Content */}
        <main className="container mx-auto px-4 sm:px-6 py-12 md:py-16 max-w-2xl text-center">
          <div className="bg-white p-8 sm:p-10 rounded-xl shadow-lg">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-purple-700 mb-4">Get in Touch</h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Have questions about {appName}? Need assistance or just want to send us feedback? We'd love to hear from you!
            </p>

            <div className="flex flex-col items-center space-y-6">
              {/* Email Contacts */}
              <div className="flex items-center text-gray-700 text-lg">
                <Mail size={24} className="text-purple-600 mr-3 flex-shrink-0" />
                <p className="text-left">
                  For all inquiries, please email us at: <br />
                  <a href="mailto:projectninjatech@gmail.com" className="text-purple-600 font-semibold hover:underline">
                    projectninjatech@gmail.com
                  </a> <br />
                  <a href="mailto:imran.spr@gmail.com" className="text-purple-600 font-semibold hover:underline">
                    imran.spr@gmail.com
                  </a>
                </p>
              </div>

              {/* Telegram Contact */}
              <div className="flex items-center text-gray-700 text-lg">
                <Send size={24} className="text-purple-600 mr-3 flex-shrink-0" />
                <p>
                  Connect with us on Telegram: <br className="sm:hidden" />
                  <a href="https://t.me/imranengg" target="_blank" rel="noopener noreferrer" className="text-purple-600 font-semibold hover:underline">
                    @imranengg
                  </a>
                </p>
              </div>

              <p className="text-gray-500 text-sm mt-6">
                We aim to respond to all inquiries within 2-3 business days.
              </p>
            </div>
          </div>
        </main>

        {/* Footer (simple version for contact page) */}
        <footer className="bg-gray-900 text-gray-400 py-8 text-center">
          <div className="container mx-auto px-4 sm:px-6">
            <Link href="/" className="flex justify-center items-center space-x-2 mb-4">
              <BellRing className="text-purple-400" size={24} />
              <p className="text-xl font-bold text-white">{appName}</p>
            </Link>
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}