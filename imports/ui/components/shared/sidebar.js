import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './sidebar.html';
import './sidebar.css';

Template.sidebar.events({
  "click .panel"(event) {
    event.preventDefault();
    const openClass = $(event.currentTarget).hasClass('open');
    if (openClass) {
      $(event.currentTarget).removeClass('open');
    } else {
      $('#sidebar-main > li').removeClass('open');
      $(event.currentTarget).addClass('open');
    }
  },
  'click .nav-second-trigger'(event) {
    const redirectRoute = $(event.target).data().redirect
    console.log(redirectRoute);
    FlowRouter.go(redirectRoute)
  }
})
