var gulp = require('gulp'),
    tsc = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    nodemon = require('gulp-nodemon');

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

gulp.task('start', ['compile-ts', 'compile-angular-ts'], function () {
   nodemon({
        script: 'server/server.js',
        ext: 'ts',
        watch: ['server/**'],
        tasks: ['compile-ts'],
        // nodeArgs: ['--debug']
   });
});

gulp.task('default', ['start']);
