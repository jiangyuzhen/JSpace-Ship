function Aircraft(x, y, spend){
	this.x = x || 250;
	this.y = y || 600;
	this.w = img_aircraft.width;
	this.h = img_aircraft.height;
	this.spend = spend || 7;
	this.onkeys = [];
	this.bullet = [];
	this.lastTime = (new Date).getTime();
};
Aircraft.prototype = {
		index :100,
		update:function(){
			var me = this;
			add(this.onkeys);
			this.keyEvet();
		},
		render:function(c2d){
			var my = this;
			var w = this.w;
			var h = this.h;
			// 移动不能超界
			if(this.x<=0){
				this.x = 0;
			}else if(this.x>=550){
				this.x = 550;
			}
			if(this.y<=0){
				this.y = 0;
			}else if(this.y>=750){
				this.y = 750;
			}

			c2d.drawImage(img_aircraft,0,0,w,h,this.x,this.y,w,h);

			// 渲染子弹
			if(this.bullet.length>0){
				for(var i=0,r;r=this.bullet[i];i++){
					r.render(c2d);
					if(r.y<-10){
						this.bullet.splice(i,1);
						}
				}
			}

		},
		isonkey:function(e){
			if(this.onkeys[e]){
				return true;
			}else{
				return false;
			}
		},
		isonkeyAll:function(e1,e2){
			if(this.isonkey[e1]&&this.onkeys[e2]){
				return true;
			}else{
				return false;
			}
		},
		keyEvet:function(){
			//37﹐38﹐39﹐40對應按下的方向鍵分別是 左﹐上﹐右﹐下
			if(this.isonkeyAll("65","87")||this.isonkeyAll("37","38")){
				//左上
				this.x -= this.spend;
				this.y -= this.spend;
			}else if(this.isonkeyAll("65","83")||this.isonkeyAll("37","40")){
				//左下
				this.x -= this.spend;
				this.y += this.spend;
			}else if(this.isonkeyAll("68","87")||this.isonkeyAll("39","38")){
				//右上
				this.x += this.spend;
				this.y -= this.spend;
			}else if(this.isonkeyAll("68","83")||this.isonkeyAll("37","40")){
				//右下
				this.x += this.spend;
				this.y += this.spend;
			}
// 			=--------------------------------------------是否发弹----------
			if(this.isonkeyAll("65","32")||this.isonkeyAll("37","32")){
				//左
				this.x -= this.spend;
				this.onBullet();
			}else if(this.isonkeyAll("68","32")||this.isonkeyAll("39","32")){
				//右
				this.x -= this.spend;
				this.onBullet();
			}else if(this.isonkeyAll("32","87")||this.isonkeyAll("32","38")){
				//上
				this.onBullet();
				this.y -= this.spend;
			}else if(this.isonkeyAll("32","83")||this.isonkeyAll("32","40")){
				//下
				this.onBullet();
				this.y += this.spend;
			}
//          --------------------------单向------------------
			if(this.isonkey("65")||this.isonkey("37")){
				//左
				this.x -= this.spend;
			}else if(this.isonkey("68")||this.isonkey("39")){
				//右
				this.x += this.spend;
			}else if(this.isonkey("87")||this.isonkey("38")){
				//上
				this.y -=this.spend;
			}else if(this.isonkey("83")||this.isonkey("40")){
				//下
				this.y += this.spend;
			}
			if(this.isonkey("32")){
				this.onBullet();
			}
		},
		onBullet:function(){
				if((new Date).getTime()-this.lastTime>300){
					this.lastTime = (new Date).getTime();
					this.bullet.push(new Bullet(this.x+40,this.y+10));
				}
		}
  }
	// 键盘事件监听
	function add(onkeys){
		window.onkeydown = function(e){
			var k = parseInt(e.keyCode);
			onkeys[k]=true;
		};
		window.onkeyup = function(event){
			var k = parseInt(event.keyCode);
			onkeys[k]=false;
		};
	}
