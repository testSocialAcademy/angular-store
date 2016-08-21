const gulp = require('gulp');
const babel = require('gulp-babel');
const concatCss = require('gulp-concat-css');
const concat = require('gulp-concat');

gulp.task('js combine', () => {
    return gulp.src('app/pages/**/js/scripts/*.js')
        .pipe(concat('all.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('app/js/'));
});

gulp.task('css combine', () => {
    return gulp.src('app/pages/**/css/*.css')
        .pipe(concatCss("main.css"))
        .pipe(gulp.dest('app/css/'));
});

gulp.task('build',['css combine', 'js combine']);

gulp.task('watch', () => {
    gulp.watch('./app/pages/**/js/scripts/*.js', ['js combine']);
    gulp.watch('./app/pages/**/css/*.css', ['css combine']);
});