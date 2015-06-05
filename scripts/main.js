window.Game = window.Game || {};
(function(){
  'use strict';
  var player = localStorage.getItem("player") || "";
  var opponent = localStorage.getItem("opponent") || "";


  $(document).ready(function(){
    Backbone.history.start();
    //t
    $(document).on('click','.pick-player', function(e){
      e.preventDefault();
      player = e.target.id;
      localStorage.setItem("player",player);
      Game.router.navigate('opponent',{trigger:true});
    });
    $(document).on('click','.pick-opponent', function (e){
      e.preventDefault();
      opponent = e.target.id;
      localStorage.setItem("opponent",opponent);
      Game.router.navigate('play',{trigger:true});
    });
    $(document).on('click','.attack', function(e){
      e.preventDefault();
      Game.vent.trigger("say:hi");
    })
  });


})();
