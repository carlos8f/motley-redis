module.exports = {
  _ns: 'motley',
  _folder: 'db',

  'connectRedis': require('./connectRedis'),
  'createRedisCollection': require('./createRedisCollection'),
  '@createCollection': '#db.createRedisCollection',

  'redis.client': null
};