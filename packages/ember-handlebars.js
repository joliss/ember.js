import "ember-runtime";
import "ember-handlebars-compiler";
import "ember-views";
import "ember-handlebars/ext";
import "ember-handlebars/string";
import "ember-handlebars/helpers";
import "ember-handlebars/views";
import "ember-handlebars/controls";
import "ember-handlebars/loader";

/**
Ember Handlebars

@module ember
@submodule ember-handlebars
@requires ember-views
*/

Ember.runLoadHooks('Ember.Handlebars', Ember.Handlebars);
