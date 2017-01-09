var pngquant = require('imagemin-pngquant');

module.exports = function (gulp, plugins, browserSync, config) {
  return function () {
    gulp.src(config.src + "images/**/*")
      .pipe(plugins.imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
      }))
      .pipe(gulp.dest(config.dist + 'images/'));
  }
};
