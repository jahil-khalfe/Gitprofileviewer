module.exports = function(gulp, plugins, browserSync, config) {
  return function () {
    gulp.src(config.src + 'js/main.js')
      .pipe(plugins.modernizr({
        options: [
          "setClasses",
          "addTest",
          "html5printshiv",
          "testProp",
          "fnBind"
        ], tests: config.modernizr}))
      .pipe( plugins.uglify())
      .pipe(gulp.dest(config.dist + 'js/'))
  };
};
