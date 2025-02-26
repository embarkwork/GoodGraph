'use client'
import Link from 'next/link';
import ChatAnimation from '../components/ChatAnimation';
import ScheduleDemoButton from '@/components/ScheduleDemoButton';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-4 lg:px-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left relative">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-mono tracking-tight mb-8">
                Transform Your{' '}
                <span className="">
                  Grantee Reporting
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
                Turn your $1.8B administrative burden into a strategic asset for data-driven philanthropy with our specialized reporting platform.
              </p>
              <div className="flex gap-4">
                <ScheduleDemoButton />
                <Link
                  href="/features"
                  className="group flex items-center whitespace-nowrap px-6 sm:px-8 py-3 font-mono bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Learn More
                  <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/5 to-accent/5 rounded-2xl transform -rotate-6"></div>
              <div className="relative animate-float" style={{ animationDelay: '-2s' }}>
                <ChatAnimation />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50/50 dark:bg-gray-900/50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative">
            <h2 className="text-3xl font-bold mb-4">Why Choose GoodGraph?</h2>
            <p className="text-gray-600 dark:text-gray-400">Empower your foundation with cutting-edge tools</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-mono mb-2">Smart Analytics</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Gain actionable insights from your grantee data with our AI-powered analytics platform.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-mono mb-2">Fine-tuned LLMs</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Specialized AI models trained for nonprofit domains, starting with food security and education.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-mono mb-2">Secure & Compliant</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Enterprise-grade security with full compliance for handling sensitive nonprofit data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
            <div className="relative">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your Grantee Reporting?
              </h2>
              <p className="mb-8 max-w-2xl mx-auto">
                Join leading foundations in making data-driven decisions for greater social impact.
              </p>
              <div className="w-52 mx-auto">
                <ScheduleDemoButton />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}