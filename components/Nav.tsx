'use client';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import {usePathname} from 'next/navigation';
import {HomeIcon, AboutIcon, ProjectsIcon, ContactIcon, ResumeIcon, GithubIcon, LinkedInIcon} from './Icons';

type Props = { name: string; role: string; home: string; about?: string; projects?: string; contact?: string; resume?: string; socials: {label:string; href:string}[] };

export default function Nav({name, role, home, about, projects, contact, resume, socials}: Props) {
  const pathname = usePathname();
  const toggleTheme = () => {
    if (typeof document !== 'undefined') {
      const el = document.documentElement;
      el.classList.toggle('dark');
    }
  };

  return (
    <div className="rounded-2xl card-skin p-5 shadow-soft">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-coffee/90" />
        <div>
          <div className="text-lg font-semibold">{name}</div>
          <div className="text-sm opacity-70">{role}</div>
        </div>
      </div>

      <nav className="mt-6 space-y-2">
        {(() => {
          const segs = (pathname || '/th').split('/');
          const locale = segs[1] === 'en' ? 'en' : 'th';
          const base = `/${locale}`;
          const links = [
            {href: base, label: home, Icon: HomeIcon},
            {href: `${base}/about`, label: about ?? 'About', Icon: AboutIcon},
            {href: `${base}/projects`, label: projects ?? 'Projects', Icon: ProjectsIcon},
            {href: `${base}/contact`, label: contact ?? 'Contact', Icon: ContactIcon},
            {href: `${base}/resume`, label: resume ?? 'Resume', Icon: ResumeIcon},
          ];
          return links.map(i => (
            <Link
              key={i.href}
              href={i.href}
              className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-white/60"
            >
              <i.Icon className="text-rose/90" />
              <span>{i.label}</span>
            </Link>
          ));
        })()}
      </nav>

      <div className="mt-6 flex gap-3">
        <LanguageSwitcher/>
        <button
          type="button"
          onClick={toggleTheme}
          className="rounded-full bg-rose/80 px-3 py-2 text-ink shadow-soft hover:opacity-95"
          aria-label="Toggle theme"
        >
          Theme
        </button>
      </div>

      <div className="mt-6 space-y-1 text-sm opacity-75">
        {socials.map((s) => (
          <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-100">
            {s.label.toLowerCase().includes('github') ? <GithubIcon className="text-ink/80"/> : null}
            {s.label.toLowerCase().includes('linkedin') ? <LinkedInIcon className="text-ink/80"/> : null}
            <span>{s.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
