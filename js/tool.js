var OO = {
  // 完全拷贝
  copy: function( src, tar ){
    tar = tar || {};
    for( var v in src ) {
			tar[v] = src[v];
		}
    return tar;
  },

  isFunction: function( o ){
    return o instanceof Function || typeof(o)=='function';
  },

  copyProperties: function( src, tar ){
    tar = tar || {};
    for( var v in src ) {
      if(!OO.isFunction(src[v])){
        tar[v] = src[v];
      }
    }
    return tar;
  },

  copyFunction: function( src, tar ){
    tar = tar || {};
    for( var v in src ) {
      if(OO.isFunction(src[v])){
        tar[v] = src[v];
      }
    }
    return tar;
  },

  applyFunction: function( src, tar ){
    tar = tar || {};
    for( var v in src ){
      if(OO.isFunction(src[v]) && !(v in tar)){
        tar[v] = src[v];
      }
    }
    return tar;
  },

  applyProperties : function( src, tar ){
		tar = tar || {};
		for( var v in src ) {
			if (!OO.isFunction(src[v]) && !(v in tar)) {
				tar[v] = src[v];
			}
		}
		return tar;
	},

  defineClass: function(className, classDef, parentClassName){
    var clas = window[className] = function(){
      OO.copyProperties(classDef, this);
      if( OO.isFunction(classDef[className])){
        classDef[className].apply(this,arguments)
      }
    };

    clas.prototype = OO.copyFunction(classDef);
    if(parentClassName) {
      var tmp = new window[parentClassName];
      OO.applyFunction(tmp, clas.prototype);
      OO.applyProperties(tmp, classDef)
    }
  }

}
