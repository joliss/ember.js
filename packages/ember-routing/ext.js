import "ember-routing/ext/controller";
import "ember-routing/ext/view";

/**
@module ember
@submodule ember-views
*/

// Add a new named queue after the 'actions' queue (where RSVP promises
// resolve), which is used in router transitions to prevent unnecessary
// loading state entry if all context promises resolve on the 
// 'actions' queue first.

var queues = Ember.run.queues,
    indexOf = Ember.ArrayPolyfills.indexOf;
queues.splice(indexOf.call(queues, 'actions') + 1, 0, 'routerTransitions');
