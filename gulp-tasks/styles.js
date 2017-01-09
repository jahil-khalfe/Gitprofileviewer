var moduleImporter = require('sass-module-importer');

module.exports = function(gulp, plugins, browserSync, config) {
  return function() {
    return gulp.src(config.src + 'scss/**/*.scss')
      .pipe(plugins.sourcemaps.init({loadMaps: true}))
      .pipe(plugins.sass({
        outputStyle: config.dev ? 'expanded': 'compressed',
        importer: moduleImporter()
      }).on('error', plugins.sass.logError))
      .pipe(plugins.autoprefixer())
      .pipe(plugins.sourcemaps.write('./maps'))
      .pipe(gulp.dest(config.dist + 'css'))
      .pipe(browserSync.stream())
  };
};
