import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
   giveKudo(person) {
     person.deleteRecord();
     person.save();
   },
 },
});
