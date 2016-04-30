module.exports = {
  _ns: 'motley',
  _folder: 'conf',

  'db.redis': {
    host: 'localhost',
    port: 6379,
    db: 0,
    password: null,
    key_prefix: 'motley'
  },
  'middleware.session{}': {
    save: {
      ttl: 86400 * 7 * 2
    }
  }
}