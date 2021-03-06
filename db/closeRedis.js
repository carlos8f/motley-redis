module.exports = function container (get, set) {
  return function closeRedis (cb) {
    var client = get('db.redis.client')
    if (client) {
      get('console').log('motley-redis: closing connection...')
      client.quit(function (err) {
        if (err) return cb(err)
        get('console').log('motley-redis: connection closed.')
        cb()
      })
    }
    else setImmediate(cb)
  }
}