/*
permet d'obtenir un slug à partir d'une chaîne de caractères => chaîne de
caractères simplifiée, qui passera bien comme URL (notamment remplacement des
espaces par des tirets)
*/
import slugify from 'slugify';

export const slugifyTitle = (title) => (
  slugify(title, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
  })
);

export const whitoutAvatar = (name) => (
  name.substr(0, 1)
);

/**
 * Get the service for a given slug
 * @param {Array} serviceList serviceList into which searching the service
 * @param {String} slug Slug to search for
 */
export const getServiceBySlug = (serviceList, slug) => (
  serviceList.find((currentService) => slugifyTitle(currentService.title) === slug)
);
