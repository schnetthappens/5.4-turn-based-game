this["JST"] = this["JST"] || {};
this["JST"]["application"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h1>Hello</h1>\n";
},"useData":true});
this["JST"]["container"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h1>Hero</h1>\n<div class=\"character\"></div>\n<!--attach the player.hbs with the player images to the character div-->";
},"useData":true});
this["JST"]["lose"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});
this["JST"]["opponent"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div><img src=\"../images/characters/"
    + this.escapeExpression(((helper = (helper = helpers.player || (depth0 != null ? depth0.player : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"player","hash":{},"data":data}) : helper)))
    + ".jpg\" alt=\"\" class=\"hero-player\"/></div>\n<h1>Villain</h1>\n<img id=\"joffrey\" class=\"pick-villain\" src=\"../images/opponents/joffrey.jpg\" alt=\"\"/>\n<img id=\"The-Hound-008\" class=\"pick-villain\" src=\"../images/opponents/The-Hound-008.jpg\" alt=\"\"/>\n<img id=\"the-mountain\" class=\"pick-villain\" src=\"../images/opponents/the-mountain.jpg\" alt=\"\"/>";
},"useData":true});
this["JST"]["play"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<h1>Play</h1>\n<div class=\"class\">\n    <img src=\"../images/characters/"
    + alias3(((helper = (helper = helpers.player || (depth0 != null ? depth0.player : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"player","hash":{},"data":data}) : helper)))
    + ".jpg\" alt=\"\"/>\n    <img src=\"../images/opponents/"
    + alias3(((helper = (helper = helpers.villain || (depth0 != null ? depth0.villain : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"villain","hash":{},"data":data}) : helper)))
    + ".jpg\" alt=\"\"/>\n</div>\n<button class=\"attack\">Attack!</button>\n";
},"useData":true});
this["JST"]["player"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<img id=\"grey\" class=\"pick-player\" src=\"../images/characters/grey.jpg\" alt=\"\"/>\n<img id=\"orange\" class=\"pick-player\" src=\"../images/characters/orange.jpg\" alt=\"\"/>\n<img id=\"white\" class=\"pick-player\" src=\"../images/characters/white.jpg\" alt=\"\"/>\n";
},"useData":true});
this["JST"]["win"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});