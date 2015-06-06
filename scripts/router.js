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
            Game.currentPlayer = new Game.Character();
            Game.opponentPlayer = new Game.Opponent();
            $('.application').html(JST['play']({
                'player':player,
                'opponent': opponent
            }));
           console.log("current player:",Game.currentPlayer.health);
            //console.log(opponentPlayer.health)

        },
        win: function(){
          var player = this.playerVar();
          $('.application').html(JST['win']({
            'player':player
          }));
        },
        lose: function(){
          var opponent = this.opponentVar();
          $('.application').html(JST['lose']({
            'opponent': opponent
          }));
        }

    })
    Game.router= new Game.GameRouter();
})();
