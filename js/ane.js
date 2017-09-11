var aneObj=function(){
	//start point,control point,ren point(sin);
	this.rootx=[];
	this.headx=[];
	this.heady=[];
	this.amp=[];
	this.ang=0;
}
aneObj.prototype.num=50;
aneObj.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.rootx[i]=i*16+Math.random()*20;
		this.headx[i]=this.rootx[i];
		this.heady[i]=canHeight-(200+Math.random()*50);
		this.amp[i]=Math.random()*50+30;
	}
	
}
aneObj.prototype.draw=function(){
	this.ang+=17*0.0008;
	var l=Math.sin(this.ang);
	ctx2.save();
	ctx2.globalAlpha=0.6;
	ctx2.strokeStyle='#3d154e';
	ctx2.lineWidth=20;
	ctx2.lineCap='round';
	for(var i=0;i<this.num;i++){
		ctx2.beginPath();
		ctx2.moveTo(this.rootx[i],canHeight);
		this.headx[i]=this.rootx[i]+l*this.amp[i];
		ctx2.quadraticCurveTo(this.rootx[i],canHeight-100,this.headx[i],this.heady[i]);//二次贝塞尔曲线 quadraticCurveTo
		ctx2.stroke();
	}
	ctx2.restore();
}