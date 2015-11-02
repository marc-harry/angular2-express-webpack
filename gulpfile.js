var gulp = require('gulp'),
    tsc = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    webpack = require('webpack-stream'),
    runSequence = require('run-sequence'),
    config = require('./webpack.config.js'),
    gls = require('gulp-live-server');

var tsconfig = {
    target: 'ES5',
    module: 'commonjs',
    declaration: false,
    noImplicitAny: false,
    removeComments: true,
    noLib: false,
    emitDecoratorMetadata: true,
    experimentalDecorators: true
};

var webpackConfig = {
    devtool: 'source-map',
    debug: true,
    cache: true,
    module: {
        loaders: [
            { test: /\.scss$/, loader: 'style!css!sass' }
        ],
    },
    output: {
        filename: 'app.js'
    }
};

var server = null;

gulp.task('compile-ts', function () {
    return gulp.src(['server/**/*.ts', 'typings/**/*.ts'])
        .pipe(sourcemaps.init())
        .pipe(tsc(tsconfig))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('server'));
});

gulp.task('compile-angular-ts', function () {
    return gulp.src(['src/app/**/*.ts', 'typings/**/*.ts'])
        .pipe(sourcemaps.init())
        .pipe(tsc(tsconfig))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('src/app'));
});

gulp.task('webpack', function() {
    return gulp.src('src')
        .pipe(webpack(config))
        .pipe(gulp.dest(config.output.path));
});

gulp.task('webpack-app', ['compile-angular-ts'], function () {
    return gulp.src('src/app/app.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('src/public/__build__'));
});

gulp.task('watch', function() {
    gulp.watch(['src/**/*.ts'], ['webpack-app']);
    gulp.watch(['server/**/*.ts'], ['compile-ts']);
    gulp.watch(['src/public/**/*.js'], function (file) {
        if (server) {
            server.notify.apply(server, [file]);
        }
    });
});

gulp.task('serve', ['compile-ts'], function() {
    server = gls.new('server/server.js');
    server.start();
});

gulp.task('default', ['serve', 'compile-ts', 'webpack', 'watch']);
