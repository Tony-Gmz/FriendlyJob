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

export const changeTitle = (name) => {
  if (name === 'demenagement') {
    return name.replace('demenagement', 'déménagement');
  }
  if (name === 'garde-danimaux') {
    return name.replace('garde-danimaux', "garde d'animaux");
  }
  if (name === 'aide-a-la-personne') {
    return name.replace('aide-a-la-personne', "aide à la personne");
  }
  if (name === 'soutien-scolaire') {
    return name.replace('soutien-scolaire', 'soutien scolaire');
  }
  else {
    return name;
  }
};

export const capitalize = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};


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

/**
 * Get the service for a given slug
 * @param {Array} jobWorkers randomJobWorker into which searching the random'information
 * @param {String} slug Slug to search for
 */
export const getJobWorkerBySlug = (jobWorkers, slug) => (
  jobWorkers.find((currentJobWorker) => currentJobWorker.user.id == slug)
);

/**
 * Change date format for the component DateTimePicker
 * @param {string} requestDate 
 */
export const changeDateFormat = (requestDate) => {
  const years = requestDate.slice(0, 4);
  // console.log(years);
  const month = requestDate.slice(5, 7);
  // console.log(month);
  const day = requestDate.slice(8, 10);
  // console.log(day);
  // const days = requestDate.getDate();
  // const newRequestDate= `${month}/${days}/${years}`;
  // console.log(newRequestDate);
  requestDate = `${month}/${day}/${years}`;
  return requestDate;
};

export const changeDateEditFormat = (requestDate) => {
  const years = requestDate.slice(7, 10);
  // console.log(years);
  const month = requestDate.slice(4, 6);
  // console.log(month);
  const day = requestDate.slice(0, 2);
  //console.log(day);
  // const days = requestDate.getDate();
  // const newRequestDate= `${month}/${days}/${years}`;
  // console.log(newRequestDate);
  requestDate = `${month}/${day}/${years}`;
  return requestDate;
};


