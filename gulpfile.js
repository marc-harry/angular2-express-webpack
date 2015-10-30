var gulp = require('gulp'),
    tsc = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    tslint = require('gulp-tslint'),
    server = require('tiny-lr')(),
    refresh = require('gulp-livereload'),
    wait = require('gulp-wait'),
    nodemon = require('gulp-nodemon'),
    lrPort = 35729;

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

gulp.task('tslint', function() {
    gulp.src(['src/**/*.ts'])
        .pipe(tslint())
        .pipe(tslint.report('prose', {
            emitError: false
        }));
});

gulp.task('build', ['compile-ts']);



gulp.task('lr', function(){
  server.listen(lrPort, function(err){
    if(err) {return console.error(err);}

   gulp.watch('src/**/*.ts', function (e) {
      gulp.src('src/**/*.ts')
        .pipe(wait(3000))
        .pipe(refresh(server));
    });

  });
});

gulp.task('start', ['compile-ts'], function() {
    nodemon({
        script: 'server/server.js',
        ext: 'ts',
        nodeArgs: ['--debug']
    });
});

gulp.task('default', ['build', 'start', 'lr']);
