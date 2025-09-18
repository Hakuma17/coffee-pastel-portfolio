export function personJsonLd({name,email,location}:{name:string;email:string;location:string}) {
  return {
    '@context':'https://schema.org',
    '@type':'Person',
    name, email, address: location,
    url: 'https://your-domain.com'
  };
}
