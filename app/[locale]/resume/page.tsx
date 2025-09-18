import Section from '@/components/Section';
import {tHome} from '@/lib/i18n';

export default async function ResumePage({params:{locale}}:{params:{locale:'th'|'en'}}) {
  const data = await tHome(locale);
  const pdf = locale === 'th' ? data.about.resumeTh : data.about.resumeEn;
  return (
    <Section title={locale === 'th' ? 'เรซูเม่' : 'Resume'}>
      <div className="space-y-3">
        <div className="aspect-[3/4] w-full overflow-hidden rounded-xl border bg-white">
          <iframe title="resume" src={pdf} className="h-full w-full" />
        </div>
        <a href={pdf} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-coffee px-4 py-2 text-white shadow-soft">
          {locale === 'th' ? 'เปิดไฟล์เต็ม' : 'Open full file'}
        </a>
      </div>
    </Section>
  );
}
