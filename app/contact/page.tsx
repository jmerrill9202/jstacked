import React from 'react'
import { Mail, MessageCircle, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-neutral-50 pt-16">
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Have questions about AI tools or want to suggest a review? We'd love to hear from you.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">Email Us</h3>
            <p className="text-neutral-600">hello@jstacked.com</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">Feedback</h3>
            <p className="text-neutral-600">feedback@jstacked.com</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">Response Time</h3>
            <p className="text-neutral-600">Within 24 hours</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6 text-center">Send us a Message</h2>
          
          <div className="text-center py-12">
            <p className="text-neutral-600 mb-4">Contact form coming soon!</p>
            <p className="text-sm text-neutral-500">
              For now, please reach out to us directly at <strong>hello@jstacked.com</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 