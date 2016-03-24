import Ember from 'ember';

export default Ember.Controller.extend({

  kudo: 0,


  actions: {
   giveKudo(person) {
     this.incrementProperty('kudo');
     person.save();
   },
   delete(person) {
    person.deleteRecord();
    person.save();
    },
 },
});
