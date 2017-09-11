var dustObj=function(){
	this.x=[];
	this.y=[];
	this.amp=[];
	this.NO=[];
	this.alpha=0;
}
dustObj.prototype.num=30;
dustObj.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.x[i]=Math.random()*canWidth;
		this.y[i]=Math.random()*canHeight;
		this.amp[i]=20+Math.random()*15;
		this.NO[i]=Math.floor(Math.random()*7);
	}
	this.alpha=0;
}

dustObj.prototype.draw=function(){
	ctx1.save();
	this.alpha+=deltaTime*0.001;
	var l=Math.sin(this.alpha);
	for(var i=0;i<this.num;i++){
		var nub=this.NO[i];
		ctx1.drawImage(dustPic[nub],this.x[i]+l*this.amp[i],this.y[i]);
		
	}
	ctx1.restore()
}