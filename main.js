window.onload = function() {

var game = new Phaser.Game(768,1280,Phaser.CANVAS,'',{
		preload : preload,
		create : create,
		update : update,
		create:create,
		 render:render  
	});

	var paddle1;
	var paddle2;
	var player;

	
	

	var sprite ;
	var sky;
var counter = 0 ;

var faketime=0; 

var headCheck;
var text01=00;
var timer=0;
var total=0;


var random=0;
var play=5;
var score=0;
var miss=0;

var countdown;

var xx;
var yy;
var zz;


//audio
var au;
var beep;
var peep;



// function to scale up the game to full screen
	function goFullScreen(){
		game.scale.pageAlignHorizontally = true;
		game.scale.pageAlignVertically = true;
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.scale.setScreenSize(true);
	}

	function preload(){
		game.load.image('paddle','assets/paddle.png');
		game.load.image("player","assets/player.png");	
      game.load.image("sky","assets/sky.png");	
      text01=game.add.text(0,0,"0000");



      game.load.audio('peep', 'assets/audio/ping_pong_8bit_peeeeeep.mp3');
    game.load.audio('beep', 'assets/audio/ping_pong_8bit_beeep.mp3');


	}
function create(){
		
   peep = game.add.audio('peep');
    beep = game.add.audio('beep');

    //beep.play();
    hit(3);

	   game.stage.backgroundColor = '#6688ee';



		player = game.add.sprite(0, 0, 'player');
    player.alpha = 0.5 ;
    player.x = game.width / 2 ;
    player.anchor.x = player.anchor.y = 0.5 ;




    	sky = game.add.sprite(0, 0, 'sky');
    	sky.alpha = 0.5 ;
    sky.x = game.width / 2 ;
    sky.anchor.x = sky.anchor.y = 0.5 ;





	   //text 
  	headCheck=0;
  	

      //  Create our Timer
    //timer = game.time.create(false);

    //  Set a TimerEvent to occur after 2 seconds
    //timer.loop(2000, updateCounter);

    //  Start the timer running - this is important!
    //  It won't start automatically, allowing you to hook it to button events and the like.
    
  

	}
	function update(){
		
faketime++;
var mod;

//timer.start();

	if (window.DeviceOrientationEvent) {
		
		window.addEventListener("deviceorientation", function(event) 
		{
			
			var xValue = Math.round(event.gamma);
			var yValue = Math.round(event.beta);
			var Rotation = Math.round(event.alpha);


				xx=xValue;
				yy=yValue;
				//zz=Rotation;
        zz=xValue;

		}, true);
		
		
		
	} else {
	alert("Sorry, your browser doesn't support Device Orientation");
	}

	//touch
	game.input.onDown.addOnce(updateText, this);

	
	



    if(play==random){
      score++;
      //sound
      
    }
    if(play!=random){
      score=0;
      //soundbad
    }

    total++;
    
//start
    if(faketime%120==0){
      random= game.rnd.integerInRange(1, 3);
        if(random==1){
      //audioR
     }
     else if (random==2){
        //M

     }
     else if (random==3){
        //L
     }  
          }

     
//half
  if(faketime%120==30){
    if(random==1){
      //audioR
     }
     else if (random==2){
        //M
        
     }
     else if (random==3){
        //L
     }  
          }
  


// hit



    play=5;

      updateText();


}
	// function to be called when the game has been created

function updateText() {

   // headCheck++;
var move=0;

text01.setText('Counter: ' + counter);


    
    
headCheck="kak";
play=2;

console.log("sss "+yy+"ss "+zz+timer);


if(45<yy && yy<135&&-45<zz&&zz<45){
        	//document.write("up\n");.
        	console.log("up "+yy+zz);
          headCheck="up";
          play=1;
          
          beep.play();

        }
       else if(45<zz&&zz<81){
        	
        	console.log("non "+yy+zz);
           headCheck="non";
           play=2;
           beep.play();
           
        }
       else if(-135<yy&& yy<-45&&-45<zz&&zz<45){
        	console.log("down\n");
        	headCheck="down";
          play=3;
          //beep.play();
          
          hit(3);
        }


}
function hit(pos){
beep.play();
}

	

function updateCounter() {

    if(play==random){
      score++;
      //sound
      
    }
    if(play!=random){
      score=0;
      //soundbad
    }

    total++;
    random= game.rnd.integerInRange(1, 3);


     if(random==1){
      //R
     }
     else if (random==2){
        //M
     }
     else if (random==3){
        //L
     }




    play=5;


}

	function render() {

     game.debug.text('Time until event: ' + timer.duration, 32, 10);
    game.debug.text('Loop Count: ' + total, 32, 64);


game.debug.text("Head : " + headCheck, 32, 96,{ font: "128px", fill: "#ffffff", align: "center" });


    game.debug.text("score: " + score, 32, 200);
    game.debug.text("miss: " + miss, 150, 200);
    game.debug.text("Time until event: " + faketime, 32, 300);

    game.debug.text("random: " + random, 32, 400);
    game.debug.text("play: " + play, 32, 450);

    


  
}
}
}