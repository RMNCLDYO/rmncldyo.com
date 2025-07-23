export const SITE = {
  website: "https://rmncldyo.com",
  author: "RMNCLDYO",
  profile: "https://rmncldyo.com",
  desc: "Software Engineer",
  title: "RMNCLDYO",
  ogImage: "rmncldyo-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 20,
  postPerPage: 20,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/rmncldyo/rmncldyo.com/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Bangkok", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
