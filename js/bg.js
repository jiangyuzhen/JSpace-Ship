function Bg(x,y,spend){
	this.x = x || 600;
	this.y = y || 800;
	this.spend = spend || 10;
};
	Bg.prototype = {
		index :-100,
		v:0,
		m :-img_bg.height,
		update:function(){
			this.spend += 0.002;
		},
		render:function(c2d){
			var w = img_bg.width;
			var h = img_bg.height;
			c2d.drawImage(img_bg,0,0,w,h,0,this.v+=this.spend,this.x,this.y);
			c2d.drawImage(img_bg,0,0,w,h,0,this.m+=this.spend,this.x,this.y);
			if(this.v>=h){
				this.v=0;
			}
			if(this.m>=0){
				this.m=-h;
			}
		}
	};
