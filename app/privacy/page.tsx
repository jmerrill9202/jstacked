import React from 'react'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-neutral-50 pt-16">
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              How we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>

            <h2>Information We Collect</h2>
            <p>
              When you visit JStacked, we may collect certain information automatically, including your IP address, 
              browser type, and pages visited. If you subscribe to our newsletter, we collect your email address.
            </p>

            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Provide and improve our services</li>
              <li>Send you newsletters and updates (if you subscribe)</li>
              <li>Analyze website usage and performance</li>
              <li>Ensure website security</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
              except as described in this policy.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at privacy@jstacked.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 