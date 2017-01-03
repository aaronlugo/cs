import './login.html';

Template.login.events({
  'submit #loginForm'(event, template) {
    event.preventDefault();
    console.log('entro');
  }
})
