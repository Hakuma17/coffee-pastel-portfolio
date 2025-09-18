import Section from '@/components/Section';
import ProjectCard from '@/components/ProjectCard';
import Image from 'next/image';
import {tHome} from '@/lib/i18n';

export default async function HomePage({params:{locale}}:{params:{locale:'th'|'en'}}) {
  const data = await tHome(locale);
  const projects = data.projects.items;

  return (
    <>
      {/* Hero / Intro */}
      <Section tone="hero" title={data.hero.title}>
        <p className="max-w-prose opacity-85">{data.hero.subtitle}</p>
      </Section>

      {/* About */}
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
            <div className="flex gap-3 pt-2">
              <a className="rounded-full bg-coffee px-4 py-2 text-white shadow-soft" href={data.about.resumeTh} target="_blank" rel="noopener noreferrer">Resume (TH)</a>
              <a className="rounded-full bg-rose/80 px-4 py-2 text-ink shadow-soft" href={data.about.resumeEn} target="_blank" rel="noopener noreferrer">Resume (EN)</a>
            </div>
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section title={data.projects.title}>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => <ProjectCard key={p.slug} {...p} />)}
        </ul>
      </Section>

      {/* Contact & Address */}
      <Section title={data.contact.title}>
        <div className="space-y-2">
          <div>{data.contact.email}</div>
          <div>{data.contact.location}</div>
          <div className="pt-2">
            <a className="rounded-full bg-rose/70 px-4 py-2 shadow" href={data.contact.mapHref} target="_blank" rel="noopener noreferrer">
              {data.contact.mapCta}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
