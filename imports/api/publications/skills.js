import { Meteor } from 'meteor/meteor';
import { Skills } from '/imports/api/collections';

Meteor.publish('getSKills', function() {
  return Skills.find();
});
