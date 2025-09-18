"use client";
import {useMemo, useState} from 'react';
import ProjectCard from './ProjectCard';
import type {ProjectItem} from '@/lib/i18n';
import {projectJsonLd} from '@/lib/i18n';

type Props = { locale: 'th'|'en'; items: ProjectItem[] };

export default function ProjectsGrid({locale, items}: Props) {
  const allTags = useMemo(() => {
    const s = new Set<string>();
    items.forEach(p => p.tech.forEach(t => s.add(t)));
    return Array.from(s).sort((a,b)=>a.localeCompare(b));
  }, [items]);

  const [active, setActive] = useState<string | 'ALL'>('ALL');
  const filtered = useMemo(() => (
    active === 'ALL' ? items : items.filter(p => p.tech.includes(active))
  ), [active, items]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActive('ALL')}
          className={`rounded-full px-3 py-1 text-sm shadow ${active==='ALL' ? 'bg-coffee text-white' : 'bg-white/70'}`}
        >ALL</button>
        {allTags.map(tag => (
          <button
            key={tag}
            type="button"
            onClick={() => setActive(tag)}
            className={`rounded-full px-3 py-1 text-sm shadow ${active===tag ? 'bg-rose/80 text-ink' : 'bg-white/70'}`}
          >{tag}</button>
        ))}
      </div>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <div key={p.slug}>
            <script
              type="application/ld+json"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{__html: JSON.stringify(projectJsonLd({...p, locale}))}}
            />
            <ProjectCard {...p} />
          </div>
        ))}
      </ul>
    </div>
  );
}
