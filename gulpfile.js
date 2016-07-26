
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var run = require('run-sequence');
var webpack = require('webpack');
var gulpWebpack = require('gulp-webpack');
var elemsJS = require('gulp-elementsjs-interpreter');


const webpackConfig = {
  entry: './dist/babel/elementsJSIO.js',
  output: {
    filename: './elementsJSIO.js'
  }
};

const webpackConfig2 = {
  entry: './dist/babel/elementsJSLibTests.js',
  output: {
    filename: './elementsJSLibTests.js'
  }
};

const webpackConfig3 = {
  entry: './dist/index.js',
  output: {
    filename: 'elements.js'
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

gulp.task('elementsJSLibTests-elemsJS-Babel', ()=> {
  var srcJS = ['./lib/test/elementsJSLibTests.js'];
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

gulp.task('elementsJSLibTests-Bundle', ()=> {
  var compiler = gulpWebpack(webpackConfig2, webpack),
         jsSrc = './dist/babel/elementsJSLibTests.js',
         jsDst = './dist/lib/test/'
  return gulp.src(jsSrc)
    .pipe(compiler)
    .pipe(gulp.dest(jsDst));
});


gulp.task('elemsJSIO', ()=> {
  return run('elementsJSLibTests-elemsJS-Babel', 'elemsJSIO-elemsJS-Babel', 'elemsJSIO-Bundle');
});

//Babelify eJS index.js
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
//Babelify the eJS library
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
//Bundle the library for such purposes that would require it.
gulp.task('elementsJSLib-Bundle', ()=> {
  var compiler = gulpWebpack(webpackConfig3, webpack),
         srcJS = './dist/index.js',
          dest = './test/';
  return gulp.src(srcJS)
    .pipe(compiler)
    .pipe(gulp.dest(dest));
})
gulp.task('default', ()=> {
  return run('dist1', 'dist2', 'elementsJSLib-Bundle');
});
