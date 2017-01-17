
	function Bullet(x,y,spend){
		this.x = x;
		this.y = y;
		this.w = 10;
		this.h = 10;
		this.spend = spend || 10;
	};
	Bullet.prototype = {
			index :120,
			render:function(c2d){
				var w = this.w;
				var h = this.h;
				c2d.beginPath();
				c2d.fillStyle="red";
				c2d.arc(this.x,this.y-=this.spend,5,null,300,null);
				c2d.fill();
			}
		};
