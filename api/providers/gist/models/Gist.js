var Geohub = require('geohub');

module.exports = {
  find: function( id, callback ){
    // looks for data in the cache first
    if (!Cache.gist[ id ]){
      // get the gist via the geohub module
      Geohub.gist( { id: id }, function( err, data ){
        Cache.gist[ id ] = JSON.stringify(data[0]);
        callback( err, data[0] );
      });
    } else {
      callback( null, JSON.parse(Cache.gist[ id ]) );
    }
  }
};
