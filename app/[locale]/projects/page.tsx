import {tHome} from '@/lib/i18n';
import Section from '@/components/Section';
import ProjectsGrid from '@/components/ProjectsGrid';

export default async function ProjectsPage({params:{locale}}:{params:{locale:'th'|'en'}}) {
  const data = await tHome(locale);
  return (
    <Section title={data.projects.title}>
      <ProjectsGrid locale={locale} items={data.projects.items} />
    </Section>
  );
}
