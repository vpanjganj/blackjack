var gulp = require('gulp'), sass = require('gulp-sass'), watch = require('gulp-watch'), sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'), autoprefixer = require('gulp-autoprefixer'), del = require('del');


var paths = {
    libs: ['bower_components/angular/angular.min.js', 'bower_components/angular/angular.min.js.map', 'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js'],
    images: 'src/images/*',
    scripts: 'src/js/**/*.js',
    views: 'src/views/*.html',
    sass: 'src/sass/app.scss'
};


gulp.task('clean', function (cb) {
    del([
        // here we use a globbing pattern to match everything inside the `build` folder
        'build'
    ], cb);
});

gulp.task('images', function () {
    return gulp.src(paths.images).pipe(gulp.dest('build/images'));
});


gulp.task('views', function () {
    return gulp.src(paths.views).pipe(gulp.dest('build/'));
});


gulp.task('scripts', function () {
    return gulp.src(paths.scripts).pipe(concat('app.js')).pipe(gulp.dest('build/'));
});


gulp.task('sass', function () {
    return gulp.src(paths.sass).pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    })).pipe(sourcemaps.init()).pipe(sass()).pipe(sourcemaps.write()).pipe(gulp.dest('build/'));
});


gulp.task('libs', function () {
    return gulp.src(paths.libs).pipe(gulp.dest('build/'));

});

gulp.task('watch', function () {

    gulp.watch([paths.sass,paths.scripts,paths.views], ['default']);



});

gulp.task('default', ['images', 'scripts', 'views', 'sass', 'libs']);



