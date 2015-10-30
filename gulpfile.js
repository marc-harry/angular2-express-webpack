var gulp = require('gulp'),
    tsc = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    webpack = require('webpack-stream'),
    runSequence = require('run-sequence'),
    config = require('./webpack.config.js'),
    gls = require('gulp-live-server');

gulp.task('compile-ts', function() {
    return gulp.src(['server/**/*.ts', 'typings/**/*.ts'])
        .pipe(sourcemaps.init())
        .pipe(tsc({
            target: 'ES5',
            module: 'commonjs',
            declaration: false,
            noImplicitAny: false,
            removeComments: true,
            noLib: false,
            emitDecoratorMetadata: true,
            experimentalDecorators: true
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('server'));
});

gulp.task('webpack', function() {
    return gulp.src('src')
        .pipe(webpack(config))
        .pipe(gulp.dest(config.output.path));
});


gulp.task('watch', function() {
    gulp.watch(['src/**/*.ts'], ['webpack']);
    gulp.watch(['server/**/*.ts'], ['compile-ts']);

});

gulp.task('serve', ['compile-ts'], function() {
    var server = gls.new('server/server.js');
    server.start();
});

gulp.task('default', ['serve', 'compile-ts', 'webpack', 'watch']);
