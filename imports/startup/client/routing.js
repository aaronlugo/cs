import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout'

import '/imports/ui/layouts/masterLayout.js';
import '/imports/ui/layouts/nonLoggedinLayout.html';

import '/imports/ui/views/login/login.js';
import '/imports/ui/views/dashboard/dashboard.js';

import '/imports/ui/views/employes/create.js';
import '/imports/ui/views/skills/create.js';
import '/imports/ui/views/cuadrillas/create.js';
import '/imports/ui/views/proyectos/create.js';
import '/imports/ui/views/employes/view.js';
import '/imports/ui/views/skills/view.js';
import '/imports/ui/views/cuadrillas/view.js';
import '/imports/ui/views/proyectos/view.js';
import '/imports/ui/views/proyectos/calendario-proyectos.js';
import '/imports/ui/views/proyectos/calendario-cuadrillas.js';


FlowRouter.route('/login', {
  name:'login',
  action: () => {
    BlazeLayout.render("nonLoggedInLayout", {
      view: "login"
    });
  }
});

const dashboardRoutes = FlowRouter.group({
  prefix: '/dashboard',
  name: 'dashboard'
});

dashboardRoutes.route('/', {
  name:'dashboard',
  action: () => {
    BlazeLayout.render("masterLayout", {
      view: "dashboard"
    });
  }
});

dashboardRoutes.route('/employes/view', {
  name:'employesView',
  action: () => {
    BlazeLayout.render("masterLayout", {
      view: "employesView"
    });
  }
});

dashboardRoutes.route('/employes/create', {
  name:'employesCreate',
  action: () => {
    BlazeLayout.render("masterLayout",{
      view:"employesCreate"
    });
  }
});

dashboardRoutes.route('/skills/view', {
  name:'skillsView',
  action: () => {
    BlazeLayout.render("masterLayout",{
      view:"skillsView"
    });
  }
});

dashboardRoutes.route('/skills/create', {
  name:'skillsCreate',
  action: () => {
    BlazeLayout.render("masterLayout",{
      view:"skillsCreate"
    });
  }
});

dashboardRoutes.route('/cuadrillas/view', {
  name:'cuadrillasView',
  action: () => {
    BlazeLayout.render("masterLayout",{
      view:"cuadrillasView"
    });
  }
});

dashboardRoutes.route('/cuadrillas/create', {
  name:'cuadrillasCreate',
  action: () => {
    BlazeLayout.render("masterLayout",{
      view:"cuadrillasCreate"
    });
  }
});

dashboardRoutes.route('/proyectos/view', {
  name:'proyectosView',
  action: () => {
    BlazeLayout.render("masterLayout",{
      view:"proyectosView"
    });
  }
});

dashboardRoutes.route('/proyectos/create', {
  name:'proyectosCreate',
  action: () => {
    BlazeLayout.render("masterLayout",{
      view:"proyectosCreate"
    });
  }
});

dashboardRoutes.route('/proyectos/calendario-proyectos', {
  name:'proyectosCalendarioProyectos',
  action: () => {
    BlazeLayout.render("masterLayout",{
      view:"proyectosCalendarioProyectos"
    });
  }
});

dashboardRoutes.route('/proyectos/calendario-cuadrillas', {
  name:'proyectosCalendarioCuadrillas',
  action: () => {
    BlazeLayout.render("masterLayout",{
      view:"proyectosCalendarioCuadrillas"
    });
  }
});
