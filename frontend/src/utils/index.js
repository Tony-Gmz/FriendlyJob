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

/**
 * Get the service for a given slug
 * @param {Array} serviceList serviceList into which searching the service
 * @param {String} slug Slug to search for
 */
export const getServiceBySlug = (serviceList, slug) => (
  serviceList.find((currentService) => slugifyTitle(currentService.title) === slug)
);


export const slugifyId = (id) => (
  slugify(id)
);

/**
 * Get the service for a given slug
 * @param {Array} randomJobWorker randomJobWorker into which searching the random'information
 * @param {String} slug Slug to search for
 */
export const getRandomJobWorkerBySlug = (randomJobWorker, slug) => (
  randomJobWorker.find((currentJobWorker) => slugifyId(currentJobWorker.id) === slug)
);
