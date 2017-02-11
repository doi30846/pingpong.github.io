window.onload = function () {

    var game = new Phaser.Game(600, 500, Phaser.CANVAS, '', {
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

    var phitl, phitr, ptal, ptar, hitl, hitr, tal, tar;


    var timeloop;
    var hit = 0;
    var f = 0;
    var ff = 0;
    var fff = 0;

    var start = 120;


    var text11;

    //game.time.advancedTiming = true;

    var bpmText;


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


      


    }
    function create() {

        peep = game.add.audio('peep');
        beep = game.add.audio('beep');

        phitl = game.add.audio('phitl')
        phitr = game.add.audio('phitr')
        hitl = game.add.audio('hitl')
        hitr = game.add.audio('hitlr')
        ptal = game.add.audio('ptal')
        ptar = game.add.audio('ptar')
        tal = game.add.audio('tal')
        tar = game.add.audio('tar')

        tar.play();
        // hit(3);

        game.stage.backgroundColor = '#0a1140';



        player = game.add.sprite(0, 0, 'player');
        player.alpha = 0.5;
        player.x = game.width / 2;
        player.anchor.x = player.anchor.y = 0.5;




        //text 
        headCheck = 0;




      
        /*text.anchor.x = 0.5;
        text.anchor.y = 0.5;*/

       

        text01.inputEnabled = true;

        text01.input.enableDrag();

         text11 = game.add.text(game.world.centerX, game.world.centerY, "click and drag me", { font: "300px Arial", fill: "#ff0044", align: "center" });

        text11.anchor.set(0.5);

        text11.inputEnabled = true;

        text11.input.enableDrag();
        text11.resolution = 1;

        //timer.loop(2000, updateCounter);
       /* bmpText = game.add.bitmapText(10, 100, 'carrier_command', 'Drag me around !', 34);

        bmpText.inputEnabled = true;

        bmpText.input.enableDrag();*/
        

    }
    function unpause(event) {
        // Only act if paused
        if (game.paused) {
            miss = 0;
            faketime = 2;
                game.paused = false;
            }
        
    };
    function update() {

        


        text11.text = score;

        //start
        if (faketime == 1) {
            game.paused = true;
            
        }


        //lose 

        if (miss == 3) {
            game.paused = true;

        }
        
game.input.onDown.add(unpause, self);

        




        faketime++;

        //   timeloop.integer();
        var mod;
        //2
        play = 2;

        //timer.start();

        if (window.DeviceOrientationEvent) {

            window.addEventListener("deviceorientation", function (event) {

                var xValue = Math.round(event.gamma);
                var yValue = Math.round(event.beta);
                var Rotation = Math.round(event.alpha);


                xx = xValue;
                yy = yValue;
                //zz=Rotation;
                zz = xValue;

            }, true);



        } else {
            alert("Sorry, your browser doesn't support Device Orientation");
        }

        //touch
        //game.input.onDown.addOnce(updateText, this);


        // timeloop=faketime%120;
        timeloop = faketime % start;


        //start
        if (timeloop == 0) {

            f++;

            random = game.rnd.integerInRange(2, 2);
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
        }


        //half
        if (timeloop == (start / 4)) {
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
            }
        }



        // hit

        if ((start * 2 / 5) < timeloop && timeloop < (start * 3 / 4)) {


            //gyro 
            if (45 < yy && yy < 135 && -45 < zz && zz < 45) {
                headCheck = "up";
                play = 1;
            }
            else if (45 < zz && zz < 81) {
                headCheck = "non";
                play = 2;
            }
            else if (-135 < yy && yy < -45 && -45 < zz && zz < 45) {

                headCheck = "down";
                play = 3;

            }

            if (play == random && f == ff + 1) {
                hit = 1;
                play = 5;
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
                //  start = start - (score*0.5);

                game.time.Fps++;
                this.slowMotion = 2.0;
                ff++;


            }
            if (play != random && f == ff + 1) { beep.play(); miss++; ff++; }


        }



        if ((start * 3 / 4) < timeloop && f == fff + 1) {
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


            }

            fff++;


        }



    }




    function render() {

        game.debug.text('Fps: ' + game.time.desiredFps, 32, 10);
        game.debug.text('Loop Count: ' + timeloop, 32, 64);


        game.debug.text("Head : " + headCheck, 32, 96, { font: "128px", fill: "#ffffff", align: "center" });


        game.debug.text("score: " + score, 32, 200);
        game.debug.text("miss: " + miss, 150, 200);
        game.debug.text("Time until event: " + faketime, 32, 300);

        game.debug.text("random: " + random, 32, 400);
        game.debug.text("play: " + play, 32, 450);





    }

}