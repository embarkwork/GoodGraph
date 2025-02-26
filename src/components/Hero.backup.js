import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    return (
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto flex items-center justify-between">
          <div className="w-1/2 space-y-6">
            <h2 className="text-4xl font-bold">
              Transforming Data into <span className="text-primary">Meaningful Impact</span>
            </h2>
            <p className="text-gray-600">
              GoodGraph AI leverages cutting-edge machine learning to turn complex data into actionable insights that drive real-world change.
            </p>``
            <div className="space-x-4">
              <Link 
                href="/get-started"
                className="inline-block bg-primary text-white px-6 py-3 rounded hover:bg-primary-light transition"
              >
                Get Started
              </Link>
              <Link
                href="/learn-more" 
                className="inline-block border border-primary text-primary px-6 py-3 rounded hover:bg-blue-50 transition"
              >
                Learn More
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