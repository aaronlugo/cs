import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Meteor } from 'meteor/meteor';

export const UserProfile = new SimpleSchema({
   nombre: {
     type: String,
     label: 'Nombre'
   },
   apellidos: {
     type: String,
     label: 'Apellidos'
   }
 })

export const UserSchema = new SimpleSchema({
   username: {
     type: String,
     regEx: /^[a-z0-9A-Z_]{3,15}$/,
     optional: true
   },
   emails: {
       type: [Object],
       optional: true
   },

   'emails.$.address': {
       type: String,
       regEx: SimpleSchema.RegEx.Email
   },

   'emails.$.verified': {
       type: Boolean
   },
   createdAt: {
     type: Date,
     optional: true
   },
   profile: {
     type: UserProfile,
     optional: true
   },
   services: {
     type: Object,
     optional: true,
     blackbox: true
   }
 });

Meteor.users.attachSchema(UserSchema);
