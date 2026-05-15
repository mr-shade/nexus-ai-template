import type { Metadata } from 'next';
import { Geist, Space_Grotesk } from 'next/font/google';
import './(default)/css/globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap',
});

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nexus AI | Enterprise Intelligence',
  description:
    'The Intelligent Operating System for Modern Teams. Automate the mundane and focus on the exceptional with Nexus AI.',
  applicationName: 'Nexus AI',
  keywords: ['AI', 'enterprise', 'intelligence', 'automation', 'nexus'],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Nexus AI | Enterprise Intelligence',
    description: 'The Intelligent Operating System for Modern Teams.',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US" className="h-full" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground min-h-full transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
