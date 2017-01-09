var watch = require('gulp-watch'),
    runSequence = require('run-sequence');

module.exports = function(gulp, config) {
  return function() {
    watch(config.src + 'images/**/*', function() {
      gulp.start('images');
    });
    watch(config.src + 'js/**/*', function(){
      gulp.start('js');
    });
    watch(config.src + 'scss/**/*.{scss,sass}', function(){
      gulp.start('scss');
    });
  }
};