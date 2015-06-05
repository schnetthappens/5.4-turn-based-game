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
        playerVar: function() {
            return localStorage.getItem('player');
        },
        opponentVar: function(){
            return localStorage.getItem('opponent')
        },
        index: function(){
            $('.application').html(JST['container']());
            $('.character').append(JST['player']());
        },
        opponent: function(){

            $('.application').html(JST['opponent']({
                'player': this.playerVar()
            }));
        },
        play: function () {

            //var opponent = this.opponentVar();
            $('.application').html(JST['play']({
                'player':this.playerVar(),
                'opponent': this.opponentVar()
            }));

        },
        win: function () {

        },
        lose: function(){

        }

    })
    Game.router= new Game.GameRouter();
})();