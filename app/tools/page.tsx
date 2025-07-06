import React from 'react'

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-neutral-50 pt-16">
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              AI <span className="gradient-text">Tools</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Discover and compare the best AI tools for creators, freelancers, and remote professionals.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-bold text-xl">⚒️</span>
          </div>
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
            Coming Soon
          </h2>
          <p className="text-neutral-600 max-w-md mx-auto">
            We're curating the best AI tools and preparing comprehensive reviews. 
            Check back soon for our complete tool directory.
          </p>
        </div>
      </div>
    </div>
  )
} 