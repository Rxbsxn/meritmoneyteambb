import Ember from 'ember';
export default Ember.Controller.extend({
  actions: {
    addPerson: function() {
      var newPerson = this.store.createRecord('person', {
        name: this.get('name'),
      });
      newPerson.save();
      this.transitionTo('people');
    },
  },
});
