import Ember from 'ember';

export default Ember.Controller.extend({

  kudo: 20,


  actions: {
   giveKudo(person) {
     this.decrementProperty('kudo');
     person.save();
   },
   delete(person) {
    person.deleteRecord();
    person.save();
    },
 },
});
