var gulp = require('gulp'), sass = require('gulp-sass'), watch = require('gulp-watch'), sourcemaps = require('gulp-sourcemaps');
;
gulp.task('default', function () {
    gulp.src('bower_components/angular/angular.min.js').pipe(gulp.dest('app/'));
    gulp.src('bower_components/angular/angular.min.js.map').pipe(gulp.dest('app/'));
    gulp.src('bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js').pipe(gulp.dest('app/'));
    //gulp.src('bower_components/bootstrap-sass/assets/stylesheets/bootstrap/**/*').pipe(gulp.dest('resources/sass/vendor/bootstrap/bootstrap'));
    //gulp.src('bower_components/bootstrap-sass/assets/stylesheets/_bootstrap.scss').pipe(gulp.dest('resources/sass/vendor/bootstrap/'));
    gulp.src('resources/sass/app.scss').pipe(sourcemaps.init()).pipe(sass()).pipe(sourcemaps.write()).pipe(gulp.dest('app/'));
});
gulp.task('watch', function () {
    watch('resources/sass/app.scss', function () {
        gulp.src('resources/sass/app.scss').pipe(sourcemaps.init()).pipe(sass()).pipe(sourcemaps.write()).pipe(gulp.dest('app/'));
    });
});