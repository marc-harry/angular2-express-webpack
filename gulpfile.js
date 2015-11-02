var gulp = require('gulp'),
    tsc = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    nodemon = require('gulp-nodemon'),
    webpack = require('webpack-stream');

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
            { test: /\.scss$/, loader: 'style!css!sass' },
        ],
    },
    output: {
        filename: 'app.js'
    }
};


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

gulp.task('webpack-app', ['compile-angular-ts'], function () {
    return gulp.src('src/app/app.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('src/public/__build__'));
});

gulp.task('webpack-all', function () {
    return gulp.src('src/app/app.ts')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('src/public/__build__'));
});

gulp.task('watch', function() {
    gulp.watch('src/app/**/*.ts', ['webpack-app']);
});

gulp.task('start', ['compile-ts'], function () {
   nodemon({
        script: 'server/server.js',
        ext: 'ts',
        watch: ['server/**/*.ts'],
        tasks: ['compile-ts'],
        // nodeArgs: ['--debug']
   });
});


gulp.task('default', ['webpack-all', 'start', 'watch']);
