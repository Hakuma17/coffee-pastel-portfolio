// Removed NextIntlClientProvider to avoid server-side config requirements
import {notFound} from 'next/navigation';
import './globals.css';
import {Kanit, Inter} from 'next/font/google';
import Nav from '@/components/Nav';
import {personJsonLd} from '@/lib/seo';
import {tNav} from '@/lib/i18n';

const kanit = Kanit({subsets: ['thai', 'latin'], weight: ['300','400','600']});
const inter = Inter({subsets: ['latin']});

export const generateStaticParams = () => [{locale:'th'},{locale:'en'}];

export async function generateMetadata({params:{locale}}:{params:{locale:'th'|'en'}}) {
  const baseUrl = 'https://your-domain.com';
  const messages = (await import(`@/messages/${locale}.json`)).default;
  const title = locale==='th' ? 'พอร์ตโฟลิโอโทนพาสเทลกาแฟ' : 'Coffee-pastel Portfolio';
  const description = messages?.hero?.subtitle ?? 'Minimal, bilingual portfolio';
  const url = `${baseUrl}/${locale}`;
  const og = {
    title,
    description,
    url,
    siteName: 'Coffee Pastel Portfolio',
    images: [{url:`${baseUrl}/api/og`, width:1200, height:630, alt:title}],
    locale,
    type: 'website'
  };
  return {
    title,
    description,
    alternates: { languages: { th: `${baseUrl}/th`, en: `${baseUrl}/en` } },
    openGraph: og,
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/api/og`]
    }
  };
}

export default async function RootLayout({
  children, params: {locale}
}: {children: React.ReactNode; params: {locale: 'th'|'en'}}) {
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  // Prepare JSON-LD Person schema from messages
  const name: string = messages?.nav?.name ?? '';
  const emailText: string = messages?.contact?.email ?? '';
  const locationText: string = messages?.contact?.location ?? '';
  const email = (emailText.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)?.[0]) ?? '';
  const location = locationText.split(':').slice(1).join(':').trim() || locationText;
  const person = personJsonLd({name, email, location});
  const navData = await tNav(locale);

  return (
    <html lang={locale} className={`${kanit.className} ${inter.className}`}>
      <body className="min-h-dvh antialiased text-base">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{__html: JSON.stringify(person)}}
        />
        {/* Layout: Sidebar left (fixed on md+), content right */}
        <div className="mx-auto max-w-6xl px-4 py-8 md:grid md:grid-cols-[260px_1fr] md:gap-8">
          <aside className="mb-6 md:mb-0 md:sticky md:top-8 h-max">
            <Nav
              name={navData.name}
              role={navData.role}
              home={navData.home}
              about={navData.about}
              projects={navData.projects}
              contact={navData.contact}
              resume={navData.resume}
              socials={navData.socials}
            />
          </aside>
          <main className="space-y-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
