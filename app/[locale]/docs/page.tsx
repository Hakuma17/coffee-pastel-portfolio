import {tDocs} from '@/lib/i18n';
import Section from '@/components/Section';

export default async function DocsPage({params:{locale}}:{params:{locale:'th'|'en'}}) {
  const data = await tDocs(locale);
  
  return (
    <Section title={data.title}>
      <div className="space-y-6">
        <p className="opacity-85">{data.subtitle}</p>
        
        {/* Pages Information */}
        <div className="space-y-4">
          {data.pages.map((page, index) => (
            <div key={index} className="rounded-lg bg-white/50 p-4 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-coffee">{page.name}</h3>
                <code className="rounded bg-rose/20 px-2 py-1 text-sm text-ink/80">{page.path}</code>
              </div>
              <p className="mb-3 text-sm opacity-90">{page.description}</p>
              <div className="space-y-1">
                <h4 className="text-sm font-medium text-ink/80">{locale === 'th' ? 'ส่วนประกอบ:' : 'Sections:'}</h4>
                <ul className="list-disc pl-5 text-sm opacity-75">
                  {page.sections.map((section, sIndex) => (
                    <li key={sIndex}>{section}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {/* Features */}
        <div className="rounded-lg bg-card p-4">
          <h3 className="mb-3 text-lg font-semibold text-coffee">
            {locale === 'th' ? 'คุณสมบัติของเว็บไซต์' : 'Website Features'}
          </h3>
          <ul className="grid gap-2 text-sm opacity-85 sm:grid-cols-2">
            {data.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-rose/80 flex-shrink-0"></span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}