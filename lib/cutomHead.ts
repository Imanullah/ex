interface IHeading {
  title?: string | ComputedRef<string>;
  description?: string | ComputedRef<string>;
  image?: string | ComputedRef<string>;
  sitename?: string | ComputedRef<string>;
  title_sitename?: string | ComputedRef<string>;
  index?: boolean | ComputedRef<boolean> | null;
}

export const useCustomHead = (fn: IHeading) => {
  let { site } = useAppConfig();
  let toIndex = fn.index ?? true;
  let checkTitleSitename = fn.title_sitename ?? false;

  useHead({
    title: fn.title ?? appConfig.site.title,
    titleTemplate: (title): string => (checkTitleSitename ? `${title} | ${fn.title_sitename}` : title),
    meta: [
      { name: 'description', content: fn.description ?? site.description },
      { name: 'robots', content: toIndex ? 'all' : 'noindex, nofollow' },

      { name: 'twitter:image', content: fn.image ?? `${useUrl()}/${site.main_logo}` },
      { name: 'twitter:description', content: fn.description ?? site.description },
      { name: 'twitter:url', content: useUrl() },
      { property: 'og:title', content: fn.title ?? site.title },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: fn.sitename ?? site.site_name },
      { property: 'og:image', content: fn.image ?? `${useUrl()}/${site.main_logo}` },
      { property: 'og:url', content: useUrl() },

      { name: 'msapplication-TileColor', content: '#8389FF' },
      { name: 'msapplication-TileImage', content: `${useUrl()}/${site.main_logo}` },
      { name: 'msapplication-starturl', content: useUrl() },
      { name: 'msapplication-task', hid: 'msapplication-task', content: 'name=Home; action-uri=' + `${useUrl()}` + '; icon-uri=' + `${useUrl()}/favicon.ico` + ';' },
      { name: 'msapplication-task', hid: 'msapplication-task-news', content: 'name=news; action-uri=' + `${useUrl()}` + '; icon-uri=' + `${useUrl()}/favicon.ico` + ';' },
    ],
  });
};
