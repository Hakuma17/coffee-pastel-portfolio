import {tHome} from '@/lib/i18n';
import Section from '@/components/Section';
import Image from 'next/image';

export default async function AboutPage({params:{locale}}:{params:{locale:'th'|'en'}}) {
  const data = await tHome(locale);
  return (
    <Section title={data.about.title}>
      <div className="grid gap-6 md:grid-cols-[160px_1fr] items-start">
        <Image src="/avatar.jpg" alt="avatar" width={144} height={144} className="h-36 w-36 rounded-2xl object-cover shadow-soft" />
        <div className="space-y-3">
          <p>{data.about.body}</p>
          <div className="flex flex-wrap gap-2">
            {data.about.skills.map(s => (
              <span key={s} className="rounded-full bg-white/70 px-3 py-1 text-sm shadow">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
