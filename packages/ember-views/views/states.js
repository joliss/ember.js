import "ember-views/views/states/default";
import "ember-views/views/states/pre_render";
import "ember-views/views/states/in_buffer";
import "ember-views/views/states/in_dom";
import "ember-views/views/states/destroying";

Ember.View.cloneStates = function(from) {
  var into = {};

  into._default = {};
  into.preRender = Ember.create(into._default);
  into.destroying = Ember.create(into._default);
  into.inBuffer = Ember.create(into._default);
  into.hasElement = Ember.create(into._default);
  into.inDOM = Ember.create(into.hasElement);

  for (var stateName in from) {
    if (!from.hasOwnProperty(stateName)) { continue; }
    Ember.merge(into[stateName], from[stateName]);
  }

  return into;
};
