
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var run = require('run-sequence');




gulp.task('dist1', ()=> {
  var srcJS = './index.js';
  var dest  = './dist/';

  return gulp.src(srcJS)
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(gulp.dest(dest));
});

gulp.task('dist2', ()=> {
  var srcJS = './lib/*.js';
  var dest  = './dist/lib/';

  return gulp.src(srcJS)
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(gulp.dest(dest));
});

gulp.task('default', ()=> {
  return run('dist1', 'dist2');
});
