import React from 'react'

export function Stats() {
  const stats = [
    {
      number: '10,000+',
      label: 'Creators Helped',
      description: 'Professionals using our recommendations',
    },
    {
      number: '250+',
      label: 'Tools Reviewed',
      description: 'AI tools tested and evaluated',
    },
    {
      number: '50+',
      label: 'In-Depth Guides',
      description: 'Comprehensive implementation tutorials',
    },
    {
      number: '95%',
      label: 'Success Rate',
      description: 'Of readers implement our recommendations',
    },
  ]

  return (
    <section className="py-20 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-neutral-700 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-neutral-500">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 