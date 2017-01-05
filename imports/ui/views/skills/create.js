import { Skills } from '/imports/api/collections';
import './create.html';

Forms.mixin(Template.skillsCreate);

Template.skillsCreate.events({
  'documentSubmit': function (e, tmpl, doc) {
    Skills.insert(doc)
  }
});
