import path = require('path');
import * as glob from 'glob';
import express = require('express');
import * as bodyParser from 'body-parser';
import cookieParser = require('cookie-parser');
import * as logger from 'morgan';
import * as mongoose from 'mongoose';
const config = require('../webpack.config.js');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');

const isDeveloping: boolean = process.env.NODE_ENV !== 'production';
const port: number = isDeveloping ? 3000 : process.env.PORT;
const app: express.Express = express();
const router: express.Router = express.Router();

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
}

mongoose.connect('mongodb://localhost:27017/angular2');

app.listen(port, 'localhost', (err) => {
    if (err) {
        console.log(err);
    }
    console.info('==> 🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});

function routeFiles(): Array<string> {
    var files = glob.sync('server/routes/**/*.js');
    var output: Array<string> = [];
    files.forEach((file) => {
        output.push(file.replace("server", "."));
    });
    return output;
}