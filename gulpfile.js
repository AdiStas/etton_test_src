var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var csso = require('gulp-csso');
var rename = require("gulp-rename");

gulp.task('style', function () { 
	return gulp.src("src/scss/style.scss") 
		.pipe(plumber())
		.pipe(sass()) 
		.pipe(postcss([
			autoprefixer()
		]))
		.pipe(gulp.dest('./build/css')) 
		.pipe(browserSync.stream())
		.pipe(csso())
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest('./build/css'));
});

gulp.task('serve', gulp.series('style', function() {
    browserSync.init({
        server: "./src"
    });

    gulp.watch("src/scss/**/*.scss", gulp.series('style'));
	gulp.watch("./*.html").on('change', browserSync.reload);
	gulp.watch("src/js/**/*.js").on('change', browserSync.reload);
}));

gulp.task('copy', function() {
	return gulp.src([
		'./src/img/**',
		'./src/js/**',
		'./src/fonts/**/*.{woff,woff2}',
		'./src/*.html'
		], {
			base: './src'
		})
		.pipe(gulp.dest('build'));
});

gulp.task('build', gulp.series('style', 'copy'));


