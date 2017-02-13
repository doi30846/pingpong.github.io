window.onload = function () {

    var game = new Phaser.Game(800, 500, Phaser.CANVAS, '', {
        preload: preload,
        create: create,
        update: update,
        create: create,
        render: render
    });

    //1
    var paddle1;
    var paddle2;
    var player;


    var sprite;
    var sky;
    var counter = 0;

    var faketime = 0;

    var headCheck;

    var timer = 0;
    var total = 0;


    var random = 0;
    var play = 5;
    var score = 0;
    var miss = 0;

    var countdown;

    var xx;
    var yy;
    var zz;


    //audio
    var au;
    var beep;
    var peep;

    var phitl, phitr, ptal, ptar, hitl, hitr, tal, tar,countdown;


    var timeloop;
    var hit = 0;
    var f = 0;
    var ff = 0;
    var fff = 0;

    var start = 120;


    var text11;

    //game.time.advancedTiming = true;

    var bpmText;

    var time=0;
    var div = 20;
    
    var aa;

    var alp ;
    var bet ;
    var gam;

    var texttry;

    var b1=0;
    var b2 = 0;
    var b3 = 0;
    var b4 = 0;

    var book;

    function preload() {
       
        
        text01 = game.add.text(0, 0, "0");



        game.load.audio('peep', 'assets/audio/ping_pong_8bit_peeeeeep.mp3');
        game.load.audio('beep', 'assets/audio/ping_pong_8bit_beeep.mp3');

        game.load.audio('phitl', 'assets/audio/phitl.mp3');
        game.load.audio('phitr', 'assets/audio/phitr.mp3');
        game.load.audio('hitl', 'assets/audio/phitl.mp3');
        game.load.audio('hitr', 'assets/audio/phitr.mp3');
        game.load.audio('ptal', 'assets/audio/ptal.mp3');
        game.load.audio('ptar', 'assets/audio/ptar.mp3');
        game.load.audio('tal', 'assets/audio/tal.mp3');
        game.load.audio('tar', 'assets/audio/tar.mp3');

        game.load.audio('countdown', 'assets/audio/countdown.mp3');
      

        game.load.image('book', 'assets/book800.png');
    }
    function create() {

        peep = game.add.audio('peep');
        beep = game.add.audio('beep');

        phitl = game.add.audio('phitl');
        phitr = game.add.audio('phitr');
        hitl = game.add.audio('hitl');
        hitr = game.add.audio('hitlr');
        ptal = game.add.audio('ptal');
        ptar = game.add.audio('ptar');
        tal = game.add.audio('tal');
        tar = game.add.audio('tar');
  
        game.stage.backgroundColor = '#0a1140';


      
        book = game.add.sprite(0, 0, 'book');

     //   book.anchor.x = book.anchor.y = 0.5;


        //text 
        headCheck = 0;



        text01.inputEnabled = true;

        text01.input.enableDrag();

        // text11 = game.add.text(game.world.centerX, game.world.centerY, "PLAY!", { font: "300px Arial", fill: "#ff0044", align: "center" });
         text11 = game.add.text(game.world.centerX, game.world.centerY, "", { font: "300px Arial", fill: "#ff0044", align: "center" });
        text11.anchor.set(0.5);

        text11.inputEnabled = true;

        text11.input.enableDrag();
        text11.resolution = 1;

        faketime = 0;
game.input.onDown.add(unpause, self);
game.paused = true;
timeloop = 0;

texttry = game.add.text(game.world.centerX, 420, "", { font: "130px Arial", fill: "#f56444", align: "center" });
texttry.anchor.set(0.5);





    }
    function unpause(event) {
        // Only act if paused
        if (game.paused) {
            miss = 0; score = 0; book.destroy();
            faketime = 2;
         //   countdown.play();
         
            peep.play();
                game.paused = false;
          
            }
        
    };
    function update() {


        text11.text = score;
        texttry.text = "";
        //start

        //lose 

        if (miss == 3) {
            peep.play();
            texttry.text = "Let Try !!!";
            game.paused = true;

        }
        

        var mod;
        

        //timer.start();

        if (window.DeviceOrientationEvent) {

            window.addEventListener("deviceorientation", function (event) {

               
                  gam = Math.round(event.gamma);
                bet = Math.round(event.beta);
                 alp = Math.round(event.alpha);

            }, true);



        } else {
            alert("Sorry, your browser doesn't support Device Orientation");
        }

        //  time= game.time.totalElapsedSeconds();
            time = game.time.now / div;

            faketime = time.toFixed(0);
        // faketime++;

        //   timeloop.integer();
        // timeloop=faketime%120;
            timeloop = (faketime % start) / 10;
            timeloop = timeloop.toFixed(0);

        //start111111111111111111111111111111111111
        if (timeloop == 0&&b1==0) {

           
         
//2
      //  play = 2;
            random = game.rnd.integerInRange(1,3);
            if (random == 1) {
                //audioR
                phitr.play();
            }
            else if (random == 2) {
                //M
                phitl.play();
                phitr.play();
            }
            else if (random == 3) {
                //L
                phitl.play();
            }
            b1 = 1;
        }


        //half222222222222222222222
       // if (timeloop == (start / 4)) {
       if (timeloop == 3 && b2==0) {
           
           

           if (random == 1) {
                //audioR
                ptar.play();
            }
            else if (random == 2) {
                //M
                ptar.play();
                tal.play();
            }
            else if (random == 3) {
                //L
                ptal.play();
            }b2 = 1;
        }
        //////////////////////////////////////////////////////////////////////////////////////////
             if (50 < bet && bet < 135 && -60 < gam && gam < 60) {
            headCheck = "up";
            play = 1;

            /*   if (60 < gam && gam < 91) {
                   headCheck = "non";
                   play = 2;
               }*/
        }else {
               headCheck = "++++++";
               play = 2;
           }
           if (-135 < bet && bet < -60 && -60 < gam && gam < 60) {

                headCheck = "down";
                play = 3;

           }
           
        /////////////////////////////////////////////////////////////////////////////////
        // hit3333333

      //  if (45 < timeloop && timeloop < 90) {
     if (timeloop==6 && b3==0) {
        
            //gyro 
            

            if (play == random ) {
                hit = 1;
              //  play = 5;
                //score++;
                if (random == 1) {
                    phitr.play();

                }
                else if (random == 2) {
                    phitl.play();
                    phitr.play();
                }
                else if (random == 3) {
                    phitl.play();
                }
                score++;
                //faster
               b3 = 1;
                //  start = start - (score*0.5);
               div=div-0.1;
              

            }
            if (play != random) { beep.play(); miss++; b3 = 1; }

        }

       // 444444444444
  
     if ( timeloop==9 && b4 == 0) {
        
            if (play == random) {

                if (random == 1) {
                    ptar.play();

                }
                else if (random == 2) {
                    ptal.play();
                    ptar.play();
                }
                else if (random == 3) {
                    ptal.play();
                }
 b4 = 1;

            }


        }
 if (timeloop == 11) {
                b1 = 0;
                b2 = 0;
                b3 = 0;
                b4 = 0;
            }
    }

    function render() {
/*
        game.debug.text('Fps: ' + game.time.desiredFps + time, 32, 10);
        game.debug.text('Loop Count: ' + timeloop, 32, 64);


        game.debug.text("Head : " + headCheck, 32, 96, { font: "128px", fill: "#ffffff", align: "center" });
        game.debug.text("score: " + score, 32, 200);
        game.debug.text("miss: " + miss, 150, 200);
        game.debug.text("Time  " + faketime, 32, 300);

        game.debug.text("random: " + random, 32, 400);
        game.debug.text("play: " + play, 32, 450);

        */
    }

}