
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var run = require('run-sequence');
var webpack = require('webpack');
var gulpWebpack = require('gulp-webpack');
var elemsJS = require('gulp-elementsJS-interpreter');


const webpackConfig = {
  entry: './dist/babel/elementsJSIO.js',
  output: {
    filename: './elementsJSIO.js'
  }
};

gulp.task('elemsJSIO-elemsJS-Babel', ()=> {
  var srcJS = ['./js/elementsJSIO.js', './js/sideNavControl.js'];
  var jsDst  = './dist/babel/';

  return gulp.src(srcJS)
    .pipe(elemsJS())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(jsDst));
});

gulp.task('elemsJSIO-Bundle', ()=> {
  var compiler = gulpWebpack(webpackConfig, webpack),
         jsSrc = './dist/babel/elementsJSIO.js',
         jsDst = './'
  return gulp.src(jsSrc)
    .pipe(compiler)
    .pipe(gulp.dest(jsDst));
});

gulp.task('elemsJSIO', ()=> {
  return run('elemsJSIO-elemsJS-Babel', 'elemsJSIO-Bundle');
});


gulp.task('dist1', ()=> {
  var srcJS = './index.js';
  var dest  = './dist/';

  return gulp.src(srcJS)
    .pipe(babel({
      presets: ['es2015']
    }))
    // .pipe(uglify())
    .pipe(gulp.dest(dest));
});

gulp.task('dist2', ()=> {
  var srcJS = './lib/*.js';
  var dest  = './dist/lib/';

  return gulp.src(srcJS)
    .pipe(babel({
      presets: ['es2015']
    }))
    // .pipe(uglify())
    .pipe(gulp.dest(dest));
});

gulp.task('default', ()=> {
  return run('dist1', 'dist2');
});
