'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
      <div className="container mx-auto flex items-center justify-between">
        <div className="w-1/2 space-y-6">
          <h2 className="text-4xl font-bold">
            Maximize Foundation Impact <span className="text-primary">Through Data</span>
          </h2>
          
          <p className="text-gray-600">
            Transform your grantee reporting from a $1.8B administrative burden into a strategic asset for data-driven philanthropy.
          </p>

          <div className="space-x-4">
            <Link
              href="/get-started"
              className="inline-block bg-primary text-white px-6 py-3 rounded hover:bg-primary-light transition"
            >
              Empower Your Grantees
            </Link>
            <Link
              href="/learn-more"
              className="inline-block border border-primary text-primary px-6 py-3 rounded hover:bg-blue-50 transition"
            >
              View Foundation Benefits
            </Link>
          </div>
        </div>

        <div className="w-1/2">
          <Image
            src="/hero-graphic.svg"
            alt="Data Visualization"
            width={500}
            height={400}
            priority
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}