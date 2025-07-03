import React from 'react'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-primary-50 to-blue-50" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23e2e8f0%22%20fill-opacity=%220.3%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-neutral-700 border border-neutral-200/60 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Trusted by 10,000+ creators
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6 tracking-tight">
            Master the{' '}
            <span className="gradient-text">AI Tools</span>
            <br />
            That Actually Work
          </h1>
          
          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-neutral-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Stop wasting time on AI tools that overpromise and underdeliver. 
            We curate, test, and review the tools that successful creators actually use.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/blog" className="btn-primary inline-flex items-center gap-2">
              Explore Latest Reviews
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <button className="btn-secondary inline-flex items-center gap-2">
              <Play className="w-4 h-4" />
              Watch Demo
            </button>
          </div>
          
          {/* Featured in */}
          <div className="text-center">
            <p className="text-sm text-neutral-500 mb-4">Featured in</p>
            <div className="flex items-center justify-center gap-8 opacity-60">
              {/* Placeholder for company logos */}
              <div className="h-8 w-24 bg-neutral-300 rounded opacity-40"></div>
              <div className="h-8 w-24 bg-neutral-300 rounded opacity-40"></div>
              <div className="h-8 w-24 bg-neutral-300 rounded opacity-40"></div>
              <div className="h-8 w-24 bg-neutral-300 rounded opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-400 rounded-full animate-float opacity-60"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-400 rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-primary-500 rounded-full animate-float opacity-50" style={{ animationDelay: '4s' }}></div>
    </section>
  )
} 