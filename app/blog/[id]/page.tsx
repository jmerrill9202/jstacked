import React from 'react'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react'

export default function BlogPost({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-neutral-50 pt-16">
      {/* Back Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Article Header */}
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                Updates
              </span>
              <div className="flex items-center text-sm text-neutral-500">
                <Calendar className="w-4 h-4 mr-1" />
                January 15, 2024
              </div>
              <div className="flex items-center text-sm text-neutral-500">
                <Clock className="w-4 h-4 mr-1" />
                5 min read
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 leading-tight">
              Content Coming Soon
            </h1>

            <div className="flex items-center justify-between mb-8 pb-6 border-b border-neutral-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">JS</span>
                </div>
                <div>
                  <p className="font-medium text-neutral-900">JStacked Team</p>
                  <p className="text-sm text-neutral-500">Content Creator</p>
                </div>
              </div>
              
              <button className="flex items-center gap-2 px-4 py-2 bg-neutral-100 hover:bg-neutral-200 rounded-lg text-neutral-700 transition-colors duration-200">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">📝</span>
                </div>
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                  Article Content Coming Soon
                </h2>
                <p className="text-neutral-600 max-w-md mx-auto mb-8">
                  We're working on bringing you high-quality content about AI tools and practical insights. 
                  This article is currently being prepared by our team.
                </p>
                <div className="text-sm text-neutral-500">
                  <p>What to expect:</p>
                  <ul className="mt-2 space-y-1 text-left max-w-sm mx-auto">
                    <li>• Detailed tool reviews and analysis</li>
                    <li>• Step-by-step implementation guides</li>
                    <li>• Real-world use cases and examples</li>
                    <li>• Honest pros and cons</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-neutral-900 mb-6">Related Articles</h3>
          <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
            <p className="text-neutral-600">More articles coming soon...</p>
          </div>
        </div>
      </article>
    </div>
  )
} 