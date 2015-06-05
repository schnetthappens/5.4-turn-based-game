/**
 * Created by firewaterjoe on 6/4/15.
 */
window.Game = window.Game || {};
(function(){
    Game.vent = _.extend({},Backbone.Events);

    Game.vent.on("say:hi",function() {
        alert("FIGHT!")
    });
})();