import { UserProfile } from '/imports/api/models/users.js';

import './create.html';

Forms.mixin(Template.employesCreate);

Template.employesCreate.events({
  'documentSubmit': function (e, tmpl, doc) {
    console.log(doc);
  }
});
