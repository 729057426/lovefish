var can1;
var can2;
var ctx1;
var ctx2;
var canWidth;
var canHeigth;

var lastTime;
var deltaTime;

var bgPic=new Image();

var ane;
var fruit;

var mom;
var baby;

var mx;
var my;

var babyTail=[];
var babyEye=[];
var babyBody=[];

var momTail=[];
var momEye=[];
var momBodyOra=[];
var momBodyBlue=[];

var data;

var wave;
var halo;

var dust;
var dustPic=[];

document.body.onload=game;
function game(){
	deltaTime=0;
	lastTime=Date.now();
	init();
		
}

function init(){
	can1=document.getElementById('canvas1');
	ctx1=can1.getContext('2d');
	can2=document.getElementById('canvas2');
	ctx2=can2.getContext('2d');
	can1.addEventListener('mousemove',onMouseMove,false);
	bgPic.src='./src/background.jpg';
	canWidth=can1.width;
	canHeight=can1.height;
	ctx1.font="25px Verdana";
	ctx1.textAlign="center";

	ane=new aneObj();
	ane.init();

	fruit=new fruitObj();
	fruit.init();

	mom=new momObj();
	mom.init();
	mx=canWidth*0.5;
	my=canHeight*0.5;

	baby=new babyObj();
	baby.init();

	// the baby
	for(var i=0;i<8;i++){
		babyTail[i]=new Image();
		babyTail[i].src="./src/babyTail"+i+".png";
	}
	for(var i=0;i<2;i++){
		babyEye[i]=new Image();
		babyEye[i].src="./src/bigEye"+i+".png";
	}
	for(var i=0;i<20;i++){
		babyBody[i]=new Image();
		babyBody[i].src="./src/babyFade"+i+".png";
	}

	//the mom
	for(var i=0;i<8;i++){
		momTail[i]=new Image();
		momTail[i].src="./src/bigTail"+i+".png";
	}
	for(var i=0;i<2;i++){
		momEye[i]=new Image();
		momEye[i].src="./src/bigEye"+i+".png";
	}
	
	for(var i=0;i<8;i++){
		momBodyOra[i]=new Image();
		momBodyOra[i].src="./src/bigSwim"+i+".png";
		momBodyBlue[i]=new Image();
		momBodyBlue[i].src="./src/bigSwimBlue"+i+".png";
	}

	data=new dataObj();

	wave =new waveObj();
	wave.init();

	halo=new haloObj();
	halo.init();

	//dust
	for(var i=0;i<7;i++){
		dustPic[i]=new Image();
		dustPic[i].src="./src/dust"+i+".png";
	}
	dust=new dustObj();
	dust.init();
	gameloop();
}

function gameloop(){
	window.requestAnimFrame(gameloop);
	var now=Date.now();
	deltaTime=now-lastTime;
	lastTime=now;
	ctx2.clearRect(0,0,canWidth,canHeight);
	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();
	ctx1.clearRect(0,0,canWidth,canHeight);
	mom.draw();
	baby.draw();
	momFruitsCollision();
	momBabyCollision();
	data.draw();
	wave.draw();
	halo.draw();
	dust.draw();
		
}

function onMouseMove(e){
	if(!data.gameOver){
		if(e.offsetX||e.layerX){
			mx=e.offsetX==undefined?e.layerX:e.offsetX;
			my=e.offsetY==undefined?e.layerY:e.offsetY;
		}
	}
}