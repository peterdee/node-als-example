import store from '../store.js';

export default (request, response) => {
  // get request ID from the store
  const { id } = store.getStore();

  return response.status(200).send({
    id,
    info: 'OK',
  });
};
