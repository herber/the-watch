const chokidar = require('chokidar');

module.exports = (path, opts, cb) => {
  if (typeof opts == 'function') {
    cb = opts;
    opts = {};
  }

  opts = opts | {};

  const watcher = chokidar.watch(
    path,
    Object.assign(
      {},
      {
        ignored: [/(^|[\/\\])\../],
        persistent: true
      },
      opts
    )
  );

  watcher.on('raw', (event, path, details) => {
    path => cb(null, event, path, details);
  });

  watcher.on('error', err => {
    cb(err, 'error', null, null);
  });
};
