import '@testing-library/jest-dom/vitest';
import {afterEach, vi} from 'vitest';
import {cleanup} from '@testing-library/react';
import React from 'react';

afterEach(() => {
  cleanup();
});

// --- Polyfills ที่เจอบ่อยใน JSDOM ---
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),            // deprecated แต่บาง lib ยังเรียก
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn()
  }))
});

// (ทางเลือก) ResizeObserver ถ้า UI ใช้
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
;(window as any).ResizeObserver = ResizeObserver;

vi.mock('next/image', () => ({
  __esModule: true,
  // ใช้ <img> ธรรมดาให้ Testing Library จับได้ง่าย
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return React.createElement('img', props);
  }
}));
;

// Next.js navigation (ถ้าใช้ App Router)
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn()
  }),
  usePathname: () => '/th',
  useSearchParams: () => new URLSearchParams()
}));

// next-intl (client) – ให้ทำงานได้แม้ไม่มีไฟล์ข้อความจริง
vi.mock('next-intl/client', () => ({
  useLocale: () => 'th',
  usePathname: () => '/th',
  useRouter: () => ({replace: vi.fn()}),
  useTranslations: () => {
    // คืนฟังก์ชันที่ echo key ออกมาเพื่อเทสต์ง่าย ๆ
    return (key: string, values?: Record<string, unknown>) =>
      values ? `${key} ${JSON.stringify(values)}` : key;
  }
}));

// (ทางเลือก) ถ้าใช้ next/font ในคอมโพเนนต์
vi.mock('next/font/google', () => ({
  // คืน object ที่มี className ให้เอาไปแปะได้
  Roboto: () => ({className: 'font-roboto'})
}));
