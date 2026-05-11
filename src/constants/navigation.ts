export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  PAGES: "/pages",
  CONTACT: "/contact",
};

export const NAVIGATION_LINKS = [
  {
    name: "Home",
    href: ROUTES.HOME,
    hasSubmenu: true,
  },
  {
    name: "About",
    href: ROUTES.ABOUT,
    hasSubmenu: false,
  },
  {
    name: "Pages",
    href: ROUTES.PAGES,
    hasSubmenu: true,
  },
  {
    name: "Contact",
    href: ROUTES.CONTACT,
    hasSubmenu: false,
  },
];
