/**
 * Routes.
 * @module routes
 */

import { defaultRoutes } from '@plone/volto/routes';
import config from '@plone/volto/registry';
import Quiz from './components/Quiz';
import ContactForm from './components/ContactForm';

/**
 * Routes array.
 * @array
 * @returns {array} Routes.
 */
const routes = [
  {
    path: '/',
    component: config.getComponent('App').component, // Change this if you want a different component
    routes: [
      // Add your routes here
      {
        path: '/quiz',
        component: Quiz,
        exact: true,
      },
      {
        path: '/contact',
        component: ContactForm,
        exact: true,
      },

      ...(config.addonRoutes || []),
      ...defaultRoutes,
    ],
  },
];

export default routes;
