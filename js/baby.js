var babyObj=function(){
	this.x;
	this.y;
	this.angle;

	this.babyTailTimer=0;
	this.babyTailCount=0;

	this.babyEyeTimer=0;
	this.babyEyeCount=0;
	this.babyEyeInterval=1000;//图片持续的时间

	this.babyBodyTimer=0;
	this.babyBodyCount=0;
}

babyObj.prototype.init=function(){
	this.x=canWidth*0.5-50;
	this.y=canHeight*0.5+50;
	this.angle=0;
}

babyObj.prototype.draw=function(){
	this.x=lerpDistance(mom.x-10, this.x, 0.98);
	this.y=lerpDistance(mom.y+20, this.y, 0.98);

	var deltaY=mom.y-this.y;
	var deltaX=mom.x-this.x;
	var beta=Math.atan2(deltaY,deltaX)+Math.PI;
	this.angle=lerpAngle(beta, this.angle, 0.6);

	this.babyTailTimer+=10;
	if(this.babyTailTimer>10){
		this.babyTailCount=(this.babyTailCount+1)%8;
		this.babyTailTimer%=20;
	}

	this.babyEyeTimer+=10;
	if(this.babyEyeTimer>this.babyEyeInterval){
		this.babyEyeCount=(this.babyEyeCount+1)%2;
		this.babyEyeTimer%=this.babyEyeInterval;
		if(this.babyEyeCount==1){
			this.babyEyeInterval=100;
		}else{
			this.babyEyeInterval=Math.random()*1500+2000;
		}
	}

	this.babyBodyTimer+=17;
	if(this.babyBodyTimer>300){
		this.babyBodyCount=this.babyBodyCount+1;
		this.babyBodyTimer%=300;
		if(this.babyBodyCount>19){
			this.babyBodyCount=19;

			//game over
			data.gameOver=true;
		}
	}

	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	var babyTailCount=this.babyTailCount;
	var babyEyeCount=this.babyEyeCount;
	var babyBodyCount=this.babyBodyCount;
	ctx1.drawImage(babyTail[babyTailCount],-babyTail[babyTailCount].width*0.5+23,-babyTail[babyTailCount].width*0.5-2);
	ctx1.drawImage(babyBody[babyBodyCount],-babyBody[babyBodyCount].width*0.5,-babyBody[babyBodyCount].width*0.5);
	ctx1.drawImage(babyEye[babyEyeCount],-babyEye[babyEyeCount].width*0.5,-babyEye[babyEyeCount].height*0.5+2);
	ctx1.restore();
}
