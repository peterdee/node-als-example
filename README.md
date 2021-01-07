## node-als-example

An example of how the [Async Local Storage (ALS)](https://nodejs.org/api/async_hooks.html#async_hooks_class_asynclocalstorage) from [`async_hooks`](https://nodejs.org/api/async_hooks.html) can be utilized.

The application is a basic [Express](http://expressjs.com) server that writes data into the ALS in the middleware and then reads data from ALS in the API handler.

### Deploy

```shell script
git clone https://github.com/peterdee/node-als-example
cd ./node-als-example
nvm use 14
npm i
```

### Launch

```shell script
npm start
```

The app will be launched at http://localhost:2121, a different port can be specified with the `PORT` environment variable.

### APIs

- `/` - `[GET]` - get a response with a unique identifier
- `/delayed` - `[GET]` - get delayed response (accessing ALS inside the `setTimeout`)

### Tests

```shell script
npm run test
```

### Linting

```shell script
npm run lint
```

### License

[MIT](LICENSE)
