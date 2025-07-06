import React from 'react'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-neutral-50 pt-16">
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              The terms and conditions for using JStacked.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>

            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using JStacked, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2>Use License</h2>
            <p>
              Permission is granted to temporarily view the materials on JStacked for personal, non-commercial transitory viewing only. 
              This is the grant of a license, not a transfer of title.
            </p>

            <h2>Disclaimer</h2>
            <p>
              The materials on JStacked are provided on an 'as is' basis. JStacked makes no warranties, expressed or implied, 
              and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions 
              of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2>Limitations</h2>
            <p>
              In no event shall JStacked or its suppliers be liable for any damages (including, without limitation, damages for 
              loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials 
              on JStacked, even if JStacked or an authorized representative has been notified orally or in writing of the 
              possibility of such damage.
            </p>

            <h2>Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at legal@jstacked.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 