import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout'

import '/imports/ui/layouts/masterLayout.js';
import '/imports/ui/layouts/nonLoggedinLayout.html';
import '/imports/ui/views/login/login.js';
import '/imports/ui/views/home/home.js';

FlowRouter.route('/login', {
  name:'login',
  action: () => {
    BlazeLayout.render("nonLoggedInLayout", {
      view: "login"
    });
  }
});

FlowRouter.route('/', {
  name:'home',
  action: () => {
    BlazeLayout.render("masterLayout", {
      view: "home"
    });
  }
});
