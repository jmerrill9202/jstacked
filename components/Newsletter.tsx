import React from 'react'
import { Mail, CheckCircle } from 'lucide-react'

export function Newsletter() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-blue-700 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.1%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Ahead of the AI Curve
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get weekly insights on the latest AI tools, techniques, and trends. 
            Join creators who never miss an update.
          </p>
          
          <div className="max-w-md mx-auto mb-8">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30 backdrop-blur-sm"
                disabled
              />
              <button 
                className="px-6 py-3 bg-white/20 text-white rounded-lg font-medium cursor-not-allowed opacity-50"
                disabled
              >
                Coming Soon
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-blue-100 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              No spam, ever
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Unsubscribe anytime
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Weekly updates
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 