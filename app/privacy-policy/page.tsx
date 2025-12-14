import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { BellRing } from 'lucide-react';
import Image from 'next/image';

export default function PrivacyPolicyPage() {
  const appName = "Remindo";
  const companyName = "PNT Apps";
  const contactEmail = "projectninjatech@gmail.com";
  const effectiveDate = "Dec 14, 2025";

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
              <Image
                src="/assets/logo.png"
                alt={`${appName} Logo`}
                width={50}
                height={50}
                className="rounded-full"
              />
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
          <h1 className="text-3xl sm:text-4xl font-extrabold text-purple-700 mb-6 text-center">
            Privacy Policy for {appName}
          </h1>
          <p className="text-sm text-gray-500 mb-10 text-center">Last updated: {effectiveDate}</p>

          {/* 1. INTRODUCTION */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to {appName}, operated by {companyName}. We are committed to protecting your privacy.
              This policy explains our simple approach: <strong>we do not collect, store, or access any personal information from you. </strong>
              All reminder data stays on your device.
            </p>
          </section>

          {/* 2. INFORMATION WE DO NOT COLLECT */}
          <section className="mb-8">
            <h2 className="2xl font-bold text-gray-800 mb-4">2. Information We DO NOT Collect</h2>
            <p className="text-gray-700 leading-relaxed">We want to be completely clear:</p>
            <ul className="list-disc list-inside ml-4 mt-3 text-gray-700 leading-relaxed">
              <li>No account required.</li>
              <li>No name, email, phone number, or personal profile information collected.</li>
              <li>No reminder content, notes, tasks, or events are sent to us.</li>
              <li>We do not track your location.</li>
              <li>We do not collect device data or analytics.</li>
            </ul>
          </section>

          {/* 3. LOCAL DATA */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Your Data is Local (On Your Device)</h2>
            <p className="text-gray-700 leading-relaxed">
              Everything you create in {appName} — reminders, tasks, notes, dates, and times —
              is <strong>stored exclusively on your device</strong>.
            </p>
            <ul className="list-disc list-inside ml-4 mt-3 text-gray-700 leading-relaxed">
              <li>No data is transmitted to our servers.</li>
              <li>You have full control over your data.</li>
              <li>Deleting the app may remove all your data permanently.</li>
              <li>All notifications are generated locally on your device, not through our servers.</li>
            </ul>
          </section>

          {/* 5. CHILDREN'S PRIVACY */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              {appName} is not intended for children under 13.
              While we do not collect any personal data, we encourage parental supervision
              to ensure reminders and notifications are set responsibly.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              We do not knowingly collect information from children. If you believe a child
              has used the app and you have concerns, please contact us.
            </p>
          </section>

          {/* 6. AGE SUITABILITY */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Age Suitability</h2>
            <p className="text-gray-700 leading-relaxed">
              {appName} is rated <strong>4+</strong> on the App Store and is suitable for a general audience.
              The app does not contain any sensitive, objectionable, or restricted content.
              All reminders and data remain private on your device, and we do not access or collect them.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              Since no data is transmitted externally, {appName} is safe for users of all ages.
              However, children under 13 should use the app with parental guidance.
            </p>
          </section>

          {/* 7. POLICY CHANGES */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy occasionally. Any updates will be posted here with an updated date.
              Continued use of the app after changes means you accept the revised policy.
            </p>
          </section>

          {/* 8. CONTACT */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions or suggestions about this Privacy Policy, contact us at:
            </p>
            <p className="text-purple-600 font-semibold mt-3">
              Email: <a href={`mailto:${contactEmail}`} className="hover:underline">{contactEmail}</a>
            </p>
          </section>
        </main>

        {/* Footer */}
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
