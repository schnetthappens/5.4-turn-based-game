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
            $('.application').html(JST['container']());
            $('.character').append(JST['player']());
        },
        opponent: function(){
            var player = localStorage.getItem("player");
            $('.application').html(JST['opponent']({
                'player': player
            }));
        },
        play: function () {
            var player =localStorage.getItem("player");
            var villain = localStorage.getItem("villain");
            $('.application').html(JST['play']({
                'player': player,
                'villain': villain
            }));

        },
        win: function () {

        },
        lose: function(){

        }

    })
    Game.router= new Game.GameRouter();
})();