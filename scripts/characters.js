/**
 * Created by firewaterjoe on 6/5/15.
 */
window.Game = window.Game || {};
(function(){

  Game.Character = function(){
    this.attack = function(){return Math.random()};
    this.health= 10;
  }

  //var orange = new Character();
  //var grey = new Character();
  //var white = new Character();

 Game.Opponent = function(){
    this.attack = function(){return Math.random()};
    this.health = 10;
  }

  //var theHound = new Opponent();
  //var theMountain = new Opponent();
  //var joffrey = new Opponent();

})();

