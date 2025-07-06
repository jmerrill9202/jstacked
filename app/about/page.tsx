import React from 'react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-50 pt-16">
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              About <span className="gradient-text">JStacked</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Your trusted source for discovering and mastering the best AI tools available.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <h2>Our Mission</h2>
            <p>
              JStacked exists to help creators, freelancers, and remote professionals cut through the noise 
              and find AI tools that actually deliver results. We test, review, and curate only the best 
              tools that can genuinely improve your workflow and productivity.
            </p>

            <h2>What Makes Us Different</h2>
            <p>
              Unlike other AI tool directories, we focus on practical, real-world testing. Every tool we 
              recommend has been thoroughly evaluated in actual work scenarios. We don't just list features—we 
              show you how these tools perform where it matters most: in your daily work.
            </p>

            <h2>Stay Updated</h2>
            <p>
              The AI landscape moves fast, and so do we. Subscribe to our newsletter to get the latest 
              tool reviews, comparisons, and insights delivered directly to your inbox.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 