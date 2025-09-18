import Image from 'next/image';
import Link from 'next/link';
type Props = {
  title: string;
  slug: string;
  year: string;
  role: string;
  summary: string;
  tech: string[];
  cover?: string;
  links?: {label: string; href: string}[];
};

export default function ProjectCard(p: Props) {
  return (
    <li className="rounded-xl bg-white/70 p-4 shadow hover:shadow-soft transition-shadow">
      {p.cover ? (
        <div className="mb-3 overflow-hidden rounded-lg">
          <Link href={`./projects/${p.slug}`}>
            <Image src={p.cover} alt={p.title} width={640} height={240} className="h-36 w-full object-cover" />
          </Link>
        </div>
      ) : null}
      <div className="flex items-start justify-between">
        <Link className="font-medium hover:underline" href={`./projects/${p.slug}`}>{p.title}</Link>
        <div className="text-xs opacity-60">{p.year}</div>
      </div>
      <div className="text-sm opacity-75">{p.role}</div>
      <p className="mt-2 text-sm">{p.summary}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.tech.map(t => <span key={t} className="rounded-full bg-card px-2 py-1 text-xs">{t}</span>)}
      </div>
      {p.links?.length ? (
        <div className="mt-3 flex flex-wrap gap-3">
          {p.links.map(link => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-ink/80 hover:underline">
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </li>
  );
}
