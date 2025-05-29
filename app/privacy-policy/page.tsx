import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { BellRing } from 'lucide-react';
import Image from 'next/image';

export default function PrivacyPolicyPage() {
  const appName = "Remindo";
  const companyName = "PNT Apps"; // Replace with your company name
  const contactEmail = "projectninjatech@gmail.com"; // Replace with your contact email
  const effectiveDate = "May 29, 2025"; // Updated to current date

  return (
    <>
      <Head>
        <title>{appName} - Privacy Policy</title>
        <meta name="description" content={`Privacy Policy for ${appName} - Learn how we handle your data.`} />
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

        {/* Privacy Policy Content */}
        <main className="container mx-auto px-4 sm:px-6 py-12 md:py-16 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-purple-700 mb-6 text-center">Privacy Policy for {appName}</h1>
          <p className="text-sm text-gray-500 mb-10 text-center">Last updated: {effectiveDate}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to {appName}, operated by {companyName}. We are deeply committed to safeguarding your privacy. This Privacy Policy explains our approach to data: simply put, <strong>we do not collect any personal information from you.</strong> All your reminder data stays private, stored only on your device.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              This policy outlines how any third-party services integrated into the app (specifically for advertising) might interact with data. Please read this policy carefully. By using {appName}, you agree to the practices described herein.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="2xl font-bold text-gray-800 mb-4">2. Information We DO NOT Collect</h2>
            <p className="text-gray-700 leading-relaxed">
              We want to be crystal clear:
            </p>
            <ul className="list-disc list-inside ml-4 mt-3 text-gray-700 leading-relaxed">
              <li className="mb-2">
                We <strong>do not</strong> require you to create an account.
              </li>
              <li className="mb-2">
                We <strong>do not</strong> collect your name, email address, phone number, or any other personally identifiable information.
              </li>
              <li className="mb-2">
                We <strong>do not</strong> have access to, or store, any of your reminder content, tasks, notes, or event details on our servers.
              </li>
              <li className="mb-2">
                We <strong>do not</strong> track your location.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Your Data is Local (On Your Device)</h2>
            <p className="text-gray-700 leading-relaxed">
              All data you create within {appName}, including your reminders, tasks, notes, dates, and times, is <strong>stored exclusively on your local device</strong>.
            </p>
            <ul className="list-disc list-inside ml-4 mt-3 text-gray-700 leading-relaxed">
              <li className="mb-2">
                This means your data is <strong>not sent to our servers</strong>, nor is it synchronized to any cloud service by us.
              </li>
              <li className="mb-2">
                You have full control over this data on your device. Deleting the app will typically remove all associated data.
              </li>
              <li className="mb-2">
                Notifications you receive from {appName} are also <strong>local device notifications</strong>. We do not control or monitor these notifications from our end once they are set up on your device.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Third-Party Advertising: Google AdMob</h2>
            <p className="text-gray-700 leading-relaxed">
              To keep {appName} free to use, we use Google AdMob as our advertising partner. AdMob may collect certain data to provide personalized and non-personalized ads.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              <strong>Information AdMob may collect (not collected by {appName} itself):</strong>
            </p>
            <ul className="list-disc list-inside ml-4 mt-3 text-gray-700 leading-relaxed">
              <li className="mb-2">
                <strong>Device Information:</strong> Such as device type, operating system, unique device identifiers (e.g., advertising ID), IP address, and mobile network information.
              </li>
              <li className="mb-2">
                <strong>Usage Information:</strong> Data about your interactions with the app, including ad impressions and clicks.
              </li>
              <li className="mb-2">
                <strong>Location Information (Non-Precise):</strong> AdMob might infer general location (e.g., country or city) from your IP address to serve locally relevant ads, but it does not collect precise GPS location data.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              <strong>How AdMob uses this data:</strong>
              This data is primarily used by Google and its advertising partners to deliver relevant advertisements, measure ad performance, and prevent fraud. Google's privacy policy applies to their collection and processing of data through AdMob. You can find more information about Google's data practices and how to control your ad experience by visiting the Google Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">https://policies.google.com/privacy</a>.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              You may be able to opt-out of personalized advertising through your device settings (e.g., by resetting your advertising ID or limiting ad tracking).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed">
              Our app may contain links to other websites or services (e.g., links within advertisements) that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              {appName} is not intended for use by children under the age of 13. We do not knowingly collect any personal data from anyone under the age of 13. If you are a parent or guardian and you are aware that your child has used our app and you have concerns, please contact us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions or suggestions about our Privacy Policy, please do not hesitate to contact us at:
            </p>
            <p className="text-purple-600 font-semibold mt-3">
              Email: <a href={`mailto:${contactEmail}`} className="hover:underline">{contactEmail}</a>
            </p>
          </section>
        </main>

        {/* Footer (simple version for policy page) */}
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