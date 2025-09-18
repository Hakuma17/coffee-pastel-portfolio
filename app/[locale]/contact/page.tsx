import {tHome} from '@/lib/i18n';
import Section from '@/components/Section';

export default async function ContactPage({params:{locale}}:{params:{locale:'th'|'en'}}) {
  const data = await tHome(locale);
  return (
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
  );
}
