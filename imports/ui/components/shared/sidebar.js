import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './sidebar.html';
import './sidebar.css';

Template.sidebar.events({
  "click .panel": function (event) {
    event.preventDefault();
    const openClass = $(event.currentTarget).hasClass('open');
    if (openClass) {
      $(event.currentTarget).removeClass('open');
    } else {
      $('#sidebar-main > li').removeClass('open');
      $(event.currentTarget).addClass('open');
    }
  }
})
