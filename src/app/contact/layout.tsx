import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Cubes Real Estate',
  description: 'Get in touch with Cubes Real Estate for partnerships, collaborations, or project inquiries. Located in Khartoum, Sudan.',
  keywords: ['contact', 'cubes real estate', 'khartoum', 'sudan', 'real estate contact'],
  openGraph: {
    title: 'Contact Us - Cubes Real Estate',
    description: 'Get in touch with Cubes Real Estate for partnerships, collaborations, or project inquiries.',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}