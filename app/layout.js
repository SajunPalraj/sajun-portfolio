import './globals.css';
import ThemeRegistry from './ThemeRegistry';

export const metadata = {
  title: 'Sajun Palraj | MERN Full-Stack Developer',
  description: 'Official developer portfolio of Sajun Palraj, MERN Full-Stack Developer specializing in React, Next.js, Node.js, Express, MongoDB, and modern web applications.',
  keywords: [
    'Sajun Palraj',
    'MERN Full-Stack Developer',
    'Full-Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'Ponjesly College of Engineering',
    'Nagercoil',
    'Portfolio'
  ],
  authors: [{ name: 'Sajun Palraj' }],
  creator: 'Sajun Palraj',
  openGraph: {
    title: 'Sajun Palraj | MERN Full-Stack Developer',
    description: 'Explore the projects, skills, internship experience, and professional developer journey of Sajun Palraj.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Sajun Palraj',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#080808] text-white antialiased selection:bg-[#FF6B00]/30 selection:text-[#FF8A00]">
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
