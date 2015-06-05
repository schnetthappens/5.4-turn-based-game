window.Game = window.Game || {};
(function(){
  'use strict';
  var player = localStorage.getItem("player") || "";
  var villain = localStorage.getItem("villain") || "";
  Game.vent = _.extend({},Backbone.Events);

  $(document).ready(function(){
    Backbone.history.start();
    $(document).on('click','.pick-player', function(e){
      e.preventDefault();
      player = e.target.id;
      localStorage.setItem("player",player);

      Game.router.navigate('opponent',{trigger:true});
    });
    $(document).on('click','.pick-villain', function (e){
      e.preventDefault();
      villain = e.target.id;
      localStorage.setItem("villain",villain);
      Game.router.navigate('play',{trigger:true});
    });
  });
})();
