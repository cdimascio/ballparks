import App from './config';
import express from 'express';
import Routes from './routes';

const expressApp = express();

App
  .initialize(
    expressApp,
    app => Routes.init(app))
  .listen();

export default expressApp;
