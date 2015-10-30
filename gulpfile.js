var gulp = require('gulp'),
    tsc = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    tslint = require('gulp-tslint');
    nodemon = require('gulp-nodemon');

gulp.task('compile-ts', function () {
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
 
gulp.task('tslint', function() {
    gulp.src(['src/**/*.ts'])
        .pipe(tslint())
        .pipe(tslint.report('prose', {
          emitError: false
        }));
});

gulp.task('start', ['compile-ts', "tslint"], function () {
   nodemon({
        script: 'server/server.js',
        ext: 'ts',
        watch: ['server/**'],
        tasks: ['compile-ts', 'tslint'],
        nodeArgs: ['--debug']
   });
});

gulp.task('default', ['start']);
