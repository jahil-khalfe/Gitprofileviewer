var gulp        = require('gulp'),
    plugins     = require('gulp-load-plugins')({}),
    runSequence = require('run-sequence'),
    browserSync = require('browser-sync').create(),
    inject      = require('gulp-inject'),
    config      = require('./package.json').config;

gulp.task('images', require('./gulp-tasks/images')(gulp, plugins, browserSync, config));
gulp.task('icons', require('./gulp-tasks/icons')(gulp, plugins, config, browserSync));
gulp.task('scss', require('./gulp-tasks/styles')(gulp, plugins, browserSync, config));
gulp.task('js', require('./gulp-tasks/javascript')(gulp, plugins, browserSync, config));
gulp.task('modernizr', require('./gulp-tasks/modernizr')(gulp, plugins, browserSync, config));

gulp.task('server', require('./gulp-tasks/server')(gulp, plugins, config, browserSync));
gulp.task('watch', require('./gulp-tasks/watch')(gulp, config));

gulp.task('inject', function () {
	var target = gulp.src('./index.html');
	// It's not necessary to read the files (will speed up things), we're only after their paths:
	var sources = gulp.src(['./dist/js/modernizr.js','./dist/js/bundle.js', './dist/css/all.css'], {read: false});
	
	return target.pipe(inject(sources))
		.pipe(gulp.dest('./'));
});

gulp.task('default', function (callback) {
	return runSequence('images', 'icons', 'scss', 'js', 'inject', 'modernizr', 'watch', 'server', callback)
});
