function Fried(){
  this.figs = [];
  this.count = 0;
  this.life = 5;
}

Fried.prototype = {
  index:120,
  update: function(c2d){
    var p = this.plane;
    if(this.life<=0){
      var dom = document.getElementById("div");
      dom.style.display = "block";
      dom.style.opacity = 0.2;
      document.getElementById("main").appendChild(dom);
      this.stage.stop();
    }
// 				------------------------子弹打中敌机--------------

      for(var m = 0,f;f=this.fly[m];m++){
        if(this.bullet.length>0){
          for(var j = 0,b;b=this.bullet[j];j++){
            if(b.y<=f.y+f.h&&f.x<=b.x+b.w&&b.x<=f.x+f.w&&f.y<=b.y+b.h){
              this.bullet.splice(j,1);
              this.fly.splice(m,1);
              console.log(f.x,f.y)
              this.figs.push(new Effects(f.x,f.y,0));
              this.count++;
            }
          }
        }
// 				------------------------敌机碰到飞机--------------
        if(p.y<=f.y+f.h&&p.x<=f.x+f.w&&f.x<=p.x+p.w&&f.y<=p.y+p.h){
            this.fly.splice(m,1);
            this.figs.push(new Effects(f.x,f.y,0));
            this.life--;
            this.count++;
          }

      }
  },
  render: function(c2d){
    c2d.font = "17px 黑体";
    c2d.fillStyle="red";
    c2d.fillText("消灭敌机总数："+this.count,20,30);
    c2d.fillText("当前生命力："+this.life,450,30);
    for(var j=0,r;r=this.figs[j];j++){
      if(r.i<21){
        c2d.drawImage(img_effects,(r.i++)*120,0,120,90,r.x-20,r.y,120,90);
      }else{
        r.i = 0;
        this.figs.splice(j,1);
      }
    }
   }
}
