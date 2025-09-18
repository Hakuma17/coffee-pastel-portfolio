'use client';
import {usePathname, useRouter} from 'next/navigation';
import {useTransition} from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [pending, start] = useTransition();
  const current = (pathname?.split('/')[1] === 'en') ? 'en' : 'th';
  const target = current === 'th' ? 'en' : 'th';

  return (
    <button
      aria-label="Switch language"
      disabled={pending}
      onClick={() =>
        start(() => {
          const segments = pathname.split('/');
          if (segments.length > 1) {
            segments[1] = target;
          } else {
            segments.push(target);
          }
          router.replace(segments.join('/'));
        })
      }
      className="rounded-full bg-coffee px-4 py-2 text-white shadow-soft hover:opacity-95 disabled:opacity-60"
      type="button"
    >
      {target.toUpperCase()}
    </button>
  );
}
