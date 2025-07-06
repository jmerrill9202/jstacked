import React from 'react'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export function FeaturedPosts() {
  const posts = [
    {
      id: 1,
      title: 'Content Coming Soon',
      excerpt: 'We are working on bringing you the best AI tool reviews and guides. Stay tuned for comprehensive insights.',
      author: 'JStacked Team',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Updates',
      image: '/api/placeholder/600/400',
      featured: true,
    },
    {
      id: 2,
      title: 'More Articles on the Way',
      excerpt: 'Our team is testing and reviewing the latest AI tools to bring you honest, practical recommendations.',
      author: 'JStacked Team',
      date: '2024-01-10',
      readTime: '3 min read',
      category: 'Updates',
      image: '/api/placeholder/600/400',
      featured: false,
    },
    {
      id: 3,
      title: 'Quality Reviews Coming',
      excerpt: 'We believe in thorough testing and honest reviews. Our upcoming content will help you make informed decisions.',
      author: 'JStacked Team',
      date: '2024-01-05',
      readTime: '4 min read',
      category: 'Updates',
      image: '/api/placeholder/600/400',
      featured: false,
    },
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Latest <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Coming Soon: Deep dives into the AI tools that are actually worth your time and money.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Featured post */}
          <div className="lg:col-span-1">
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[16/9] bg-gradient-to-br from-primary-100 to-blue-100 flex items-center justify-center">
                <span className="text-primary-600 font-semibold">Preview Image</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                    {posts[0].category}
                  </span>
                  <div className="flex items-center text-sm text-neutral-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(posts[0].date)}
                  </div>
                  <div className="flex items-center text-sm text-neutral-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {posts[0].readTime}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {posts[0].title}
                </h3>
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  {posts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-500">
                    By {posts[0].author}
                  </span>
                  <Link
                    href={`/blog/${posts[0].id}`}
                    className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors duration-200"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          </div>

          {/* Other posts */}
          <div className="lg:col-span-1 space-y-6">
            {posts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                    {post.category}
                  </span>
                  <div className="flex items-center text-sm text-neutral-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(post.date)}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-neutral-600 mb-3 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-500">
                    By {post.author}
                  </span>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors duration-200"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="btn-primary inline-flex items-center gap-2"
          >
            View All Posts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
} 