import { Head } from 'vite-react-ssg';

const SITE_NAME = 'Jeremy Cabral';
const DEFAULT_DESCRIPTION =
  'Bootstrapped to $100M+ in revenue. Growth playbooks, AI execution systems, and advisory for founders scaling to $100M+.';
const BASE_URL = 'https://www.jeremycabral.com';

type SeoProps = {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  noindex?: boolean;
};

export function Seo({ title, description, path, image, noindex }: SeoProps) {
  const resolvedDescription = description ?? DEFAULT_DESCRIPTION;
  const url = path ? `${BASE_URL}${path}` : BASE_URL;
  const imageUrl = image
    ? image.startsWith('http')
      ? image
      : `${BASE_URL}${image}`
    : undefined;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={resolvedDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      <meta name="twitter:card" content={imageUrl ? 'summary_large_image' : 'summary'} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}
    </Head>
  );
}
