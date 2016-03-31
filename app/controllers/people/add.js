import Ember from 'ember';
export default Ember.Controller.extend({
  actions: {
    addPerson: function() {
      var newPerson = this.store.createRecord('user', {
        name: this.get('name'),
        imageUrl: this.get('imageUrl'),

      });
      newPerson.save();
      this.transitionTo('people');
    },
  },
});
