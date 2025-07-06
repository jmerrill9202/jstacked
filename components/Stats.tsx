import React from 'react'

export function Stats() {
  const stats = [
    {
      number: '25+',
      label: 'AI Tools Tested',
      description: 'Rigorously evaluated for quality',
    },
    {
      number: '12+',
      label: 'In-Depth Reviews',
      description: 'Comprehensive guides and comparisons',
    },
    {
      number: '500+',
      label: 'Hours of Testing',
      description: 'Real-world evaluation time',
    },
    {
      number: '100%',
      label: 'Unbiased Reviews',
      description: 'Honest, practical assessments',
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