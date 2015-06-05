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
            var player = this.playerVar();
            var opponent = this.opponentVar();
            var currentPlayer = new Character(player);
            //var opponent = this.opponentVar();
            $('.application').html(JST['play']({
                'player':player,
                'opponent': opponent
            }));
           alert(currentPlayer.name);ç

        },
        win: function () {

        },
        lose: function(){

        }

    })
    Game.router= new Game.GameRouter();
})();