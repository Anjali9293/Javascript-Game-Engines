
/* Game namespace */
var game = {

    // an object where to store game information
    data : {
        // score
        score : 0
    },


    // Run on page load.
    "onload" : function () {
        // Initialize the video.
        if (!me.video.init(960, 640, {parent : "screen", scale : "auto", scaleMethod : "flex"})) {
            alert("Your browser does not support HTML5 canvas.");
            return;
        }

        // Initialize the audio.
        me.audio.init("mp3,ogg");

        // set and load all resources.
        // (this will also automatically switch to the loading screen)
        me.loader.preload(game.resources, this.loaded.bind(this));
    },

    "loss": function() {

        console.log("LOSS", me.state)
        
        me.state.change(me.state.LOSS);

    },

    // Run on game resources loaded.
    "loaded" : function () {

        me.state.WIN = 10;
        me.state.LOSS = 11;

        // set the "Play/Ingame" Screen Object
        this.playScreen = new game.PlayScreen();
        this.lossScreen = new game.LossScreen();
        this.winScreen = new game.WinScreen();

        me.state.set(me.state.LOSS, this.lossScreen);   
        me.state.set(me.state.WIN, this.winScreen);  
        me.state.set(me.state.PLAY, this.playScreen);        

        // add our player entity in the entity pool
        me.pool.register("player", game.Player);
        me.pool.register("laser", game.Laser);
        me.pool.register("enemy", game.Enemy);

        // start the game
        me.state.change(me.state.PLAY);
        
    }
};
