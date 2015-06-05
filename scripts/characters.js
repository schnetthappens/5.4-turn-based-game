/**
 * Created by firewaterjoe on 6/5/15.
 */
window.Game = window.Game || {};
(function(){

  function Character(){
    attack: Math.random();
    health: 10;
  }

  var orange = new Character();
  var grey = new Character();
  var white = new Character();

  function Opponent(){
    attack: Math.random();
    health: 10;
  }

  var theHound = new Opponent();
  var theMountain = new Opponent();
  var joffrey = new Opponent();

})();
