module.exports = function container (get, set) {
  return function createRedisCollection (name, options, cb) {
    return function task (cb) {
      var coll = get('vendor.sosa_redis')({
        client: get('db.redis.client'),
        prefix: get('conf.db.redis').key_prefix
      })(name, options);
      set('db.' + name, coll);
      setImmediate(cb);
    }
  }
}