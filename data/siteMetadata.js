/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'AfD steht für Faschismus!',
  author: 'noAfD',
  headerTitle: 'noAfD',
  description: 'Eine Unabhängige Seite die aufzeigen will, wie Faschistisch die AfD ist.',
  language: 'de-de',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://noafd.world/',
  siteRepo: 'https://github.com/real-airbauer/noafd',
  siteLogo: '/static/images/logo.png',
  socialBanner: '/static/images/twitter-card.png',
  mastodon: 'https://mastodon.social/@airbauer',
  email: 'kontakt@noafd.world',
  github: 'https://github.com/real-airbauer',
  twitter: 'https://twitter.com/real_airbauer',
  locale: 'de-de',

  newsletter: {
    provider: 'buttondown',
  },
  comments: {
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
      // This corresponds to the `data-lang="en"` in giscus's configurations
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Public API key: it is safe to commit it
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}

module.exports = siteMetadata
