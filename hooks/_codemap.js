module.exports = {
  _ns: 'motley',
  _folder: 'hooks',

  'boot[]': '#db.connectRedis',
  'close[]': '#db.closeRedis'
}