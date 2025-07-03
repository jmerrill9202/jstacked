import React from 'react'
import Link from 'next/link'
import { Clock, User, ArrowRight } from 'lucide-react'

export function FeaturedPosts() {
  const posts = [
    {
      id: 1,
      title: 'The Complete Guide to ChatGPT for Content Creators',
      excerpt: 'Learn how to use ChatGPT effectively for content creation, from ideation to final polish. Includes 50+ proven prompts.',
      category: 'AI Writing',
      readTime: '12 min read',
      author: 'JStacked Team',
      date: '2024-01-15',
      featured: true,
    },
    {
      id: 2,
      title: 'Midjourney vs DALL-E 3: Which AI Image Generator Wins?',
      excerpt: 'A comprehensive comparison of the two leading AI image generators, with real examples and use cases.',
      category: 'AI Art',
      readTime: '8 min read',
      author: 'JStacked Team',
      date: '2024-01-12',
      featured: false,
    },
    {
      id: 3,
      title: 'How to Build a $10k/Month AI Agency in 90 Days',
      excerpt: 'Step-by-step blueprint for launching and scaling an AI-powered service business from scratch.',
      category: 'Business',
      readTime: '15 min read',
      author: 'JStacked Team',
      date: '2024-01-10',
      featured: false,
    },
    {
      id: 4,
      title: 'The AI Tools That Replaced My Entire Design Team',
      excerpt: 'How one freelancer used AI tools to deliver the same quality work as a full design team.',
      category: 'Design',
      readTime: '10 min read',
      author: 'JStacked Team',
      date: '2024-01-08',
      featured: false,
    },
  ]

  const featuredPost = posts.find(post => post.featured)
  const regularPosts = posts.filter(post => !post.featured)

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {featuredPost && (
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-neutral-200 card-hover">
            <div className="h-64 bg-gradient-to-br from-primary-100 to-blue-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23e2e8f0%22%20fill-opacity=%220.2%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60" />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                  Featured
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-neutral-500 mb-3">
                <span className="text-primary-600 font-medium">{featuredPost.category}</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {featuredPost.readTime}
                </div>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3 line-clamp-2">
                {featuredPost.title}
              </h3>
              <p className="text-neutral-600 mb-4 line-clamp-3">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-neutral-500">
                  <User className="w-3 h-3" />
                  {featuredPost.author}
                </div>
                <Link 
                  href={`/blog/${featuredPost.id}`}
                  className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 text-sm font-medium"
                >
                  Read More
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="lg:col-span-1 space-y-6">
        {regularPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-neutral-200 card-hover">
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-neutral-500 mb-3">
                <span className="text-primary-600 font-medium">{post.category}</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
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
          </div>
        ))}
      </div>
    </div>
  )
} 