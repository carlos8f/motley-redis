module.exports = function container (get, set) {
  return function task (cb) {
    var options = get('conf.db.redis');
    var client = get('vendor.redis').createClient(options);
    set('@db.redis.client', client);
    client.once('ready', cb);
  };
};