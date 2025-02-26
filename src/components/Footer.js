export default function Footer() {
  return (
    <footer className="bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              GoodGraph
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Transform your grantee reporting from a burden into a strategic asset.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-text-light dark:text-text-dark">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="/features" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="/pricing" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light text-sm">
                  Pricing
                </a>
              </li>
              <li>
                <a 
                  href="https://calendly.com/goodgraph-info/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light text-sm"
                >
                  Schedule Demo
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-text-light dark:text-text-dark">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="/careers" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light text-sm">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-text-light dark:text-text-dark">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://twitter.com/goodgraph" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light text-sm">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/company/goodgraph" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light text-sm">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:hello@goodgraph.ai" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light text-sm">
                  hello@goodgraph.ai
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="text-center text-sm text-gray-600 dark:text-gray-400">
            <p>© {new Date().getFullYear()} GoodGraph. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}