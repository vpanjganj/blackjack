var gulp = require('gulp'), sass = require('gulp-sass'), watch = require('gulp-watch'), sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'), autoprefixer = require('gulp-autoprefixer');


gulp.task('default', function () {
    gulp.src('bower_components/angular/angular.min.js').pipe(gulp.dest('build/'));
    gulp.src('bower_components/angular/angular.min.js.map').pipe(gulp.dest('build/'));
    gulp.src('bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js').pipe(gulp.dest('build/'));
    gulp.src('src/images/*').pipe(gulp.dest('build/images'));
    gulp.src('src/views/*.html').pipe(gulp.dest('build/'));
    gulp.src('src/js/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('build/'));
    gulp.src('src/sass/app.scss').pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    })).pipe(sourcemaps.init()).pipe(sass()).pipe(sourcemaps.write()).pipe(gulp.dest('build/'));
});
gulp.task('watch', function () {
    watch('src/sass/app.scss', function () {
        gulp.src('src/sass/app.scss').pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        })).pipe(sourcemaps.init()).pipe(sass()).pipe(sourcemaps.write()).pipe(gulp.dest('build/'));  });
    watch('src/js/*.js', function () {
        gulp.src('src/js/*.js')
            .pipe(concat('app.js'))
            .pipe(gulp.dest('build/')) });
    watch('src/views/*.html', function () {
        gulp.src('src/views/*.html').pipe(gulp.dest('build/')); });
});

