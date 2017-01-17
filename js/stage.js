
var Stage = function(w, h, spend){
		var cavas = document.createElement("canvas");
		cavas.width = w || 600;
		cavas.height = h || 800;
		console.log(cavas.width,cavas.height)
		var parent = parent || document.getElementById("main");
		parent.appendChild(cavas);
		this.c2d = cavas.getContext("2d");
		// this.c2d.fillStyle = "#000";
		// this.c2d.fillRect(0, 0, w, h);
		this.updates =[];
		this.renders =[];
		this.spend =  spend || 40;
};

Stage.prototype = {
	addEl :function(el){
		if(el.update && OO.isFunction(el.update)){
			this.updates.push(el);
		}
		if(el.render && OO.isFunction(el.render)){
			this.renders.push(el);
		}
	},
	romove :function(el){
		if(i = updates.indexof(el)>-1){
			this.updates.splice(i,1);
		}
		if(i = renders.indexof(el)>-1){
			this.renders.splice(i,1);
		}
	},
	update :function(){
		for(var i=0,r; r=this.updates[i++];){
			r.update();
		}
	},
	render :function(){
		this.renders.sort(function(e1,e2){
			return e1.index - e2.index;
		});
		for(var i=0,r; r=this.renders[i++];){
			r.render(this.c2d);
		}
	},
	start :function(){
		var me = this;
		timer = setInterval(function(){
			me.update();
			me.render();
		},this.spend);
	},
	stop :function(){
		clearInterval(timer);
		delete(timer);
	}
	};
