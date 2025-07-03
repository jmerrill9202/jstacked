import React from 'react'
import Link from 'next/link'
import { Clock, User, ArrowRight, Search, Filter } from 'lucide-react'
import { formatDate } from '@/lib/utils'

export default function BlogPage() {
  // Sample blog posts - in a real app, this would come from CMS or API
  const posts = [
    {
      id: 1,
      title: 'The Complete Guide to ChatGPT for Content Creators',
      excerpt: 'Learn how to use ChatGPT effectively for content creation, from ideation to final polish. Includes 50+ proven prompts that will transform your workflow.',
      category: 'AI Writing',
      readTime: '12 min read',
      author: 'JStacked Team',
      date: '2024-01-15',
      featured: true,
    },
    {
      id: 2,
      title: 'Midjourney vs DALL-E 3: Which AI Image Generator Wins?',
      excerpt: 'A comprehensive comparison of the two leading AI image generators, with real examples and use cases for different types of creative work.',
      category: 'AI Art',
      readTime: '8 min read',
      author: 'JStacked Team',
      date: '2024-01-12',
      featured: false,
    },
    {
      id: 3,
      title: 'How to Build a $10k/Month AI Agency in 90 Days',
      excerpt: 'Step-by-step blueprint for launching and scaling an AI-powered service business from scratch, including real case studies and revenue breakdowns.',
      category: 'Business',
      readTime: '15 min read',
      author: 'JStacked Team',
      date: '2024-01-10',
      featured: false,
    },
    {
      id: 4,
      title: 'The AI Tools That Replaced My Entire Design Team',
      excerpt: 'How one freelancer used AI tools to deliver the same quality work as a full design team, cutting costs by 80% while maintaining client satisfaction.',
      category: 'Design',
      readTime: '10 min read',
      author: 'JStacked Team',
      date: '2024-01-08',
      featured: false,
    },
    {
      id: 5,
      title: 'Claude vs ChatGPT: The Ultimate AI Assistant Comparison',
      excerpt: 'In-depth analysis of the two leading AI assistants, covering strengths, weaknesses, and best use cases for different types of work.',
      category: 'AI Tools',
      readTime: '9 min read',
      author: 'JStacked Team',
      date: '2024-01-05',
      featured: false,
    },
    {
      id: 6,
      title: 'How to Use AI for Video Editing Without Breaking the Bank',
      excerpt: 'Discover the best free and affordable AI video editing tools that can help you create professional-quality videos in minutes.',
      category: 'Video',
      readTime: '11 min read',
      author: 'JStacked Team',
      date: '2024-01-03',
      featured: false,
    },
  ]

  const categories = ['All', 'AI Writing', 'AI Art', 'Business', 'Design', 'AI Tools', 'Video']

  return (
    <div className="min-h-screen bg-neutral-50 pt-16">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              AI Tools <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              In-depth reviews, tutorials, and insights to help you master the best AI tools for your creative work.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  category === 'All'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-neutral-200 card-hover">
              <div className="h-48 bg-gradient-to-br from-primary-100 to-blue-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23e2e8f0%22%20fill-opacity=%220.2%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60" />
                {post.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                      Featured
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-neutral-500 mb-3">
                  <span className="text-primary-600 font-medium">{post.category}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
                
                <h2 className="text-lg font-bold text-neutral-900 mb-3 line-clamp-2">
                  {post.title}
                </h2>
                
                <p className="text-neutral-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-neutral-500">
                    <User className="w-3 h-3" />
                    {post.author}
                  </div>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 text-sm font-medium"
                  >
                    Read More
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="btn-primary">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  )
} 