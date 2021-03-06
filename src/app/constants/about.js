import EN from './translations/en';

export const NAME = {
  title: EN.portfolio.about.name,
  value: 'Edward Kim',
  icon: 'fa fa-id-badge',
  link: false,
};
export const EMAIL = {
  title: EN.portfolio.about.email,
  value: 'EdKim51191@gmail.com',
  icon: 'fa fa-envelope',
  link: false,
};
export const PHONE = {
  title: EN.portfolio.about.phone,
  value: '(443)-657-3448',
  icon: 'fa fa-mobile',
  link: false,
};
export const NATIONALITY = {
  title: EN.portfolio.about.nationality,
  value: 'United States',
  icon: 'fa fa-flag',
  link: false,
};
export const GIT = {
  title: EN.portfolio.about.git,
  value: 'https://github.com/Nauthiz-Jera/',
  icon: 'fa fa-github-alt',
  link: true,
};
export const LOCATION = {
  title: EN.portfolio.about.location,
  value: 'MD, USA (Willing to relocate)',
  icon: 'fa fa-globe',
  link: false,
};

export const ALL_ABOUT = [NAME, EMAIL, PHONE, NATIONALITY, LOCATION, GIT];
