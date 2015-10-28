import path from 'path';
import glob from 'glob';
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
const router = new express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/public/index.html'));
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/__build__'));
app.use(express.static(path.join(__dirname, '../src/public')));

for (let route of routeFiles()) {
    app.use('/api', require(route));
}
app.use('/', router);

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

function routeFiles() {
    var files = glob.sync('server/routes/**/*.js');
    var output = [];
    files.forEach((file) => {
        output.push(file.replace("server", ".").replace(".js", ""));
    });
    return output;
}