module.exports = function (gulp, plugins, config, browserSync) {
  return function() {
    var bsConfig;
    if (config.server.proxy) {
      bsConfig = {
        proxy: {
          target: config.server.address,
          ws: true
        },
        ghostMode: false,
        port: config.server.port
      }
    }
    else {
      bsConfig = {
        server: {
          baseDir: './',
          directory: false
        },
        ghostMode: false,
        port: config.server.port
      }
    }
    browserSync.init(bsConfig);
  }
};
