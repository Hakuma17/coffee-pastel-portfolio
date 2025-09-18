// Types for the known message schema
export interface SocialLink {label: string; href: string}
export interface ProjectItem {title:string; slug:string; year:string; role:string; summary:string; tech:string[]; cover?:string; links?: SocialLink[]; gallery?: string[]}

type Messages = {
  nav: {name:string; role:string; home:string; about:string; projects:string; contact:string; resume:string; socials:SocialLink[]};
  hero: {title:string; subtitle:string};
  about: {title:string; body:string; skills:string[]; resume:{th:string; en:string}};
  projects: {title:string; items: ProjectItem[]};
  contact: {title:string; email:string; location:string; mapHref:string; mapCta:string};
};

async function loadMessages(locale:string): Promise<Messages> {
  const mod = await import(`@/messages/${locale}.json`);
  return mod.default as Messages;
}

export async function tNav(locale:string) {
  const m = await loadMessages(locale);
  return {
    name: m.nav.name,
    role: m.nav.role,
    home: m.nav.home,
    about: m.nav.about,
    projects: m.nav.projects,
    contact: m.nav.contact,
    resume: m.nav.resume,
    socials: m.nav.socials
  };
}

export async function tHome(locale:string) {
  const m = await loadMessages(locale);
  return {
    hero: {title: m.hero.title, subtitle: m.hero.subtitle},
    about: {
      title: m.about.title,
      body: m.about.body,
      skills: m.about.skills,
      resumeTh: m.about.resume.th,
      resumeEn: m.about.resume.en
    },
    projects: {
      title: m.projects.title,
      items: m.projects.items
    },
    contact: {
      title: m.contact.title,
      email: m.contact.email,
      location: m.contact.location,
      mapHref: m.contact.mapHref,
      mapCta: m.contact.mapCta
    }
  };
}

export function projectJsonLd(p: ProjectItem & {locale: string}) {
  const urlBase = 'https://your-domain.com';
  const url = `${urlBase}/${p.locale}/projects/${p.slug}`;
  const images = (p.gallery?.length ? p.gallery : (p.cover ? [p.cover] : []))
    .map(src => `${urlBase}${src}`);
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: p.title,
    url,
    inLanguage: p.locale,
    datePublished: p.year,
    description: p.summary,
    keywords: p.tech?.join(', '),
    image: images
  };
}
