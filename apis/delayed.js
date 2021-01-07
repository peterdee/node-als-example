import store from '../store.js';

export default (request, response) => setTimeout(
  () => response.status(200).send({
    id: store.getStore().id,
    info: 'OK',
  }),
  5000,
);
