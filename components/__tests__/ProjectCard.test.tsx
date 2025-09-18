import {render, screen} from '@testing-library/react';
import ProjectCard from '../ProjectCard';

describe('ProjectCard', () => {
  it('renders title, year, role, summary, and tech tags', () => {
    render(
      <ProjectCard
        title="Demo"
        slug="demo"
        year="2025"
        role="Web"
        summary="Summary"
        tech={["React","TS"]}
        cover="/covers/cookbook.jpg"
        links={[{label:'Source', href:'https://example.com'}]}
      />
    );
    expect(screen.getByText('Demo')).toBeInTheDocument();
    expect(screen.getByText('2025')).toBeInTheDocument();
    expect(screen.getByText('Web')).toBeInTheDocument();
    expect(screen.getByText('Summary')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TS')).toBeInTheDocument();
    expect(screen.getByRole('img', {name: /demo/i})).toBeInTheDocument();
  });
});
