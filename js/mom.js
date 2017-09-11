var momObj=function(){
	this.x;
	this.y;
	this.angle;

	this.momTailTimer=0;
	this.momTailCount=0;

	this.momEyeTimer=0;
	this.momEyeCount=0;
	this.momEyeInterval=1000;

	this.momBodyCount=0;
}

momObj.prototype.init=function(){
	this.x=canWidth*0.5;
	this.y=canHeight*0.5;
	this.angle=0;
}

momObj.prototype.draw=function(){
	this.x=lerpDistance(mx, this.x, 0.98);
	this.y=lerpDistance(my, this.y, 0.98);

	//Math.atan2(y,x);-PI,PI
	var deltaY=my-this.y;
	var deltaX=mx-this.x;
	var beta=Math.atan2(deltaY,deltaX)+Math.PI;
	this.angle=lerpAngle(beta, this.angle, 0.8);

	this.momTailTimer+=10;
	if(this.momTailTimer>30){
		this.momTailCount=(this.momTailCount+1)%8;
		this.momTailTimer%=30;
	}

	this.momEyeTimer+=10;
	if(this.momEyeTimer>this.momEyeInterval){
		this.momEyeCount=(this.momEyeCount+1)%2;
		this.momEyeTimer%=this.momEyeInterval;
		if(this.momEyeCount==1){
			this.momEyeInterval=100;
		}else{
			this.momEyeInterval=Math.random()*1500+2000;
		}
	}

	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	var momTailCount=this.momTailCount;
	ctx1.drawImage(momTail[momTailCount],-momTail[momTailCount].width*0.5+31,-momTail[momTailCount].height*0.5);
	var momBodyCount=this.momBodyCount;
	if(data.double==1){
		ctx1.drawImage(momBodyOra[momBodyCount],-momBodyOra[momBodyCount].width*0.5,-momBodyOra[momBodyCount].height*0.5);
	}else{
		ctx1.drawImage(momBodyBlue[momBodyCount],-momBodyOra[momBodyCount].width*0.5,-momBodyOra[momBodyCount].height*0.5);
	}
	var momEyeCount=this.momEyeCount;
	ctx1.drawImage(momEye[momEyeCount],-momEye[momEyeCount].width*0.5-5,-momEye[momEyeCount].height*0.5);
	ctx1.restore();

}