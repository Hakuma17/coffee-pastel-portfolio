import Image from 'next/image';
import Section from '@/components/Section';
import {tHome, projectJsonLd} from '@/lib/i18n';
import {notFound} from 'next/navigation';

export default async function ProjectDetail({params}:{params:{locale:'th'|'en'; slug:string}}) {
  const {locale, slug} = params;
  const data = await tHome(locale);
  const p = data.projects.items.find(i => i.slug === slug);
  if (!p) notFound();
  const gallery = p.gallery?.length ? p.gallery : (p.cover ? [p.cover] : []);

  return (
    <Section title={p.title}>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{__html: JSON.stringify(projectJsonLd({...p, locale}))}}
      />
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-sm opacity-75">{p.role}</div>
          <div className="text-xs opacity-60">{p.year}</div>
        </div>
        <p>{p.summary}</p>
        <div className="flex flex-wrap gap-2">
          {p.tech.map(t => <span key={t} className="rounded-full bg-card px-2 py-1 text-xs">{t}</span>)}
        </div>
        {gallery.length ? (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((src, idx) => (
              <div key={src+idx} className="overflow-hidden rounded-lg bg-white/60">
                <Image src={src} alt={`${p.title} ${idx+1}`} width={800} height={500} className="h-48 w-full object-cover" />
              </div>
            ))}
          </div>
        ) : null}
        {p.links?.length ? (
          <div className="pt-2">
            {p.links.map(l => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="mr-3 text-ink/80 hover:underline">{l.label}</a>
            ))}
          </div>
        ) : null}
      </div>
    </Section>
  );
}
