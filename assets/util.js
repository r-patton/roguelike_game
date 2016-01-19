if (!String.prototype.startsWith) { // nabbed from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
  String.prototype.startsWith = function(searchString, position) {
    position = position || 0;
    return this.indexOf(searchString, position) === position;
  };
}
Game.util = {

  randomString: function(len){
    var charSource = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');
    var res = '';
    for (var i = 0; i < len; i++){
      res += charSource.random();
    }
    return res;
  },
  ID_SEQUENCE: 0,
  uniqueId: function(){
    Game.util.ID_SEQUENCE++;
    return Date.now()+'-'+Game.util.ID_SEQUENCE+'-'+Game.util.randomString(24);
  },
  init2DArray: function(x, y, initVal) {
    var a = [];
    for (var xdim = 0; xdim < x; xdim++){
      a.push([]);
      for (var ydim = 0; ydim < y; ydim++){
        a[xdim].push(initVal);
      }
    }
    return a;
  },
  randomInt: function (min, max){
    var range = max - min;
    var offset = Math.floor(ROT.RNG.getUniform()*(range+1));
    return offset + min;
  },
  positionsAdjacentTo: function (pos) {
    var adjPos = [];
    for (var dx = -1; dx <= 1; dx++) {
      for (var dy = -1; dy <= 1; dy++) {
        if (dx !== 0 && dy !== 0) {
          adjPos.push({x:pos.x+dx,y:pos.y+dy});
        }
      }
    }
    return adjPos;
  },
  getDisplayDim: function(display){
    return {w:display._options.width, h:display._options.height};
  }
};
