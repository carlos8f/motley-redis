module.exports = function container (get, set) {
  return function connectRedis (cb) {
    var options = get('conf.db.redis');
    if (!options.password) delete options.password;
    get('vendor.console').log('motley-redis: connecting...')
    var client = get('vendor.redis').createClient(options);
    set('@db.redis.client', client);
    client.once('ready', function () {
      delete options.password
      get('vendor.console').log('motley-redis: connected.', options)
      cb()
    })
  }
}