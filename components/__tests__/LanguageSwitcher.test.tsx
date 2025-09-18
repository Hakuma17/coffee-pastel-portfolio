import {render, screen, fireEvent} from '@testing-library/react';
import LanguageSwitcher from '../LanguageSwitcher';
import {vi} from 'vitest';

const replace = vi.fn();
vi.mock('next/navigation', () => ({ usePathname: () => '/th', useRouter: () => ({ replace }) }));

describe('LanguageSwitcher', () => {
  it('toggles locale and calls router.replace with target locale', () => {
    render(<LanguageSwitcher/>);
    const btn = screen.getByRole('button', {name: /switch language/i});
    fireEvent.click(btn);
    expect(replace).toHaveBeenCalledTimes(1);
    expect(replace).toHaveBeenCalledWith('/en');
  });
});
