import cuid from 'cuid';

import store from '../store.js';

export default (request, response, next) => {
  // generate ID
  const id = cuid.slug();

  // store ID in the ALS and proceed
  store.enterWith({ id });
  return next();
};
