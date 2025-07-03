import React from 'react'
import Link from 'next/link'
import { Clock, User, ArrowLeft, Share2, Bookmark, Twitter, Facebook, Linkedin } from 'lucide-react'
import { formatDate } from '@/lib/utils'

interface BlogPostProps {
  params: {
    id: string
  }
}

export default function BlogPost({ params }: BlogPostProps) {
  // Sample blog post data - in a real app, this would come from CMS or API
  const post = {
    id: params.id,
    title: 'The Complete Guide to ChatGPT for Content Creators',
    excerpt: 'Learn how to use ChatGPT effectively for content creation, from ideation to final polish. Includes 50+ proven prompts that will transform your workflow.',
    category: 'AI Writing',
    readTime: '12 min read',
    author: 'JStacked Team',
    date: '2024-01-15',
    content: `
      <p class="lead">ChatGPT has revolutionized content creation, but most creators are barely scratching the surface of its potential. This comprehensive guide will show you how to harness ChatGPT's full power for your content workflow.</p>

      <h2>Why ChatGPT is a Game-Changer for Content Creators</h2>

      <p>Content creation is time-consuming. Whether you're writing blog posts, social media content, or email newsletters, the process typically involves research, ideation, writing, and editing. ChatGPT can accelerate each of these steps when used correctly.</p>

      <blockquote>
        <p>"ChatGPT has reduced my content creation time by 70% while improving the quality of my output. It's not about replacing creativity—it's about amplifying it."</p>
      </blockquote>

      <h2>The 5-Step ChatGPT Content Creation Framework</h2>

      <h3>Step 1: Research and Ideation</h3>
      <p>Before you start writing, use ChatGPT to brainstorm ideas and gather information. Here are some proven prompts:</p>

      <ul>
        <li><strong>Idea Generation:</strong> "Generate 10 unique blog post ideas about [your topic] for [your target audience]"</li>
        <li><strong>Research Assistant:</strong> "What are the key trends in [your industry] that would be valuable for [your audience]?"</li>
        <li><strong>Angle Development:</strong> "What's a contrarian perspective on [popular topic] that would spark discussion?"</li>
      </ul>

      <h3>Step 2: Outline Creation</h3>
      <p>A good outline is the foundation of great content. Use ChatGPT to structure your ideas:</p>

      <pre><code>Create a detailed outline for a blog post titled "[Your Title]" that:
- Hooks the reader in the introduction
- Provides actionable insights
- Includes real examples
- Ends with a clear call-to-action</code></pre>

      <h3>Step 3: Content Generation</h3>
      <p>Now comes the actual writing. The key is to be specific about tone, style, and structure:</p>

      <pre><code>Write a 500-word section about [topic] that:
- Uses a conversational, expert tone
- Includes specific examples
- Provides actionable tips
- Flows naturally from the previous section</code></pre>

      <h2>Advanced ChatGPT Techniques</h2>

      <h3>Prompt Chaining</h3>
      <p>Don't try to get perfect results in one go. Build on ChatGPT's responses by asking follow-up questions and refining the output.</p>

      <h3>Role-Playing Prompts</h3>
      <p>Ask ChatGPT to assume specific roles for better results:</p>

      <ul>
        <li>"Act as a marketing expert and review this content for engagement"</li>
        <li>"Pretend you're my target audience and tell me what questions you'd have"</li>
        <li>"Take on the role of a content editor and improve this draft"</li>
      </ul>

      <h2>Common Mistakes to Avoid</h2>

      <p>Even with these techniques, creators often make mistakes that limit ChatGPT's effectiveness:</p>

      <ol>
        <li><strong>Being too vague:</strong> Specific prompts yield better results</li>
        <li><strong>Accepting first drafts:</strong> Always iterate and refine</li>
        <li><strong>Ignoring fact-checking:</strong> Verify information, especially statistics</li>
        <li><strong>Losing your voice:</strong> Edit the output to match your style</li>
      </ol>

      <h2>Conclusion</h2>

      <p>ChatGPT is a powerful tool, but it's not magic. Success comes from understanding how to communicate with it effectively and using it as part of a broader content strategy. Start with the techniques in this guide, experiment with different approaches, and refine your process based on what works for your specific needs.</p>

      <p>Remember: the goal isn't to replace human creativity but to amplify it. Use ChatGPT to handle the heavy lifting so you can focus on the strategic and creative aspects that only you can provide.</p>
    `,
  }

  return (
    <div className="min-h-screen bg-neutral-50 pt-16">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-sm text-neutral-500 mb-4">
              <span className="text-primary-600 font-medium">{post.category}</span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <User className="w-3 h-3" />
                {post.author}
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4 max-w-4xl mx-auto leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-8">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-center gap-4">
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                <Share2 className="w-4 h-4" />
                Share
              </button>
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-200 text-neutral-700 rounded-lg hover:bg-neutral-300 transition-colors">
                <Bookmark className="w-4 h-4" />
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Social Share */}
        <div className="mt-12 p-8 bg-white rounded-2xl shadow-lg">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">
              Share this article
            </h3>
            <div className="flex items-center justify-center gap-4">
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Twitter className="w-4 h-4" />
                Twitter
              </button>
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors">
                <Facebook className="w-4 h-4" />
                Facebook
              </button>
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 