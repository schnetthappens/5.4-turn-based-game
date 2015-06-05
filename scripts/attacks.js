/**
 * Created by firewaterjoe on 6/5/15.
 */
window.Game = window.Game || {};
(function(){

    Game.vent.on("say:hi", function(){
        if (Game.opponentPlayer.health >1){
            Game.opponentHealthWidth = Game.opponentPlayer.health -= Game.currentPlayer.attack();
            Game.vent.trigger('opponent:hit');
            Game.opponentAttack();
        }else Game.router.navigate('win',{trigger:true})

        console.log("opponent health ",Game.opponentPlayer.health)
    });

    Game.opponentAttack = function(){
        if (Game.currentPlayer.health >1){
            Game.playerHealthWidth = Game.currentPlayer.health -= Game.opponentPlayer.attack();
            Game.vent.trigger('player:hit');
        }else Game.router.navigate('lose',{trigger:true});
        console.log('player health', Game.currentPlayer.health)
    }
})();