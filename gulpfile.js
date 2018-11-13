// gulp
var gulp = require('gulp');

// plugins
var clean = require('gulp-clean');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');

// tasks
gulp.task('clean', function () {
  gulp.src('./dist/*')
    .pipe(clean({ force: true }));
});

gulp.task('minify-css', function () {
  var opts = { comments: true, spare: true };
  gulp.src(['./app/**/*.css', '!./app/lib/**'])
    .pipe(minifyCSS(opts))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('minify-js', function () {
  gulp.src(['./app/**/*.js', '!./app/lib/**'])
    .pipe(uglify({mangle:false}))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('copy-node-modules', function () {
  gulp.src(["./app/**//angular/angular.min.js",
    "./app/**//angular-animate/angular-animate.min.js",
    "./app/**//angular-aria/angular-aria.min.js",
    "./app/**//angular-ui-router/release/angular-ui-router.min.js",
    "./app/**//angular-messages/angular-messages.min.js",
    "./app/**//oclazyload/dist/ocLazyLoad.min.js",
    "./app/**//angular-material/angular-material.min.js",
    "./app/**//angular-material/angular-material.css"])
    .pipe(gulp.dest('./dist/./'));
});

gulp.task('copy-html-files', function () {
  gulp.src(['./app/**/*.html', '!./app/lib/**'])
    .pipe(gulp.dest('./dist/'));
});

gulp.task('copy-image-files', function () {
  gulp.src('./app/style/images/*.*')
    .pipe(gulp.dest('./dist/style/images'));
});

gulp.task('build', function () {
  runSequence(
    ['minify-css', 'minify-js', 'copy-html-files', 'copy-node-modules', 'copy-image-files']
  );
});