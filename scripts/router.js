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
            setTimeout(Game.showButton,3000);

        },
        lose: function(){
          var opponent = this.opponentVar();
          $('.application').html(JST['lose']({
            'opponent': opponent
          }));
            setTimeout(Game.showButton, 2000);

        }

    });
    Game.router= new Game.GameRouter();
    Game.showButton = function (){

        $('.container img').after('<button class="play-again-btn" name="button">Play again</button>');
        $('.play-again-btn').fadeIn(1500,function(){
            $(this).on('click',function(e){
                e.preventDefault();
                Game.router.navigate('', {trigger: true});
            })
        });
    }
})();
