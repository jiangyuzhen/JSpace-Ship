(function(){
	window.onload = function(){
		// 		----------------------------------
		var stage = new Stage();
		var bg = new Bg();
		var aircraft = new Aircraft();
		var enemy = new Enemy();
		var fried = new Fried();
		var effects = new Effects();
		var bullet = aircraft.bullet;
		// 	------------------------------------
	  fried.fly = enemy.flys;
	  fried.bullet = bullet;
	  fried.plane = aircraft;
	  fried.stage = stage;
		effects.figs = fried.figs;
		 // 	------------------------------------
		stage.addEl(bg);
		stage.addEl(aircraft);
		stage.addEl(enemy);
		stage.addEl(fried);
		stage.addEl(effects);
		// 	--------------------------------------

    stage.start();
	};

})();

console.log(this)
