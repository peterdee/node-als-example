import app from './app.js';
import store from './store.js';

const PORT = Number(process.env.PORT) || 2121;

// wrap the application with the run() method
store.run(null, () => app.listen(
  PORT,
  (error) => {
    if (error) {
      throw error;
    }

    return console.log(`NODE-ALS-EXAMPLE is running on port ${PORT}`);
  },
));
