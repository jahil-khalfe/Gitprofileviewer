module.exports = function(gulp, plugins, browserSync, config) {
  return function() {
    return gulp.src(config.src + 'js/main.js')
      .pipe(plugins.webpack(require('../webpack.config.js')))
      .pipe(gulp.dest('./dist/js'))
      .pipe(browserSync.stream());
  };
};
