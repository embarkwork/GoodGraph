import { PT_Serif, IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from '../components/ThemeProvider';
//import Header from '../components/Header';
//import Footer from '../components/Footer';
import "./globals.css";

const ptSerif = PT_Serif({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-pt-serif',
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});

export const metadata = {
  title: "GoodGraph - Transform Grantee Reporting",
  description: "Transform your grantee reporting from a $1.8B administrative burden into a strategic asset for data-driven philanthropy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ptSerif.variable} ${ibmPlexMono.variable} font-serif antialiased bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark min-h-screen`}
      >
        <ThemeProvider>
          
          <main className="flex-grow">
            {children}
          </main>
          
        </ThemeProvider>
      </body>
    </html>
  );
}
