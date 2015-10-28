import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import bodyParser from 'body-parser';
import cookieParser  from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import config from '../webpack.config.js';

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();
const router = express.Router();

import index from './routes/index';
//import people from './routes/people';

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/__build__'));
app.use(express.static(path.join(__dirname, '../src/public')));

app.use('/api', require('./routes/people'));
app.use('/', index);

if (isDeveloping) {
    const compiler = webpack(config);

    app.use(webpackMiddleware(compiler, {
        publicPath: config.output.publicPath,
        contentBase: 'src',
        stats: {
            colors: true
        }
    }));

    app.use(webpackHotMiddleware(compiler));
}

mongoose.connect('mongodb://localhost:27017/angular2');

app.listen(port, 'localhost', (err) => {
    if (err) {
        console.log(err);
    }
    console.info('==> 🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});