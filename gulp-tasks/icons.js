var iconfont = require('gulp-iconfont'),
    iconfont_css = require('gulp-iconfont-css');

module.exports = function(gulp, plugins, config, browserSync) {
  return function() {
    gulp.src([config.src +'/icons/*.svg'], {base: config.src})
      .pipe(iconfont_css({
        fontName: 'app_icons',
        cssClass: 'icon',
        path: config.src + 'templates/icons/_icons_templ.scss',
        targetPath: '../../../' + config.src + 'scss/01.config/02.dependencies/generated/_icons.scss',
        fontPath: '../fonts/icons/',
        normalize: true
      }))
      .pipe(iconfont({
        fontName: 'app_icons'
      }))
      .pipe(gulp.dest(config.dist + 'fonts/icons/'))
      .pipe(browserSync.stream());
  }
};