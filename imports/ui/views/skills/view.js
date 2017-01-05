import { Meteor } from 'meteor/meteor';

import { Skills } from '/imports/api/collections';

import './view.html';

Template.skillsView.helpers({
  skills() {
    console.log('entro');
    return Skills.find().fetch();
  }
})

Template.skillsView.onCreated(function() {
  Meteor.subscribe('getSKills');
});
