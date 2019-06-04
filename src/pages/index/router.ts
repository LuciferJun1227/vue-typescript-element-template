import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
export default new Router({
  mode: 'history',
  // base: `${window.ROUTER_BASE}/apimanage/`,
  base: 'apimanage/',
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import(/* webpackChunkName: "homeIndex" */ './views/Dashboard.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import(/* webpackChunkName: "about" */ './views/Dashboard.vue'),
    },
    {
      path: '/myClient',
      name: 'myClient',
      component: () => import(/* webpackChunkName: "myClient" */ './views/MyClient.vue'),
    },
    {
      path: '/clientApply',
      name: 'clientApply',
      component: () => import(/* webpackChunkName: "clientApply" */ './views/ClientApply.vue'),
    },
    {
      path: '/serviceRegister',
      name: 'serviceRegister',
      component: () => import(/* webpackChunkName: "serviceRegister" */ './views/ServiceRegister.vue'),
    },
    {
      path: '/serviceApply',
      name: 'serviceApply',
      component: () => import(/* webpackChunkName: "serviceApply" */ './views/ServiceApply.vue'),
    },
    {
      path: '/myClass',
      name: 'myClass',
      component: () => import(/* webpackChunkName: "myClass" */ './views/MyClass.vue'),
    },
    {
      path: '/createClass',
      name: 'createClass',
      component: () => import(/* webpackChunkName: "createClass" */ './views/CreateClass.vue'),
    },
    {
      path: '/editSource',
      name: 'editSource',
      component: () => import(/* webpackChunkName: "editSource" */ './views/EditSource.vue'),
    },
    {
      path: '/clientApplyAboutMe',
      name: 'clientApplyAboutMe',
      component: () => import(/* webpackChunkName: "clientApplyAboutMe" */ './views/ClientApplyAboutMe.vue'),
    },
    {
      path: '/serviceList',
      name: 'serviceList',
      component: () => import(/* webpackChunkName: "serviceList" */ './views/ServiceList.vue'),
    },
    {
      path: '/serviceDetail',
      name: 'serviceDetail',
      component: () => import(/* webpackChunkName: "serviceDetail" */ './views/ServiceDetail.vue'),
    },
    {
      path: '/myService',
      name: 'myService',
      component: () => import(/* webpackChunkName: "myService" */ './views/MyService.vue'),
    },
    {
      path: '/clientApplyAudit',
      name: 'clientApplyAudit',
      component: () => import(/* webpackChunkName: "clientApplyAudit" */ './views/ClientApplyAudit.vue'),
    },
    {
      path: '/serviceApplyAudit',
      name: 'serviceApplyAudit',
      component: () => import(/* webpackChunkName: "serviceApplyAudit" */ './views/ServiceApplyAudit.vue'),
    },
    {
      path: '/clientResourceAudit',
      name: 'clientResourceAudit',
      component: () => import(/* webpackChunkName: "clientResourceAudit" */ './views/ClientResourceAudit.vue'),
    },
    {
      path: '/clientResourceAuditDetail',
      name: 'clientResourceAuditDetail',
      component: () => import(/* webpackChunkName: "clientResourceAuditDetail" */ './views/ClientResourceAuditDetail.vue'),
    },
  ],
});
