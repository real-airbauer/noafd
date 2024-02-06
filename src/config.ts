import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://noafd.world",
  author: "noAfD",
  desc: "Stop the AfD, NOW!",
  title: "no AfD",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["de-DE"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/real-airbauer/noafd",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:kontakt@noafd.world",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/noafd_world",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "TikTok",
    href: "https://github.com/",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://github.com/",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://github.com/",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://github.com/",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://github.com/",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://github.com/",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
];
