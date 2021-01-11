game.LossScreen = me.Stage.extend({

    /**
     *  action to perform on state change
     */
    onResetEvent: function() {

        this.bg = new me.ColorLayer("background", "#FFFFFF");
        me.game.world.addChild(this.bg, 0);

        // this.player = me.pool.pull("player");
        // me.game.world.addChild(this.player, 1);

        // me.input.bindKey(me.input.KEY.LEFT, "left");
        // me.input.bindKey(me.input.KEY.RIGHT, "right");
        // me.input.bindKey(me.input.KEY.A, "left");
        // me.input.bindKey(me.input.KEY.D, "right");
        // me.input.bindKey(me.input.KEY.SPACE, "shoot", true);

        // this.enemyManager = new game.EnemyManager();
        // this.enemyManager.createEnemies();
        // me.game.world.addChild(this.enemyManager, 2);
    },


    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {
        // me.game.world.removeChild(this.bg);
        // me.game.world.removeChild(this.player);
        // me.game.world.removeChild(this.enemyManager);
        // me.input.unbindKey(me.input.KEY.LEFT);
        // me.input.unbindKey(me.input.KEY.RIGHT);
        // me.input.unbindKey(me.input.KEY.A);
        // me.input.unbindKey(me.input.KEY.D);
        // me.input.unbindKey(me.input.KEY.SPACE);
    }
});