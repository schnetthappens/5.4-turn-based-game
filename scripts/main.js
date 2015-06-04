window.Game = window.Game || {};
(function(){
  'use strict';
  Game.vent = _.extend({},Backbone.Events);

  $(document).ready(function(){
    Backbone.history.start();
    //$('body').prepend(JST['application']());
  });
})();
