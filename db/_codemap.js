module.exports = {
  _ns: 'motley',
  _folder: 'db',

  'connectRedis': require('./connectRedis'),
  'createRedisCollection': require('./createRedisCollection'),
  'closeRedis': require('./closeRedis'),
  '@createCollection': '#db.createRedisCollection',

  'redis.client': null
};