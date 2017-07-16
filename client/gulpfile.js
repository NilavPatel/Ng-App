(function () {

    var gulp = require('gulp');
    var clean = require('gulp-clean');
    var minify = require('gulp-minify');

    gulp.task('default', ['clean', 'copy-html']);

    gulp.task('clean', function () {
        return gulp.src('./dist')
            .pipe(clean());
    });

    gulp.task('copy-html', function () {
        return gulp.src(['./**/*.html',
            '!./node_modules/**/*.html'])
            .pipe(gulp.dest('./dist'));
    });

    gulp.task('minify-js', function () {
        return gulp.src(['./**/*.js', '!./node_modules/**/*.js'])
            .pipe(minify({
                ext: {
                    min: '.min.js'
                }, noSource: true
            }))
            .pipe(gulp.dest('./dist'));
    });

})();