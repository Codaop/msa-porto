import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

export const collections = {
  projects: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
    schema: z.object({
      title: z.string(),
      category: z.enum(['software', 'design', 'media']),
      role: z.string(),
      tech: z.array(z.string()),
      type: z.enum(['team', 'individual']),
      link: z.string().url().optional(),
      source: z.string().url().optional(),
      summary: z.string(),
      images: z.array(z.string()),
      date: z.string(),
      featured: z.boolean().default(false),
    }),
  }),
};
