'use client';

export default function ScheduleDemoButton() {
    return (
        <a
            href="https://calendly.com/goodgraph-info/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center whitespace-nowrap px-6 sm:px-8 py-3 font-mono bg-black text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-black/20"
        >
            Schedule Demo
            <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
        </a>
    )
}