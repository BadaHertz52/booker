import { MetadataRoute } from 'next';

const PRO_URL = 'https://booker-production-badahertz52s-projects.vercel.app';

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: PRO_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ];
};

export default sitemap;
