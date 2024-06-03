'use strict';

const
  chalk = require('chalk'),
  gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  clean = require('gulp-clean'),
  plumber = require('gulp-plumber'),
  sass = require('gulp-sass'),
  gulpif = require('gulp-if'),
  jshint = require('gulp-jshint'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  autoprefix = require('gulp-autoprefixer'),
  minifyCss = require('gulp-minify-css'),
  stylish = require('jshint-stylish'),
  merge = require('merge-stream'),
  sequence = require('run-sequence'),

  flags = require('minimist')(process.argv.slice(2)),
  isProduction = flags.production || flags.prod || false,
  watching = flags.watch || false
;

// BUILD ------------------------------------------------------------------------ //

const build = {
  securityCore: {
    name: 'security.bundle.js',
    dest: 'public/build/core'
  },
  securityWidget: {
    name: 'security.widget.js',
    dest: 'public/build/widget'
  },
  css: {
    name: 'security.widget.css',
    dest: 'public/build/widget'
  },
  fonts: {
    dest: 'public/fonts'
  },
  images: {
    dest: 'public/images'
  },
};

gulp.task('jshint', function () {
  return gulp.src([
    'resources/assets/js/*.js',
    'resources/assets/js/**/*.js',
  ])
    .pipe(plumber())
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter(stylish, {verbose: true}));
});

gulp.task('build', function (callback) {
  console.log(chalk.green('Building ' + (isProduction ? 'production' : 'dev') + ' version...'));

  if (flags.watch) {
    sequence(
      'clean',
      [
        'securityCore',
        'securityWidget',
        'css',
        'fonts',
        'images',
      ],
      'watch',
      function () {
        callback();
        console.log(chalk.green('Big brother is watching you...'))
      }
    )
  } else {
    sequence(
      'clean',
      [
        'securityCore',
        'securityWidget',
        'css',
        'fonts',
        'images',
      ],
      function () {
        callback();
        console.log(chalk.green('✔ All done!'))
      }
    )
  }
});

// CLEAN ------------------------------------------------------------------------ //

gulp.task('clean', function () {
  return gulp.src([
    'public/build/core',
    'public/build/widget',
    'public/build/fonts',
    'public/build/images',
  ])
    .pipe(clean());
});

// CSS ------------------------------------------------------------------------ //

gulp.task('css', function () {
  return gulp.src([
    'resources/assets/css/semantic.scss',
    'resources/assets/css/app.scss',
  ])
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat(build.css.name))
    .pipe(autoprefix('last 2 version', 'ie 8', 'ie 9'))
    .pipe(gulpif(isProduction, minifyCss({keepSpecialComments: 0})))
    .pipe(gulp.dest(build.css.dest))
    .pipe(gulpif(watching, browserSync.stream()));
});

// JS ------------------------------------------------------------------------ //
gulp.task('securityWidget', function () {
  const core = gulp.src([

  ])
    .pipe(plumber())
    .pipe(concat(build.securityWidget.name))
    .pipe(gulpif(isProduction, uglify()))
    .pipe(gulp.dest(build.securityWidget.dest));

  const vendor = gulp.src([


  ])
    .pipe(plumber())
    .pipe(concat(build.securityWidget.name))
    .pipe(gulpif(isProduction, uglify()))
    .pipe(gulp.dest(build.securityWidget.dest));

  return merge(core, vendor);
});
gulp.task('securityCore', function () {
  const core = gulp.src([
    'node_modules/crypto-js/crypto-js.js',
    'node_modules/js-sha256/build/sha256.min.js',
    'resources/assets/vendor/sweetalert/sweetalert.min.js',
    'resources/assets/vendor/jquery-3.1.1/js/jquery-3.1.1.min.js',
    'resources/assets/js/core/fingerprint.obfuscated.js',

    'resources/assets/js/core/core.js',
    'resources/assets/js/core/modules/init.js',
    'resources/assets/js/core/modules/fingerprint.js',
    'resources/assets/js/core/modules/logging.js',
    'resources/assets/js/core/modules/dev_tools_detect.js',
  ])
    .pipe(plumber())
    .pipe(concat(build.securityCore.name))
    .pipe(gulpif(isProduction, uglify()))
    .pipe(gulp.dest(build.securityCore.dest));

  const vendor = gulp.src([])
    .pipe(plumber())
    .pipe(concat(build.securityCore.name))
    .pipe(gulpif(isProduction, uglify()))
    .pipe(gulp.dest(build.securityCore.dest));

  return merge(vendor, core);
});

/* Copy Fonts */
gulp.task('fonts', (cb) => {
  gulp.src('resources/assets/fonts/*')
    .pipe(plumber())
    .pipe(gulp.dest(build.fonts.dest));
  cb();
});

/* Copy Images */
gulp.task('images', (cb) => {
  gulp.src('resources/assets/img/*')
    .pipe(plumber())
    .pipe(gulp.dest(build.images.dest));
  cb();
});

// WATCH ------------------------------------------------------------------------ //
gulp.task('watch', function () {
  // Watch .css files
  gulp.watch('resources/assets/*/css/*.css', ['css']);
  gulp.watch('resources/assets/*/css/*.styl', ['css']);
  gulp.watch('resources/assets/*/css/*/*.styl', ['css']);
  gulp.watch('resources/assets/*/css/*/*/*.styl', ['css']);
  gulp.watch('resources/assets/*/css/*/*/*/*.styl', ['css']);

  // Watch .js files
  gulp.watch('resources/assets/*/js/**/*.js', ['js']);
});

// DEFAULT ---------------------------------------------------------------------- //
gulp.task('default', function () {
  gulp.start('build');
});
