/**
 * Created by firewaterjoe on 6/4/15.
 */
window.Game = window.Game || {};
(function(){
    Game.GameRouter = Backbone.Router.extend({
        routes:{
            '': 'index',
            'opponent':'opponent',
            'play': 'play',
            'win': 'win',
            'lose': 'lose'
        },
        index: function(){

        },
        opponent: function(){

        },
        play: function () {

        },
        win: function () {

        },
        lose: function(){

        }

    })
})();