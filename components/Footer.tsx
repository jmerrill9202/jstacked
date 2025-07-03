import React from 'react'
import Link from 'next/link'
import { Twitter, Linkedin, Github, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'Blog', href: '/blog' },
      { name: 'Tools', href: '/tools' },
      { name: 'Categories', href: '/categories' },
      { name: 'About', href: '/about' },
    ],
    secondary: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Contact', href: '/contact' },
    ],
    social: [
      { name: 'Twitter', href: '#', icon: Twitter },
      { name: 'LinkedIn', href: '#', icon: Linkedin },
      { name: 'GitHub', href: '#', icon: Github },
      { name: 'Email', href: 'mailto:hello@jstacked.com', icon: Mail },
    ],
  }

  return (
    <footer className="bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">JS</span>
              </div>
              <span className="text-xl font-bold text-neutral-900">JStacked</span>
            </div>
            <p className="text-neutral-600 text-sm max-w-md leading-relaxed">
              Discover and master the best AI tools for freelancers, creators, and remote professionals. 
              Curated insights, in-depth reviews, and practical guides to elevate your workflow.
            </p>
          </div>

          {/* Main Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-neutral-600 hover:text-primary-600 text-sm transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Secondary Links */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {navigation.secondary.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-neutral-600 hover:text-primary-600 text-sm transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-8 border-t border-neutral-200">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-neutral-500 text-sm">
              © {currentYear} JStacked. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-6 mt-4 sm:mt-0">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-neutral-400 hover:text-primary-600 transition-colors duration-200"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 