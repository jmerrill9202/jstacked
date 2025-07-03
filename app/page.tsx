import React from 'react'
import Link from 'next/link'
import { ArrowRight, Zap, Target, TrendingUp, Users, ChevronRight } from 'lucide-react'
import { Hero } from '@/components/Hero'
import { FeaturedPosts } from '@/components/FeaturedPosts'
import { Newsletter } from '@/components/Newsletter'
import { Stats } from '@/components/Stats'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Stats Section */}
      <Stats />
      
      {/* Featured Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Latest AI <span className="gradient-text">Insights</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Discover the latest AI tools and strategies that successful creators use to scale their work.
            </p>
          </div>
          
          <FeaturedPosts />
          
          <div className="text-center mt-12">
            <Link 
              href="/blog" 
              className="btn-primary inline-flex items-center gap-2"
            >
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Why <span className="gradient-text">JStacked</span>?
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              We curate, test, and review AI tools so you don't have to waste time on tools that don't work.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Battle-Tested Tools',
                description: 'Every tool we recommend has been thoroughly tested by real creators in production environments.',
              },
              {
                icon: Target,
                title: 'Actionable Guides',
                description: 'Step-by-step tutorials that help you implement AI tools into your workflow immediately.',
              },
              {
                icon: TrendingUp,
                title: 'Industry Insights',
                description: 'Stay ahead of the curve with insider knowledge about emerging AI trends and opportunities.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">{item.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  )
} 