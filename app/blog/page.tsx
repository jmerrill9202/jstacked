import React from 'react'
import { Calendar, Clock, Search, Filter } from 'lucide-react'

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-neutral-50 pt-16">
      {/* Hero Section */}
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              The <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              In-depth reviews, practical guides, and honest insights about the AI tools that actually work.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-3 bg-white rounded-lg border border-neutral-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none cursor-not-allowed opacity-50"
              disabled
            />
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-3 bg-white rounded-lg border border-neutral-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none cursor-not-allowed opacity-50" disabled>
              <option>All Categories</option>
              <option>AI Tools</option>
              <option>Reviews</option>
              <option>Guides</option>
            </select>
            <button className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg border border-neutral-200 text-neutral-700 hover:bg-neutral-50 transition-colors duration-200 cursor-not-allowed opacity-50" disabled>
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center py-20">
          <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-bold text-xl">📝</span>
          </div>
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
            Content Coming Soon
          </h2>
          <p className="text-neutral-600 max-w-md mx-auto mb-8">
            We're working hard to bring you the best AI tool reviews and practical guides. 
            Our team is testing tools and preparing comprehensive content.
          </p>
          <div className="text-sm text-neutral-500">
            <p>Coming soon:</p>
            <ul className="mt-2 space-y-1">
              <li>• Comprehensive AI tool reviews</li>
              <li>• Step-by-step implementation guides</li>
              <li>• Tool comparisons and recommendations</li>
              <li>• Industry insights and trends</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 