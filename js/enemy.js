
function Enemy(x, y, spend){
	this.x = x || Math.random()*600;
	this.y = y || 0;
	this.spend = spend || (Math.random()*5 + 8);
	this.w = img_enemy.width;
	this.h = img_enemy.height;
	this.flys = [];
	this.lastTime = (new Date).getTime();
};
Enemy.prototype = {
		index :10,
		m:-img_enemy.height,
    update:function(){
			// 没有时立即生成一个
      if(this.flys.length<=1){
        this.x = Math.random()*580;
        this.flys.push(new Enemy(this.x,this.y));
      }
      var m = parseInt(Math.random()*580);
      if(m%10==0){
        if((new Date).getTime()-this.lastTime>500&&this.flys.length<7){
          this.x = m;
          this.flys.push(new Enemy(this.x,this.y));
        }
      }
    },
		render:function(c2d){
			var _self = this;
			var w = this.w;
			var h = this.h;
      if(this.flys.length>0){
        for(var i=0,r;r=this.flys[i];i++){
          c2d.drawImage(img_enemy,0,0,w,h,r.x,r.y+=r.spend,w,h);
          if(r.y>810){
            _self.flys.splice(i,1);
          }
        }
      }
		}
  }
