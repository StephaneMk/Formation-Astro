import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Stéphane KINYOK | Blog informatique',
    description:
      "Mes articles sur l'informatique, l'analyse de données et les systèmes d'information.",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./posts/*.md')),
    customData: '<language>fr-fr</language>',
  });
}
